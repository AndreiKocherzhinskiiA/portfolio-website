# Portfolio Design Specification — Andrei Kocherzhinskii

## 0. Brief & Stack Decision
- **Subject:** Andrei Kocherzhinskii (Software Engineer & Full-Stack Developer, B.S. Computer Science at Epitech Barcelona 2024–2027 expected, Co-Founder of A&A Devs).
- **Location & Links:** Barcelona, Spain · `andrei.kocherzhinskii@gmail.com` · `github.com/AndreiKocherzhinskiiA` · `es.linkedin.com/in/andrei-kocherzhinskii` · `a-a-devs.com`
- **Audience & Job:** Senior engineering teams, founders, and technical hiring leads. Prove within 3 seconds that Andrei ships deterministic software systems end-to-end across local AI/LLM pipelines, native Swift 6 mobile audio, cryptographic NFC hospitality SaaS, POSIX C++17 networking, and App Store simulation games.
- **Stack:** **Astro + TypeScript + Plain CSS Tokens + GSAP (SplitText, ScrollTrigger) + Lenis + OGL**.
  - *Why Astro:* This portfolio is a motion- and WebGL-driven showcase without backend auth or user sessions. Astro produces static HTML for fast mobile LCP (<1.5 s), keeps total JS near ~75 KB gzipped (vs ~250 KB baseline in Next.js), prevents React hydration conflicts when SplitText wraps text nodes, and lets `ClientRouter` overlap page-leave transitions with route prefetching.
- **Assumptions & Placeholders:**
  - Production canonical URL set to `https://andreikocherzhinskii.dev` (marked as placeholder in `src/data/site.ts` for owner update at deploy).
  - LinkedIn profile (`es.linkedin.com/in/andrei-kocherzhinskii`) is not publicly indexed without authentication; work history, dates, and technical metrics are sourced directly from `Andrei_Kocherzhinskii_Resumev4.pdf`, public GitHub repositories (`AndreiKocherzhinskiiA`), and `a-a-devs.com`.
  - Editorial cover photography for `MesaFlow` and `Zappy` generated via bespoke studio visual generation (`src/assets/`) because those repositories/sites did not expose clean standalone stills; `Sense AI`, `Sonora`, and `Ultimate Success` use Andrei's authentic repository/studio visual assets.

---

## 1. Concept Exploration (Phase 1)

### Concept A — Process Territory: "Protocol Handshake"
- **Sentence:** The portfolio behaves like a closed-loop hardware-to-software handshake (`SYN → ACK → VERIFY → SHIP`), stepping through system states as you scroll and expanding protocol telemetry on project inspection.
- **Anchor:** Andrei ships deterministic state loops: POSIX `poll()` networking, AES-CMAC NFC anti-replay checks, atomic SQLite rollbacks, and byte-range offline audio.
- **Layout:** Split register with 12-column blueprint rules; massive surname header; project rows acting as live channel switches.
- **Motion verb:** Latch & resolve.
- **Type:** Archivo variable + General Sans + JetBrains Mono.
- **Palette:** Drafting paper `#F2F1EC`, carbon `#0D0E12`, blueprint cobalt `#0E46D4`.
- **Signature:** Live system telemetry handshake panel coupled to project rows.
- **Screenshot:** Hero with `KOCHERZHINSKII` spanning edge-to-edge over clean blueprint grid lines and live state indicator.
- **Scores (O/F/Fe/P):** 4 / 5 / 5 / 2.

### Concept B — Place Territory: "The Chamfered Grid (Xamfrà)"
- **Sentence:** Inspired by Barcelona's Pla Cerdà octagonal chamfered blocks, every frame on the site uses a 45-degree bevel cut where street intersections anchor each project.
- **Anchor:** Andrei studies at Epitech Barcelona and deploys MesaFlow to pilot restaurants in Barcelona.
- **Layout:** Orthogonal 12-column street grid with chamfered `clip-path` image plates.
- **Motion verb:** Slide & bevel.
- **Type:** Panchang + General Sans.
- **Palette:** Limestone `#EFEFF2`, harbor blue `#0B3B8C`, iron `#121316`.
- **Signature:** Chamfered frame geometry opening along diagonal intersections on scroll.
- **Screenshot:** Chamfered full-bleed project gallery plate anchored to intersection markers.
- **Scores (O/F/Fe/P):** 4 / 3 / 4 / 3.

