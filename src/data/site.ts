// Assumptions & external sources:
// - Production canonical domain `https://andreikocherzhinskii.dev` is a placeholder URL until deployed.
// - LinkedIn profile (`https://es.linkedin.com/in/andrei-kocherzhinskii`) was gated behind sign-in during authoring;
//   all roles, dates, metrics, and projects come directly from `Andrei_Kocherzhinskii_Resumev4.pdf`,
//   public GitHub repositories (`AndreiKocherzhinskiiA`), and `a-a-devs.com` / `mesaflow.tech`.
// - Visual covers for MesaFlow and Zappy are bespoke editorial renders in `src/assets/projects/`;
//   Sense AI, Sonora, and Ultimate Success use Andrei's authentic screenshots and studio game art.
import type { ImageMetadata } from 'astro';
import sensaiChat from '../assets/projects/sensai-chat.png';
import sensaiChatLight from '../assets/projects/sensai-chat-light.png';
import sensaiStructured from '../assets/projects/sensai-structured.png';
import sonoraScreens from '../assets/projects/sonora-screens.png';
import sonoraThemes from '../assets/projects/sonora-themes.png';
import mesaflowHero from '../assets/projects/mesaflow-hero.jpg';
import zappyHero from '../assets/projects/zappy-hero.jpg';
import ultimateHotel from '../assets/projects/ultimate-hotel.webp';
import ultimateMarket from '../assets/projects/ultimate-market.webp';

export interface ProjectMetric {
  value: string;
  label: string;
}

export interface ProjectGalleryItem {
  image: ImageMetadata;
  alt: string;
  caption: string;
}

export interface Project {
  slug: string;
  index: string;
  title: string;
  subtitle: string;
  discipline: string;
  period: string;
  year: number;
  status: string;
  freqIndex: number;
  signalHz: string;
  signalDomain: string;
  summary: string;
  stack: string[];
  role: string[];
  repoUrl?: string;
  liveUrl?: string;
  cover: {
    image: ImageMetadata;
    alt: string;
    seed: number;
  };
  gallery: ProjectGalleryItem[];
  metrics: ProjectMetric[];
  sections: {
    heading: string;
    body: string;
  }[];
  highlights: string[];
}

export interface ArchiveRepo {
  name: string;
  language: string;
  category: string;
  summary: string;
  url: string;
  seed: number;
}

export const site = {
  name: 'Andrei Kocherzhinskii',
  firstName: 'Andrei',
  lastName: 'Kocherzhinskii',
  role: 'Software Engineer & Full-Stack Developer',
  location: 'Barcelona, Spain',
  coordinates: '41.3874 N / 2.1686 E',
  education: {
    school: 'Epitech, Barcelona',
    degree: 'B.S. in Computer Science',
    period: '2024 to 2027, expected',
  },
  // Placeholder domain: replace before final production deployment.
  url: 'https://andreikocherzhinskii.dev',
  description:
    'Software engineer in Barcelona building local LLM developer tools, native Swift 6 iOS apps, cryptographic NFC hospitality SaaS, and C++ network systems.',
  email: 'andrei.kocherzhinskii@gmail.com',
  studio: 'A&A Devs',
  studioUrl: 'https://www.a-a-devs.com',
  resumePath: '/Andrei_Kocherzhinskii_Resume.pdf',
  socials: [
    { label: 'GitHub', href: 'https://github.com/AndreiKocherzhinskiiA' },
    { label: 'LinkedIn', href: 'https://es.linkedin.com/in/andrei-kocherzhinskii' },
    { label: 'A&A Devs', href: 'https://www.a-a-devs.com' },
    { label: 'MesaFlow', href: 'https://www.mesaflow.tech' },
  ],
  glPalette: ['#0d0e12', '#26324d', '#0e46d4'] as [string, string, string],
};

