// Single Signal Driver: owns the global frequency state across WebGL background,
// variable display typography, live frequency telemetry, and idle breathing.
import { gsap } from 'gsap';
import { onPage, onScroll, setBackground, prefersReducedMotion, isTouch } from '../engine';

const SIGNAL_FRAG = /* glsl */ `
precision mediump float;
varying vec2 vUv;
uniform float uTime, uScroll, uVelocity, uFreq, uAmp;
uniform vec2 uMouse, uResolution;

float hash(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }

void main() {
  // Base mineral stone #F2F1EC
  vec3 ground = vec3(0.949, 0.945, 0.925);
  vec3 cobalt = vec3(0.055, 0.275, 0.831);
  vec3 slate  = vec3(0.18, 0.19, 0.23);

  vec2 aspect = vec2(uResolution.x / max(uResolution.y, 1.0), 1.0);
  vec2 p = (vUv - 0.5) * aspect;
  vec2 m = (uMouse - 0.5) * aspect;

  // Standing acoustic + protocol field coupled to active project frequency (uFreq)
  float t = uTime * 0.35;
  float dist = length(p - m * 0.45);
  float phase = p.x * (3.0 + uFreq * 1.4) + p.y * (1.8 + uScroll * 2.5) + t;
  float wave = sin(phase + sin(p.y * 4.0 - t * 0.8) * 0.45) * 0.5
             + cos(dist * (8.0 + uFreq * 1.6) - t * 1.2) * 0.35;

  // Subtle architectural topographic contour lines
  float contour = smoothstep(0.042, 0.0, abs(fract(wave * 1.65) - 0.5));
  float focusGlow = smoothstep(0.75, 0.0, dist);

  // Fade gently near center top so mega typography preserves crisp contrast
  float mask = smoothstep(0.06, 0.85, abs(p.y) * 1.35 + focusGlow * 0.45);
  vec3 lineCol = mix(slate, cobalt, clamp(focusGlow * 0.9 + uAmp * 0.65, 0.0, 1.0));
  vec3 col = mix(ground, lineCol, contour * (0.14 + 0.065 * uAmp) * mask);

  gl_FragColor = vec4(col, 1.0);
}`;

const uniforms = {
  uFreq: { value: 1.0 },
  uAmp: { value: 0.35 },
};

let activeChannel = 0;

export function tuneFrequency(index: number, label?: string) {
  activeChannel = index;
  if (!prefersReducedMotion()) {
    gsap.to(uniforms.uFreq, { value: 1.0 + index * 0.55, duration: 0.8, ease: 'expo.out', overwrite: true });
    gsap.to(uniforms.uAmp, { value: 0.72, duration: 0.45, ease: 'power3.out', overwrite: true, onComplete: () => {
      gsap.to(uniforms.uAmp, { value: 0.38, duration: 1.1, ease: 'power2.out' });
    }});
  }
  const el = document.querySelector<HTMLElement>('[data-signal-readout]');
  if (el && label) el.textContent = label;
}

export function startSignalDriver() {
  const bg = setBackground(SIGNAL_FRAG, uniforms);
  if (!bg) document.documentElement.style.background = '#F2F1EC';

  // Variable-font / signal frequency step on scroll (keep typography layout fixed during scroll for 60fps)
  let lastY = 0;
  let acc = 0;
  let away = false;

  onScroll(({ y, progress }) => {
    if (activeChannel === 0 && !prefersReducedMotion()) {
      uniforms.uFreq.value = 1.0 + progress * 2.2;
    }

    const dy = y - lastY;
    lastY = y;
    if (y <= 56) {
      away = false;
      acc = 0;
    } else if (Math.abs(dy) >= 1) {
      acc = (dy > 0 && acc < 0) || (dy < 0 && acc > 0) ? dy : acc + dy;
      if (acc > 10) away = true;
      else if (acc < -120) away = false;
    }

    const root = document.documentElement;
    root.classList.toggle('is-scrolled', y > 40);
    root.classList.toggle('frame-away', away);
  });

  onPage(() => {
    activeChannel = 0;
    lastY = 0;
    acc = 0;
    away = false;
    document.documentElement.classList.remove('frame-away', 'is-scrolled');

    // Interactive frequency buttons in Hero & Work Index rows
    const off: (() => void)[] = [];
    document.querySelectorAll<HTMLElement>('[data-freq-index]').forEach((node) => {
      const idx = parseInt(node.dataset.freqIndex || '1', 10);
      const label = node.dataset.freqLabel || '';
      const activate = () => tuneFrequency(idx, label);
      node.addEventListener('pointerenter', activate);
      node.addEventListener('focus', activate);
      off.push(() => {
        node.removeEventListener('pointerenter', activate);
        node.removeEventListener('focus', activate);
      });
    });

    // Subtle pointer responsiveness on hero variable display type (desktop only)
    const heroSurname = document.querySelector<HTMLElement>('[data-hero-wdth]');
    if (heroSurname && !isTouch() && !prefersReducedMotion()) {
      const move = (e: PointerEvent) => {
        const nx = e.clientX / Math.max(innerWidth, 1);
        const wdth = Math.round(96 + nx * 24);
        heroSurname.style.fontVariationSettings = `"wght" 800, "wdth" ${wdth}`;
      };
      addEventListener('pointermove', move, { passive: true });
      off.push(() => removeEventListener('pointermove', move));
    }

    return () => off.forEach((fn) => fn());
  });
}