### Concept C — Material Territory: "Five Frequencies (Signal-to-Software)" — **SELECTED**
- **Sentence:** Andrei builds across five distinct signal physics (LLM token streams, iOS acoustic waveforms, 13.56 MHz NFC fields, POSIX TCP packets, and stochastic Brownian motion), so a single live Signal Plane behind the site modulates its WebGL geometry, variable typography, and telemetry to lock onto whichever project is in focus.
- **Anchor:** Only Andrei Kocherzhinskii pairs those exact five systems: `Sense AI` (`Ollama/MCP`), `Sonora` (`Swift 6 AVFoundation`), `MesaFlow` (`NTAG424 DNA AES-CMAC`), `Zappy` (`C++17 POSIX poll()`), and `Ultimate Success` (`Geometric Brownian Motion`).
- **Layout:** 12-column Swiss-engineering grid on Mineral Alabaster (`#F2F1EC`). Every section uses a distinct layout family: Poster Hero → Signal Frequency Index (with cursor-following WebGL/raster preview) → Asymmetric Staggered Flagship Plates → Pinned Sticky Architecture Stack → Systems Open-Source Archive → Dark Obsidian Finale Footer.
- **Motion verb:** **Modulate & lock.** Forms ripple continuously under idle `uTime` and pointer velocity, then lock squarely onto grid lines when selected or scrolled into rest.
- **Type:** **Archivo** (variable width `62..125`, weight `100..900`) for architectural compression-to-expansion display titles + **General Sans** for body copy + **JetBrains Mono** strictly for verified technical telemetry and specs.
- **Palette:** Mineral Stone `#F2F1EC`, Carbon Obsidian `#0D0E12`, Slate Graphite `#4F535C`, Structural Line `rgba(13, 14, 18, 0.14)`, Signal Cobalt `#0E46D4`.
- **Signature:** One unified Signal Driver (`src/motion/signal.ts`) driving a persistent OGL fullscreen contour-wave background shader, DOM-synced `data-gl` image/procedural planes, variable Archivo width modulation on scroll, and shared-geometry iris shutter transitions across routes.
- **Screenshot:** Full-viewport hero poster where `KOCHERZHINSKII` sits razor-sharp in expanded Archivo over a breathing cobalt-and-graphite signal contour shader, framed by Barcelona coordinates (`41.3874 N / 2.1686 E`), live frequency selector (`FREQ 01–05`), and the opening work ledger below.
- **Scores (O/F/Fe/P):** Originality 5 / Fit 5 / Feasibility 5 / Portability 1.
  - *Decision:* Selected Concept C, borrowing the handshake/telemetry precision of Concept A for project specs and the Barcelona coordinate anchor from Concept B for corner metadata.

### Concept Card
```
Idea:        One live WebGL Signal Plane modulates across Andrei's five real engineering physics (LLM tokens, Swift audio, NFC crypto, POSIX sockets, stochastic game math) as you browse and inspect his systems.
Metaphor:    Precision signal oscilloscope & architectural drafting workbench.
Signature:   Unified WebGL Signal Driver (fullscreen contour shader + DOM-synced data-gl planes + frequency-locked index preview + shared iris-shutter transitions).
Emotion:     Engineered authority, clarity, tactile precision within 3 seconds.
Motion verb: Modulate and lock.
Screenshot:  Full-width expanded Archivo hero "ANDREI KOCHERZHINSKII" floating over a crisp mineral-stone WebGL wave lattice with signal telemetry in the corners.
```

---

## 2. Art Direction System (Phase 2)

### Palette (Mineral Drafting Stone + Carbon Obsidian + Signal Cobalt)
- `--c-bg`: `#F2F1EC` (ground — warm architectural mineral stone; zero sterile `#fff` glare, zero terracotta/cream AI cliché)
- `--c-fg`: `#0D0E12` (ink — high-contrast carbon obsidian, 16.8:1 contrast on ground)
- `--c-muted`: `#4F535C` (muted — slate graphite, 6.9:1 AA contrast on ground)
- `--c-line`: `rgba(13, 14, 18, 0.14)` (structural hairlines & grid rules)
- `--c-accent`: `#0E46D4` (signal cobalt — 6.9:1 on ground, used sparingly for active channel telemetry, focus outlines, and interactive fills)
- `--c-curtain`: `#0D0E12` (obsidian page-transition curtain & dark finale footer surface; text flips cleanly to `#F2F1EC`)
- `--c-surface-dark`: `#13151B` (dark instrument plates hosting dark-mode product captures cleanly)

### Typography
1. **Display (`--f-display`)**: **Archivo** (Google Fonts variable `wdth,wght@62..125,100..900`, self-hosted woff2 via `font.mjs`). Tight negative tracking (`-0.045em` at mega, `-0.03em` at xl), compact leading (`0.88` to `0.95`).
2. **Body / UI (`--f-body`)**: **General Sans** (Fontshare `400,500,600`, self-hosted woff2 via `font.mjs`). Clean geometric-humanist clarity (`16px–18px`, `line-height: 1.55`, `max-width: 58ch`).
3. **Telemetry / Specs (`--f-mono`)**: **JetBrains Mono** (`400,500`, Google Fonts self-hosted). Used exclusively for real system tags, port/protocol metrics, coordinates, and tabular indexes (`tabular-nums`).