export const projects: Project[] = [
  {
    slug: 'sense-ai',
    index: '01',
    title: 'Sensai',
    subtitle: 'Local LLM Developer Assistant (Sense AI)',
    discipline: 'AI Systems & Evaluation',
    period: 'Sep 2026 to Nov 2026',
    year: 2026,
    status: 'Open source on GitHub',
    freqIndex: 1,
    signalHz: 'MCP / JSON-RPC',
    signalDomain: 'Local Inference & Sandbox',
    summary:
      'Sensai (Sense AI) is a local AI engineering workbench uniting Ollama streaming, MCP tool execution, SQLite versioned artifacts, and a 21-benchmark evaluation harness.',
    stack: ['Python', 'FastAPI', 'SQLite', 'Ollama', 'RAG', 'MCP', 'Chroma'],
    role: ['System Architecture', 'RAG Pipeline', 'Evaluation Harness'],
    repoUrl: 'https://github.com/AndreiKocherzhinskiiA/sensai',
    cover: {
      image: sensaiChat,
      alt: 'Sensai dark workspace showing pinned conversations, model switcher, and MCP execution controls',
      seed: 1.4,
    },
    gallery: [
      {
        image: sensaiStructured,
        alt: 'Sensai structured task extraction workspace with validated JSON output and schema checks',
        caption: 'Schema-validated structured extraction turning freeform engineering notes into typed JSON artifacts.',
      },
      {
        image: sensaiChatLight,
        alt: 'Sensai light theme showing a local document retrieval research conversation',
        caption: 'Dual-appearance FastAPI workspace with Chroma hybrid retrieval and token telemetry.',
      },
    ],
    metrics: [
      { value: '540+', label: 'Automated tests' },
      { value: '21', label: 'Eval benchmarks' },
      { value: '100%', label: 'Local Ollama execution' },
    ],
    sections: [
      {
        heading: 'Context',
        body: 'Local LLM coding tools often fail at deterministic persistence: edits vanish across sessions, context windows overflow silently, and unsafe tool calls execute without review.',
      },
      {
        heading: 'Architecture',
        body: 'Sensai shares one execution pipeline across its CLI and FastAPI web interface. Model Context Protocol (MCP) tool invocations pass through human-in-the-loop approval gates, while a restricted Python sandbox isolates untrusted execution.',
      },
      {
        heading: 'Craft',
        body: 'Workspace state lives in versioned SQLite artifacts supporting atomic section updates, optimistic concurrency checks, and rollback. Retrieval-Augmented Generation combines Chroma hybrid search, query rewriting, and reranking with prompt versioning.',
      },
      {
        heading: 'Outcome',
        body: 'Validated through an automated LLM-as-a-Judge evaluation suite measuring relevance, coherence, faithfulness, and adversarial prompt resistance across 21 benchmarks and more than 540 tests.',
      },
    ],
    highlights: [
      'Shared CLI and FastAPI streaming execution pipeline with MCP tool calling.',
      'SQLite versioned artifacts with atomic section diffs and optimistic locking.',
      'Latency, context-window budget, and token-usage observability in every session.',
    ],
  },
  {
    slug: 'sonora',
    index: '02',
    title: 'Sonora',
    subtitle: 'Native iOS Music Client & Offline Engine',
    discipline: 'Native iOS / Swift 6',
    period: 'Oct 2026 to Present',
    year: 2026,
    status: 'GPL-3.0 on GitHub',
    freqIndex: 2,
    signalHz: '44.1 kHz AUDIO',
    signalDomain: 'Swift 6 & AVFoundation',
    summary:
      'An independent pure-Swift music streaming and offline playback app built with zero external package dependencies and verified Airplane Mode reliability.',
    stack: ['Swift 6', 'SwiftUI', 'AVFoundation', 'MediaPlayer', 'Keychain', 'xtool'],
    role: ['iOS Architecture', 'Offline Download Engine', 'macOS-free CI'],
    repoUrl: 'https://github.com/AndreiKocherzhinskiiA/sonora-ios',
    cover: {
      image: sonoraThemes,
      alt: 'Sonora appearance settings showing nine built-in color palettes including Midnight, Forest, and Rose',
      seed: 2.8,
    },
    gallery: [
      {
        image: sonoraScreens,
        alt: 'Sonora iOS screens displaying Home quick picks, Now Playing ambient artwork view, and Your Library',
        caption: 'Home discovery, ambient Now Playing with Dynamic Island sync, and cached offline library views.',
      },
    ],
    metrics: [
      { value: '0', label: 'External dependencies' },
      { value: '10 to 500', label: 'Smart song cache' },
      { value: 'Swift 6', label: 'Strict MainActor isolation' },
    ],
    sections: [
      {
        heading: 'Context',
        body: 'Music clients on mobile frequently accumulate bloated third-party SDKs and brittle download caches that fail mid-transfer or break offline lock-screen integration.',
      },
      {
        heading: 'Architecture',
        body: 'Adapting the visual language of desktop Sonora into pure Swift 6 and SwiftUI, the player enforces strict MainActor isolation, AVFoundation audio routing, MPNowPlayingInfoCenter lock-screen controls, and Dynamic Island playback telemetry.',
      },
      {
        heading: 'Craft',
        body: 'Built a bounded byte-range download engine writing atomic .m4a files with pause and resume recovery, smart caching from 10 to 500 tracks, Keychain cookie auth for YouTube Music feeds, and synchronized LRCLIB lyrics.',
      },
      {
        heading: 'Outcome',
        body: 'Verified zero-network playback in Airplane Mode on physical iPhone hardware and documented a macOS-free build and deployment pipeline using WSL2 and xtool under GPL-3.0.',
      },
    ],
    highlights: [
      'Pure Swift YouTube Music client with Keychain-stored credentials and radio shelves.',
      'Bounded HTTP range-request downloader with atomic file publication.',
      'Zero external SwiftPM packages, keeping the binary lean and auditable.',
    ],
  },
  {
    slug: 'mesaflow',
    index: '03',
    title: 'MesaFlow',
    subtitle: 'Multi-Tenant Restaurant SaaS & NFC Crypto',
    discipline: 'Full-Stack SaaS & Security',
    period: 'Apr 2025 to Present',
    year: 2025,
    status: 'Live in pilot venues',
    freqIndex: 3,
    signalHz: '13.56 MHz NFC',
    signalDomain: 'AES-CMAC & Realtime POS',
    summary:
      'A multi-tenant hospitality operations platform pairing cryptographic NTAG424 DNA smart-card authentication with 179 REST endpoints and realtime table sync.',
    stack: ['Next.js', 'TypeScript', 'PostgreSQL', 'Drizzle ORM', 'Redis', 'Socket.IO', 'NTAG424 DNA'],
    role: ['Co-Founder', 'Full-Stack Architecture', 'NFC Cryptography', 'DevOps CI/CD'],
    liveUrl: 'https://www.mesaflow.tech',
    cover: {
      image: mesaflowHero,
      alt: 'Matte black NFC smart table card with engraved cobalt concentric signal traces on basalt stone',
      seed: 3.7,
    },
    gallery: [
      {
        image: mesaflowHero,
        alt: 'Macro study of the NTAG424 DNA physical table card used for anti-replay session validation',
        caption: 'Physical NTAG424 DNA cards emit rolling cryptographic counters checked via server-side AES-CMAC.',
      },
    ],
    metrics: [
      { value: '179', label: 'REST API endpoints' },
      { value: '55', label: 'PostgreSQL tables' },
      { value: '2,100+', label: 'Automated tests' },
      { value: '12 min', label: 'Deploy time (down from 30m)' },
    ],
    sections: [
      {
        heading: 'Context',
        body: 'Static QR stickers on restaurant tables are trivial to copy, spoof, or tamper with, while legacy hospitality suites splinter guest ordering and staff control across disconnected tools.',
      },
      {
        heading: 'Architecture',
        body: 'Engineered from product specifications across 55 normalized PostgreSQL tables with Drizzle ORM, restaurant-scoped Better Auth sessions, and realtime Socket.IO room orchestration backed by Redis Pub/Sub and connection rotation.',
      },
      {
        heading: 'Craft',
        body: 'Implemented physical table authentication using NTAG424 DNA tags. Each tap generates a one-time encrypted payload verified server-side with AES-CMAC decryption and monotonic counter anti-replay checks.',
      },
      {
        heading: 'Outcome',
        body: 'Onboarded two pilot restaurants for live service testing while automating 80 PostgreSQL migrations, Docker containers, GitHub Actions CI, and Vercel deploys, cutting release cycles from 30 minutes to 12 minutes.',
      },
    ],
    highlights: [
      'Server-side AES-CMAC decryption and anti-replay protection against cloned QR/NFC payloads.',
      'Multi-tenant isolation enforced across 179 endpoints and 2,100+ automated tests.',
      'Realtime kitchen and dining-floor state synchronized via Redis Pub/Sub.',
    ],
  },
  {
    slug: 'zappy',
    index: '04',
    title: 'Zappy',
    subtitle: 'Cooperative Autonomous AI Agents',
    discipline: 'C++17 Systems & Networking',
    period: 'May 2026 to Jun 2026',
    year: 2026,
    status: 'Open source on GitHub',
    freqIndex: 4,
    signalHz: 'POSIX POLL()',
    signalDomain: 'Distributed C++17 Agents',
    summary:
      'A networked multiplayer simulation featuring a non-blocking C++17 server, SFML world visualizer, and autonomous AI teams coordinating over TCP sockets.',
    stack: ['C++17', 'POSIX Sockets', 'TCP/IP', 'SFML', 'State Machines'],
    role: ['Autonomous AI Agents', 'Network Protocol', 'Multi-Process Spawning'],
    repoUrl: 'https://github.com/AndreiKocherzhinskiiA/zappy',
    cover: {
      image: zappyHero,
      alt: 'Architectural 3D isometric lattice of obsidian monoliths and translucent crystal nodes linked by telemetry beams',
      seed: 4.5,
    },
    gallery: [
      {
        image: zappyHero,
        alt: 'Isometric coordinate simulation grid illustrating directional broadcast telemetry across autonomous nodes',
        caption: 'Agents compute directional acoustic bearings to synchronize team elevation rituals across the toroidal map.',
      },
    ],
    metrics: [
      { value: '8', label: 'Cooperative level tiers' },
      { value: 'C++17', label: 'Zero-blocking POSIX poll' },
      { value: '6', label: 'Agents required to win' },
    ],
    sections: [
      {
        heading: 'Context',
        body: 'In the Trantor simulation, teams of blind autonomous processes share a resource-scarce toroidal world and must coordinate multi-agent elevation rituals without shared memory.',
      },
      {
        heading: 'Architecture',
        body: 'Built distributed AI clients communicating solely over non-blocking POSIX TCP sockets multiplexed with poll(). Agents negotiate roles dynamically through directional broadcast messages and automated leader election.',
      },
      {
        heading: 'Craft',
        body: 'Each AI runs a hierarchical finite-state machine balancing caloric survival thresholds, heuristic pathfinding over partial vision cones, resource foraging, and process spawning when team capacity unlocks.',
      },
      {
        heading: 'Outcome',
        body: 'Delivered a complete multiplayer stack spanning server command queues, SFML graphical state rendering, and protocol/load test suites built with teammates at Epitech Barcelona.',
      },
    ],
    highlights: [
      'Non-blocking POSIX poll() I/O multiplexing across concurrent team processes.',
      'Automated leader election and directional sound-vector triangulation.',
      'Survival-first heuristic foraging coupled to 8 cooperative level objectives.',
    ],
  },
  {
    slug: 'ultimate-success',
    index: '05',
    title: 'Ultimate Success',
    subtitle: 'Narrative Business-Sim iOS Game',
    discipline: 'iOS Game & Stochastic Math',
    period: 'Jul 2024 to Mar 2026',
    year: 2024,
    status: 'Published by A&A Devs',
    freqIndex: 5,
    signalHz: 'GBM σ = 0.22',
    signalDomain: 'Unity / App Store Sim',
    summary:
      'A post-Soviet narrative simulation and financial sandbox shipped to the Apple App Store, pairing branching story progression with Geometric Brownian Motion markets.',
    stack: ['Unity', 'C#', 'iOS / iPadOS', 'App Store Connect', 'Stochastic Modeling'],
    role: ['Co-Founder & Engineer', 'Gameplay Economy', 'App Store Release'],
    liveUrl: 'https://www.a-a-devs.com/games',
    cover: {
      image: ultimateHotel,
      alt: 'Warm gilded hallway scene inside Grand Hotel from Ultimate Success game artwork',
      seed: 5.9,
    },
    gallery: [
      {
        image: ultimateMarket,
        alt: 'Central Bazaar courtyard illustration with vintage sedan from Ultimate Success',
        caption: 'Hand-directed district scenes anchor branching choices, shop economies, and dynamic reputation shifts.',
      },
    ],
    metrics: [
      { value: '3.94K+', label: 'Daily impressions (+71.8%)' },
      { value: '233', label: 'App Store page views' },
      { value: 'GBM', label: 'Stochastic stock engine' },
    ],
    sections: [
      {
        heading: 'Context',
        body: 'Founded A&A Devs in 2024 to ship a narrative mobile title where moral choices, street-level entrepreneurship, and financial risk carry lasting state consequences.',
      },
      {
        heading: 'Architecture',
        body: 'Engineered modular C# state systems driving seven playable city districts, branching dialogue graphs, and persistent player progression across iOS and iPadOS.',
      },
      {
        heading: 'Craft',
        body: 'Built a turn-based Durak card minigame backed by heuristic AI decision trees, a live stock-exchange simulator driven by Geometric Brownian Motion (normal-distribution stochastic walks), and CDF-weighted random events.',
      },
      {
        heading: 'Outcome',
        body: 'Managed end-to-end Apple App Store review, compliance, and localization across English, Spanish, and Russian editions, reaching 3.94K+ daily average impressions.',
      },
    ],
    highlights: [
      'Geometric Brownian Motion stock pricing with cumulative distribution event triggers.',
      'Heuristic Durak card AI tuned for asymmetric hand-state evaluation.',
      'Complete App Store Connect submission, review iteration, and store telemetry.',
    ],
  },
];

