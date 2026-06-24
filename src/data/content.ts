export interface Project {
  name: string;
  tagline: string;
  description: string;
  stack: string[];
  live?: string;
  repo: string;
  featured?: boolean;
  status?: string;
}

export type AccentColor = "blue" | "green" | "purple";

export interface ExpertiseArea {
  title: string;
  summary: string;
  items: string[];
  color: AccentColor;
  icon: "cloud" | "stack" | "agent";
}

export interface Role {
  label: string;
  color: AccentColor;
}

export interface Post {
  title: string;
  month: string;
  impressions: number;
}

export const profile = {
  name: "Genil Suarez",
  title: "Cloud Architecture, Platform & FinOps Manager · AWS & IA aplicada",
  roles: [
    { label: "Cloud Architecture Manager", color: "blue" },
    { label: "Platform Engineering Manager", color: "green" },
    { label: "FinOps Manager", color: "blue" },
    { label: "AWS Expert", color: "blue" },
    { label: "IA aplicada", color: "purple" },
  ] satisfies Role[],
  company: "Transbank S.A.",
  location: "Santiago, Chile",
  summary:
    "Cloud Engineering Manager con 18 años en infraestructura y plataformas tecnológicas en la industria financiera, retail y transporte, los últimos 10 enfocado en Cloud. En Transbank lidero la arquitectura cloud, plataforma, FinOps y la adopción de IA en operaciones de TI, sobre una plataforma de pagos crítica regulada bajo PCI.",
  linkedin: "https://www.linkedin.com/in/genil-suarez",
  github: "https://github.com/genilsuarez",
};

export const projects: Project[] = [
  {
    name: "FluentFlow",
    tagline: "App de aprendizaje de inglés, CEFR A1–C2",
    description:
      "10 modos de aprendizaje, 276 módulos de contenido, modo offline y bilingüe EN/ES. Pipeline CI/CD con validación automática de contenido y calidad.",
    stack: ["React", "TypeScript", "Vite", "Zustand"],
    live: "https://genilsuarez.github.io/fluentflow/",
    repo: "https://github.com/genilsuarez/fluentflow",
    featured: true,
  },
  {
    name: "FlagMaster",
    tagline: "Quiz de banderas con arquitectura MVC",
    description:
      "250+ países y territorios, 3 modos de juego (banderas, capitales, letras en caída), diseño editorial propio.",
    stack: ["Vanilla JS", "Vite", "MVC"],
    live: "https://genilsuarez.github.io/flagmaster/",
    repo: "https://github.com/genilsuarez/flagmaster",
    featured: true,
  },
  {
    name: "LearnHub",
    tagline: "Ejercicios interactivos de ortografía y gramática inglesa",
    description:
      "Espacio personal de estudio de inglés: reglas de spelling (-ing, -ed), noun adjuncts, con modos Study/Challenge/Timed, niveles progresivos y spaced repetition básico vía localStorage.",
    stack: ["HTML", "Vanilla JS"],
    live: "https://genilsuarez.github.io/learnhub/",
    repo: "https://github.com/genilsuarez/learnhub",
    status: "Exploratorio",
  },
  {
    name: "CapiChef",
    tagline: "Juego educativo de matemáticas para niños 4–10 años",
    description:
      "Un capybara chef guía al jugador a preparar recetas tocando ingredientes en orden; desafíos de suma, resta y multiplicación entre niveles. 12 skins y 12 logros desbloqueables. 261 tests automatizados.",
    stack: ["React", "Vite", "Tailwind CSS", "Vitest"],
    live: "https://genilsuarez.github.io/capichef/",
    repo: "https://github.com/genilsuarez/capichef",
  },
  {
    name: "CapiCatcher",
    tagline: "Arcade web — atrapa vegetales antes de que caigan",
    description:
      "Controles por mouse, teclado y touch. Sistema de partículas en Canvas, dificultad progresiva y arquitectura modular sobre Zustand.",
    stack: ["TypeScript", "Vite", "Zustand", "Canvas API"],
    live: "https://genilsuarez.github.io/capicatcher/",
    repo: "https://github.com/genilsuarez/capicatcher",
  },
];

export const expertise: ExpertiseArea[] = [
  {
    title: "Cloud Architecture & FinOps",
    summary: "20% de reducción en costos cloud mediante gobierno FinOps activo.",
    color: "blue",
    icon: "cloud",
    items: [
      "AWS Certified Solutions Architect – Associate",
      "AWS Certified Cloud Practitioner",
      "Arquitectura multicuenta compliance PCI",
      "Gestión FinOps AWS: facturación, supervisión de gastos, optimización continua",
    ],
  },
  {
    title: "Platform Engineering",
    summary: "Plataforma como producto: de cero a modelo operativo definido.",
    color: "green",
    icon: "stack",
    items: [
      "Definición de roles y modelo operativo de Platform Engineering",
      "Stack estandarizado de Infraestructura como Código",
      "Internal Developer Platform (IDP): planificación y ejecución",
    ],
  },
  {
    title: "IA Agéntica & Automatización",
    summary: "De certificación a producción: IA aplicada a procesos reales de TI.",
    color: "purple",
    icon: "agent",
    items: [
      "Automatizaciones con n8n, AWS Bedrock y Power Automate en procesos de TI",
      "Model Context Protocol (MCP) y Agent2Agent (A2A) — fundamentos y aplicación",
      "Arquitecturas de agentes de IA",
    ],
  },
];

export interface StudyMaterial {
  name: string;
  tagline: string;
  description: string;
  topics: string[];
  live: string;
  repo: string;
  icon: "agent" | "stack" | "cloud";
  color: AccentColor;
}

export const studyMaterials: StudyMaterial[] = [
  {
    name: "Agent Study",
    tagline: "Context engineering para agentes de IA",
    description:
      "Guía visual interactiva sobre context engineering, token tax, workflow rules, SDD harness y glosario agéntico.",
    topics: ["Context Engineering", "Token Tax", "Workflow Rules", "SDD Harness"],
    live: "https://genilsuarez.github.io/agentstudy/",
    repo: "https://github.com/genilsuarez/agentstudy",
    icon: "agent",
    color: "purple",
  },
  {
    name: "LLM Study",
    tagline: "Fundamentos de IA y modelos de lenguaje",
    description:
      "Material de estudio interactivo: embeddings, mecanismo de atención, arquitectura transformer, inferencia y agentes.",
    topics: ["Embeddings", "Atención", "Transformers", "Inferencia", "Agentes"],
    live: "https://genilsuarez.github.io/llmstudy/",
    repo: "https://github.com/genilsuarez/llmstudy",
    icon: "stack",
    color: "blue",
  },
];

export const postsStats = {
  followers: 2000,
  totalPosts: 50,
  profileUrl: "https://www.linkedin.com/in/genil-suarez/recent-activity/all/",
};

export const topPosts: Post[] = [
  { title: "Infografía: flujos de IA y contexto entre etapas", month: "may. 2026", impressions: 2071 },
  { title: "CLAUDE.md no es solo para developers", month: "abr. 2026", impressions: 1868 },
  { title: "El leak de Claude Code", month: "abr. 2026", impressions: 1608 },
  { title: "Cuando el agente no pudo escribir HTML", month: "abr. 2026", impressions: 1548 },
  { title: "El impuesto de tokenización por idioma", month: "may. 2026", impressions: 1497 },
  { title: "Commands vs Skills en Claude Code", month: "abr. 2026", impressions: 1412 },
];