Fluid Type Scale:
- `--t-mega`: `clamp(3.25rem, 1.1rem + 10.5vw, 11.25rem)` (tuned so `KOCHERZHINSKII` fits cleanly on 1440 px and breaks gracefully or spans cleanly at 390 px without mid-word breaks)
- `--t-xl`: `clamp(2.25rem, 1.3rem + 4.4vw, 5.5rem)`
- `--t-l`: `clamp(1.625rem, 1.2rem + 1.8vw, 2.75rem)`
- `--t-m`: `clamp(1.1875rem, 1.05rem + 0.55vw, 1.5rem)`
- `--t-body`: `clamp(1rem, 0.96rem + 0.2vw, 1.125rem)`
- `--t-s`: `0.875rem`
- `--t-xs`: `0.75rem`

### Grid, Rhythm & Shape
- **Grid:** 12 columns on desktop (`gap: var(--gutter)`), 4 columns on mobile (`390px`), `margin-inline: var(--gutter)`. Primary vertical anchor lines at Column 1, Column 5, and Column 9.
- **Shape rule:** Crisp architectural `2px` radius on interactive frames & plates (`--radius: 2px`), pill radius (`999px`) reserved strictly for status signal tags/channel buttons so buttons read immediately as tactile controls.
- **Vertical Rhythm:** Alternating tight (`6u`), normal (`14u`), airy (`24u`), and full-viewport (`100svh`) stages.

### Motion Language
- **Single Clock:** GSAP ticker drives Lenis, ScrollTrigger, WebGL (`uTime`, `uScroll`, `uVelocity`, `uMouse`), and idle signal drift.
- **Eases (`src/engine/env.ts`):** `out: 'expo.out'`, `inOut: 'expo.inOut'`, `soft: 'power3.out'`.
- **Micro-interactions (one treatment per role, strictly cohesive):**
  - *Primary CTAs / Action Buttons:* Directional fill from pointer entry (`data-fill` + `buttonFill`) with subtle icon nudge.
  - *Header & Footer Navigation Links:* Letter roll (`span` vertical roll inside overflow-clip grid) + `aria-current="page"` cobalt signal dot.
  - *Work Index Rows:* Active left-border detent + velocity-damped floating preview frame on desktop (`indexPreview`) + live signal frequency readout switch; inline thumbnail stack on touch/mobile.
  - *Work Images (`data-gl`):* Refractive velocity-bent OGL shader plane (`uHover` subtle zoom + chromatic micro-shift + signal scanline).
  - *Inline Prose Links:* Rising underline highlight band.
- **Idle State:** The WebGL Signal Plane continuously undulates (`uTime` + lagged `uMouse`) like a live standing waveform behind the mineral ground; pauses off-screen / hidden tab (`document.hidden`) and stays completely still under `prefers-reduced-motion: reduce`.

### Composition Plan (Per-Page ASCII Wireframes — Every Section Uses a Distinct Layout Family)