export const capabilities = [
  {
    code: 'LAYER 01',
    title: 'AI Systems & Evaluation',
    detail:
      'Local inference pipelines built on Ollama, llama.cpp, FastAPI, and Model Context Protocol (MCP) tool servers. Strict schema validation, Chroma hybrid RAG, SQLite atomic rollbacks, and automated LLM-as-a-Judge harnesses.',
    specs: ['Ollama / llama.cpp', 'MCP Tool Sandboxes', 'Chroma Hybrid RAG', '540+ Eval Tests'],
  },
  {
    code: 'LAYER 02',
    title: 'Native Mobile & Media',
    detail:
      'Zero-dependency Swift 6 and SwiftUI iOS architecture with MainActor concurrency isolation, AVFoundation playback, MPNowPlayingInfoCenter Lock Screen telemetry, and resilient atomic offline caches.',
    specs: ['Swift 6 / SwiftUI', 'AVFoundation', 'Keychain & Range I/O', 'Unity / C# App Store'],
  },
  {
    code: 'LAYER 03',
    title: 'Full-Stack SaaS & Crypto',
    detail:
      'Multi-tenant TypeScript platforms spanning Next.js, PostgreSQL, Drizzle ORM, Redis Pub/Sub, Socket.IO, and physical hardware security using NTAG424 DNA AES-CMAC anti-replay authentication.',
    specs: ['Next.js / TypeScript', '179 REST Endpoints', '55 PostgreSQL Tables', 'NTAG424 AES-CMAC'],
  },
  {
    code: 'LAYER 04',
    title: 'C / C++17 Systems & Graphics',
    detail:
      'Low-level network programming over non-blocking POSIX poll() sockets, shared-object plugin architectures (.so raytracing), ncurses process monitors, and reinforcement learning benchmarks.',
    specs: ['C++17 / C', 'POSIX TCP Sockets', 'Dynamic .so Plugins', 'PPO / PyTorch RL'],
  },
];

