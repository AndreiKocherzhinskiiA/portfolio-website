// Global motion setup: loader choreography, curtain shutter transition,
// directional button fills, cursor-following work preview, and Signal Driver.
import { gsap } from 'gsap';
import {
  ease,
  isTouch,
  onPage,
  onScroll,
  prefersReducedMotion,
  setLoaderExit,
  setLoaderFormat,
  setTransition,
} from '../engine';
import { startSignalDriver } from './signal';

export function setupMotion() {
  setLoaderFormat((p) => `${String(Math.round(p)).padStart(3, '0')} HZ`);
  setLoaderExit((root) => {
    const out = root.querySelectorAll('[data-loader-out]');
    return gsap.timeline()
      .to(out, { y: -12, autoAlpha: 0, duration: 0.22, ease: ease.inOut, stagger: 0.025 })
      .to(root, { yPercent: -102, duration: 0.34, ease: ease.inOut }, '-=0.1');
  });

  // Directional curtain shutter across ClientRouter swaps
  setTransition({
    leave: (c) => {
      const panel = c.querySelector('.curtain__panel') as HTMLElement;
      return gsap.timeline()
        .set(c, { autoAlpha: 1 })
        .set(panel, { clipPath: 'none' })
        .fromTo(
          panel,
          { yPercent: 100 },
          { yPercent: 0, duration: 0.24, ease: ease.inOut }
        )
        .to(panel, { duration: 0.12 });
    },
    enter: (c) => {
      const panel = c.querySelector('.curtain__panel') as HTMLElement;
      return gsap.timeline()
        .to(panel, { yPercent: -104, duration: 0.52, ease: 'power2.in' })
        .set(c, { autoAlpha: 0 });
    },
  });

  startSignalDriver();
  registerButtonFills();
  registerIndexPreview();
  registerClockAndCopy();
  registerMenuDrawer();
}

function registerButtonFills() {
  onPage(() => {
    if (isTouch() || prefersReducedMotion()) return;
    const off: (() => void)[] = [];
    document.querySelectorAll<HTMLElement>('[data-fill]').forEach((btn) => {
      const fill = btn.querySelector<HTMLElement>('.btn__fill');
      if (!fill) return;
      const from = (e: PointerEvent) => {
        const r = btn.getBoundingClientRect();
        return `${e.clientX - r.left}px ${e.clientY - r.top}px`;
      };
      let closed = true;
      const open = (at: string) => {
        if (closed) gsap.set(fill, { clipPath: `circle(0% at ${at})` });
        closed = false;
        btn.classList.add('is-filled');
        gsap.to(fill, { clipPath: `circle(155% at ${at})`, duration: 0.55, ease: ease.soft, overwrite: true });
      };
      const close = (at: string) => {
        btn.classList.remove('is-filled');
        gsap.to(fill, {
          clipPath: `circle(0% at ${at})`,
          duration: 0.45,
          ease: ease.soft,
          overwrite: true,
          onComplete: () => { closed = true; },
        });
      };
      const enter = (e: PointerEvent) => open(from(e));
      const leave = (e: PointerEvent) => close(from(e));
      const focus = () => btn.matches(':focus-visible') && open('50% 50%');
      const blur = () => close('50% 50%');
      btn.addEventListener('pointerenter', enter);
      btn.addEventListener('pointerleave', leave);
      btn.addEventListener('focus', focus);
      btn.addEventListener('blur', blur);
      off.push(() => {
        btn.removeEventListener('pointerenter', enter);
        btn.removeEventListener('pointerleave', leave);
        btn.removeEventListener('focus', focus);
        btn.removeEventListener('blur', blur);
      });
    });
    return () => off.forEach((f) => f());
  });
}