#### Home (`/`)
1. **Hero (Poster + Signal Field, 100svh / sticky intro):**
```
+----------------------------------------------------------------------+
| ANDREI KOCHERZHINSKII                    WORK   ABOUT   RESUME   MAIL |
|----------------------------------------------------------------------+
|  [01 / BARCELONA 41.38N]                 [SIGNAL: 5 FREQUENCIES]     |
|                                                                      |
|  ANDREI                                                              |
|  KOCHERZHINSKII   <-- Archivo variable display over live GL waves    |
|                                                                      |
|  Software Engineer building local AI tools, native Swift 6 apps,    |
|  NFC cryptographic SaaS, and POSIX C++ systems.                      |
|  [Explore selected systems]                [Epitech Barcelona 2027]  |
+----------------------------------------------------------------------+
```
2. **Selected Systems Index (Index List + Floating Cursor Preview):**
```
+----------------------------------------------------------------------+
| SELECTED WORK (05)                               [SIGNAL MODE: AUTO] |
|----------------------------------------------------------------------+
| 01  SENSE AI          Local LLM / MCP / SQLite            2026  -->  |
| 02  SONORA            Swift 6 / AVFoundation / iOS        2026  -->  |
| 03  MESAFLOW          Next.js / NTAG424 NFC / SaaS        2025  -->  |
| 04  ZAPPY             C++17 / POSIX Sockets / AI          2026  -->  |
| 05  ULTIMATE SUCCESS  Unity / App Store / GBM Sim         2024  -->  |
+----------------------------------------------------------------------+
```
3. **Flagship Plates (Asymmetric Staggered Pairs — 2 hero case highlights + interactive switch):**
```
+----------------------------------------------------------------------+
| [Col 1..7: Real GL-enhanced visual plate]  | [Col 9..12: Specs/Meta] |
|                                            | 02 / SONORA             |
|                                            | Zero-dep iOS audio      |
|                                            | [Open case study]       |
+----------------------------------------------------------------------+
| [Col 1..4: Architecture brief] | [Col 6..12: Offset visual plate]    |
| 01 / SENSE AI                  |                                     |
| 540+ tests / 21 benchmarks     |                                     |
+----------------------------------------------------------------------+
```
4. **Systems Matrix & Capabilities (Sticky Narrative — 2-column sticky left + scrolling layers right):**
```
+----------------------------------------------------------------------+
| [Sticky Col 1..5]               | [Scrolling Col 6..12]              |
| ENGINEERING ACROSS LAYERS       | 01 / AI & Evaluation Harnesses     |
| From POSIX syscalls to Swift 6. | 02 / Native Mobile & Audio         |
|                                 | 03 / Full-Stack & NFC Crypto       |
|                                 | 04 / C/C++ Systems & Graphics      |
+----------------------------------------------------------------------+
```
5. **Open-Source GitHub Archive (Compact 4-Column Data Grid — Real Repos Only):**
```
+----------------------------------------------------------------------+
| OPEN SOURCE ARCHIVE (GITHUB.COM/ANDREIKOCHERZHINSKIIA)               |
| [Raytracer C++17] [LunarLander PPO] [HackJuice OWASP] [Persona n8n]  |
| [my_radar SFML]   [top ncurses C]   [Cipher C]        [HashTable C]  |
+----------------------------------------------------------------------+
```
6. **Footer Finale (Full Dark Obsidian Chapter):**
```
+----------------------------------------------------------------------+
| AVAILABLE FOR SOFTWARE ENGINEERING ROLES & COLLABORATIONS            |
| LET'S BUILD SOMETHING DETERMINISTIC.                                 |
| [andrei.kocherzhinskii@gmail.com]   [Copy address]                   |
|----------------------------------------------------------------------+
| GITHUB   LINKEDIN   A&A DEVS   RESUME PDF     BARCELONA LOCAL TIME   |
+----------------------------------------------------------------------+
```

#### Case Study (`/work/[slug]/`)
- **Section 1 (Poster Case Header):** Breadcrumb back to Index, monumental `<h1>` title, 1-line summary, structured metadata row (Role, Timeline, Stack, Repository/Live URL).
- **Section 2 (Full-Bleed GL Media Stage):** `data-gl data-gl-instant` 16:10 plate (real screenshot or bespoke editorial artwork).
- **Section 3 (Asymmetric Editorial Narrative):** Problem / Architecture Idea / Craft & Engineering Breakdown + verified key engineering metrics table (`tabular-nums`).
- **Section 4 (Secondary Visual / Telemetry Gallery):** Additional authentic screen/shader frame + architectural schematic highlights.
- **Section 5 (Continuous Next Project Strip):** Full-width next project transition link.

#### About (`/about/`)
- **Section 1 (Statement Hero):** First-person engineering manifesto, Barcelona Epitech B.S. CS context, A&A Devs co-founding story.
- **Section 2 (Signal Discipline Breakdown + Technical Matrix):** Grouped cleanly (`Languages`, `Mobile & Systems`, `Web & Backend`, `Data & Infra`, `AI & ML`) from resume.
- **Section 3 (Timeline & Education):** Real chronological work & academic history, plus direct PDF resume link (`Andrei_Kocherzhinskii_Resume.pdf`).

#### 404 (`/404`)
- **"SIGNAL LOST / 404"** — Interactive signal oscilloscope grid at zero carrier amplitude with a magnetic button back to frequency index (`/`).

---

## 3. Genericness Check (Phase 2 Verification)
- *Would a generic LLM build this?* No:
  1. It uses Andrei's real five-frequency signal physics (`LLM/MCP`, `Swift Audio`, `NTAG424 NFC`, `POSIX Poll`, `Brownian Motion`) as the active WebGL/typography driver.
  2. It rejects dark-mode neon-blob developer clichés in favor of warm architectural mineral drafting stone (`#F2F1EC`), expanded variable Archivo display type, signal cobalt (`#0E46D4`), and dark obsidian instrument plates.
  3. It surfaces real GitHub screenshots (`Sonora`, `Sense AI`), real studio artwork (`Ultimate Success`), bespoke editorial covers (`MesaFlow`, `Zappy`), and real verified metrics (`179 REST endpoints`, `55 PostgreSQL tables`, `540+ automated tests`, `207.39 LunarLander mean return`) with zero invented awards or filler copy.