export const archiveRepos: ArchiveRepo[] = [
  {
    name: 'raytracer',
    language: 'C++17',
    category: 'Computer Graphics',
    summary: 'Plugin-based ray tracer compiling primitives, lights, and reflective materials into hot-loaded .so modules.',
    url: 'https://github.com/AndreiKocherzhinskiiA/raytracer',
    seed: 6.1,
  },
  {
    name: 'star-trek-lunarlander',
    language: 'Python / PyTorch',
    category: 'Reinforcement Learning',
    summary: 'Deterministic PPO LunarLander agent achieving 207.39 mean return and 94/100 safe landings across reproducible seeds.',
    url: 'https://github.com/AndreiKocherzhinskiiA/star-trek-lunarlander',
    seed: 7.3,
  },
  {
    name: 'hackjuice',
    language: 'Security',
    category: 'OWASP AppSec',
    summary: 'Structured exploitation methodologies and defensive remediations for 30 OWASP Juice Shop vulnerabilities.',
    url: 'https://github.com/AndreiKocherzhinskiiA/hackjuice',
    seed: 8.2,
  },
  {
    name: 'persona',
    language: 'Docker / n8n',
    category: 'Automation',
    summary: 'Self-hosted n8n + Ollama chatbot pipeline curating personalized technical briefings over SMTP.',
    url: 'https://github.com/AndreiKocherzhinskiiA/persona',
    seed: 9.4,
  },
  {
    name: 'my_radar',
    language: 'C / SFML',
    category: 'Simulation',
    summary: 'Real-time 2D air-traffic control visualizer handling aircraft trajectories, control towers, and spatial collision boxes.',
    url: 'https://github.com/AndreiKocherzhinskiiA/my_radar',
    seed: 10.1,
  },
  {
    name: 'top',
    language: 'C / ncurses',
    category: 'Unix Systems',
    summary: 'Terminal process monitor reading Linux kernel /proc telemetry to track live CPU, memory, and thread load.',
    url: 'https://github.com/AndreiKocherzhinskiiA/top',
    seed: 11.5,
  },
  {
    name: 'Cipher',
    language: 'C',
    category: 'Cryptography',
    summary: 'Matrix-inversion encryption and decryption engine written in pure C with strict memory discipline.',
    url: 'https://github.com/AndreiKocherzhinskiiA/Cipher',
    seed: 12.2,
  },
  {
    name: 'C-HashTable',
    language: 'C',
    category: 'Data Structures',
    summary: 'Separate-chaining hash table in C built around a djb2-derived hashing routine and linked collision buckets.',
    url: 'https://github.com/AndreiKocherzhinskiiA/C-HashTable',
    seed: 13.7,
  },
];

export const skillsMatrix = [
  {
    group: 'Languages',
    items: 'Swift, Python, TypeScript, JavaScript, HTML, CSS, Tailwind CSS, C++, C#, C, SQL',
  },
  {
    group: 'Mobile & Systems',
    items: 'SwiftUI, AVFoundation, MediaPlayer, Unity, xtool, iOS, Linux / POSIX Sockets',
  },
  {
    group: 'Web & Backend',
    items: 'Next.js, React, FastAPI, Node.js, Socket.IO, REST APIs, Astro',
  },
  {
    group: 'Data & Infrastructure',
    items: 'PostgreSQL, SQLite, Redis, Drizzle ORM, Docker, Vercel, GitHub Actions, Git',
  },
  {
    group: 'AI & Machine Learning',
    items: 'LLMs, RAG, MCP, Hugging Face, Ollama, llama.cpp, Strata, PyTorch, NumPy, NTAG424 DNA',
  },
];