function registerIndexPreview() {
  onPage(() => {
    const list = document.querySelector<HTMLElement>('[data-index]');
    const box = document.querySelector<HTMLElement>('.index-preview');
    if (!list || !box || isTouch() || prefersReducedMotion()) return;
    const img = box.querySelector<HTMLImageElement>('img');
    const tag = box.querySelector<HTMLElement>('[data-preview-tag]');
    if (!img) return;

    const x = gsap.quickTo(box, 'x', { duration: 0.55, ease: 'power3.out' });
    const y = gsap.quickTo(box, 'y', { duration: 0.55, ease: 'power3.out' });
    const rot = gsap.quickTo(box, 'rotate', { duration: 0.75, ease: 'power3.out' });
    let lastX = 0, px = 0, py = 0, activeRow: HTMLElement | null = null;
    let lastScrollY = scrollY;
    let lastScrollAt = 0;

    // Anchor preview squarely inside the open column gap between discipline and telemetry
    const placeFor = (rx: number, ry: number, row: HTMLElement | null) => {
      const vw = innerWidth;
      const vh = innerHeight;
      const laneX = Math.max(vw * 0.665, Math.min(vw - 160, vw * 0.665 + (rx - vw * 0.5) * 0.04));
      let laneY = ry;
      if (row) {
        const r = row.getBoundingClientRect();
        laneY = r.top + r.height * 0.5 + gsap.utils.clamp(-14, 14, (ry - (r.top + r.height * 0.5)) * 0.2);
      }
      laneY = Math.max(108, Math.min(vh - 108, laneY));
      x(laneX);
      y(laneY);
    };

    const move = (e: PointerEvent) => {
      px = e.clientX;
      py = e.clientY;
      placeFor(px, py, activeRow);
      rot(gsap.utils.clamp(-6, 6, (px - lastX) * 0.35));
      lastX = px;
    };

    const show = (e: Event) => {
      if (e.type !== 'focus' && performance.now() - lastScrollAt < 180) return;
      const target = e.currentTarget as HTMLElement;
      activeRow = target;
      const src = target.dataset.preview;
      if (!src) return;
      if (img.src !== src) img.src = src;
      if (tag && target.dataset.previewTag) tag.textContent = target.dataset.previewTag;
      const r = target.getBoundingClientRect();
      placeFor(r.left + r.width * 0.65, r.top + r.height * 0.5, target);
      gsap.to(box, { autoAlpha: 1, scale: 1, duration: 0.45, ease: 'expo.out', overwrite: true });
    };

    const hide = () => {
      activeRow = null;
      gsap.to(box, { autoAlpha: 0, scale: 0.88, duration: 0.35, ease: 'expo.out', overwrite: true });
    };

    const anchors = list.querySelectorAll<HTMLAnchorElement>('a[data-preview]');
    anchors.forEach((a) => {
      a.addEventListener('pointerenter', show);
      a.addEventListener('focus', show);
    });
    list.addEventListener('pointerleave', hide);
    addEventListener('pointermove', move, { passive: true });
    const offScroll = onScroll(({ y: sy }) => {
      if (Math.abs(sy - lastScrollY) > 2) {
        lastScrollAt = performance.now();
        lastScrollY = sy;
        hide();
        return;
      }
      lastScrollY = sy;
      const hovered = document.elementFromPoint(px, py);
      if (!hovered || !list.contains(hovered)) hide();
    });

    return () => {
      removeEventListener('pointermove', move);
      list.removeEventListener('pointerleave', hide);
      anchors.forEach((a) => {
        a.removeEventListener('pointerenter', show);
        a.removeEventListener('focus', show);
      });
      offScroll();
    };
  });
}

function registerClockAndCopy() {
  onPage(() => {
    const clockEl = document.querySelector<HTMLElement>('[data-bcn-time]');
    const updateClock = () => {
      if (!clockEl) return;
      clockEl.textContent = new Intl.DateTimeFormat('en-GB', {
        timeZone: 'Europe/Madrid',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
      }).format(new Date());
    };
    updateClock();
    const timer = window.setInterval(updateClock, 30000);

    const copyBtn = document.querySelector<HTMLButtonElement>('[data-copy-email]');
    const onCopy = async () => {
      if (!copyBtn) return;
      const email = copyBtn.dataset.copyEmail || '';
      try {
        await navigator.clipboard.writeText(email);
        const span = copyBtn.querySelector<HTMLElement>('[data-copy-label]');
        if (span) {
          const orig = span.textContent;
          span.textContent = 'Copied to clipboard';
          setTimeout(() => { span.textContent = orig; }, 2200);
        }
      } catch {
        // Fallback: open mailto if clipboard API unavailable
        location.href = `mailto:${email}`;
      }
    };
    copyBtn?.addEventListener('click', onCopy);

    return () => {
      clearInterval(timer);
      copyBtn?.removeEventListener('click', onCopy);
    };
  });
}

function registerMenuDrawer() {
  onPage(() => {
    const openBtn = document.querySelector<HTMLButtonElement>('[data-menu-open]');
    const drawer = document.getElementById('menu-drawer') as HTMLDialogElement | null;
    const closeBtn = drawer?.querySelector<HTMLButtonElement>('[data-menu-close]');
    if (!openBtn || !drawer) return;

    const syncExpanded = () => {
      openBtn.setAttribute('aria-expanded', drawer.open ? 'true' : 'false');
    };
    const onOpen = () => {
      if (!drawer.open) drawer.showModal();
      syncExpanded();
    };
    const onCloseBtn = () => drawer.close();
    const onBackdropClick = (e: MouseEvent) => {
      if (e.target === drawer) drawer.close();
    };
    const links = drawer.querySelectorAll<HTMLAnchorElement>('[data-drawer-link]');
    const onLinkClick = () => {
      if (drawer.open) drawer.close();
    };

    openBtn.addEventListener('click', onOpen);
    closeBtn?.addEventListener('click', onCloseBtn);
    drawer.addEventListener('click', onBackdropClick);
    drawer.addEventListener('close', syncExpanded);
    links.forEach((l) => l.addEventListener('click', onLinkClick));

    return () => {
      if (drawer.open) drawer.close();
      openBtn.removeEventListener('click', onOpen);
      closeBtn?.removeEventListener('click', onCloseBtn);
      drawer.removeEventListener('click', onBackdropClick);
      drawer.removeEventListener('close', syncExpanded);
      links.forEach((l) => l.removeEventListener('click', onLinkClick));
    };
  });
}
