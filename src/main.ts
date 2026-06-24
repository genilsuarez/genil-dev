import "./style.css";
import { profile, projects, expertise, postsStats, studyMaterials } from "./data/content";

const app = document.querySelector<HTMLDivElement>("#app")!;

const featuredProjects = projects.filter((p) => p.featured);
const otherProjects = projects.filter((p) => !p.featured);

const icons = {
  cloud: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M17.5 19a4.5 4.5 0 0 0 0-9 6 6 0 0 0-11.3-2A5 5 0 0 0 6.5 19h11z"/></svg>`,
  stack: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2 2 7l10 5 10-5-10-5z"/><path d="m2 17 10 5 10-5"/><path d="m2 12 10 5 10-5"/></svg>`,
  agent: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="8" width="16" height="12" rx="2"/><path d="M12 8V4M9 4h6"/><circle cx="9" cy="14" r="1"/><circle cx="15" cy="14" r="1"/></svg>`,
};

function projectCard(p: (typeof projects)[number], featured = false) {
  return `
    <article class="project-card${featured ? " project-card--featured" : ""}">
      <div class="project-card__head">
        <h3>${p.name}</h3>
        <div class="project-card__links">
          ${p.live ? `<a href="${p.live}" target="_blank" rel="noopener">Demo ↗</a>` : ""}
          <a href="${p.repo}" target="_blank" rel="noopener">Código ↗</a>
        </div>
      </div>
      <p class="project-card__tagline">${p.tagline}</p>
      <p class="project-card__desc">${p.description}</p>
      <ul class="stack-list">
        ${p.stack.map((s) => `<li>${s}</li>`).join("")}
      </ul>
    </article>
  `;
}

function projectRow(p: (typeof projects)[number]) {
  return `
    <li class="project-row">
      <div class="project-row__head">
        <h4>${p.name}${p.status ? `<span class="project-row__status">${p.status}</span>` : ""}</h4>
        <div class="project-row__links">
          ${p.live ? `<a href="${p.live}" target="_blank" rel="noopener">Demo ↗</a>` : ""}
          <a href="${p.repo}" target="_blank" rel="noopener">Código ↗</a>
        </div>
      </div>
      <p class="project-row__tagline">${p.tagline}</p>
      <ul class="stack-list">
        ${p.stack.map((s) => `<li>${s}</li>`).join("")}
      </ul>
    </li>
  `;
}

app.innerHTML = `
  <header class="topbar">
    <div class="topbar__inner">
      <a class="topbar__logo" href="#top">genil<span class="accent">.dev</span></a>
      <nav class="topbar__nav">
        <a href="#proyectos">Proyectos</a>
        <a href="#estudio">Estudio</a>
        <a href="#expertise">Expertise</a>
      </nav>
      <button class="theme-toggle" aria-label="Cambiar tema" type="button">
        <svg class="theme-toggle__sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>
        <svg class="theme-toggle__moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
      </button>
    </div>
  </header>

  <main>
    <!-- Hero: compact, punchy -->
    <section id="top" class="hero">
      <p class="hero__eyebrow">${profile.location} · ${profile.company}</p>
      <h1>${profile.name}</h1>
      <p class="hero__tagline">Cloud Architecture & Platform Engineering Manager · IA aplicada en operaciones TI</p>
      <ul class="hero__highlights">
        <li><span class="hero__highlight hero__highlight--blue">18 años infraestructura</span></li>
        <li><span class="hero__highlight hero__highlight--green">Plataforma de pagos PCI</span></li>
        <li><span class="hero__highlight hero__highlight--purple">IA agéntica en producción</span></li>
      </ul>
    </section>

    <!-- Projects: the star -->
    <section id="proyectos" class="section">
      <h2 class="section__title">Proyectos</h2>
      <div class="project-grid project-grid--featured">
        ${featuredProjects.map((p) => projectCard(p, true)).join("")}
      </div>
      <details class="project-more">
        <summary>
          <span>Más proyectos</span>
          <span class="project-more__count">${otherProjects.length}</span>
        </summary>
        <ul class="project-more__list">
          ${otherProjects.map(projectRow).join("")}
        </ul>
      </details>
    </section>

    <!-- Study materials -->
    <section id="estudio" class="section">
      <h2 class="section__title">Material de estudio</h2>
      <div class="study-grid">
        ${studyMaterials
          .map(
            (m) => `
          <article class="study-card study-card--${m.color}">
            <div class="study-card__icon">${icons[m.icon]}</div>
            <div class="study-card__body">
              <h4>${m.name}</h4>
              <p class="study-card__tagline">${m.tagline}</p>
              <p class="study-card__desc">${m.description}</p>
              <ul class="stack-list">
                ${m.topics.map((t) => `<li>${t}</li>`).join("")}
              </ul>
              <div class="study-card__links">
                <a href="${m.live}" target="_blank" rel="noopener">Ver ↗</a>
              </div>
            </div>
          </article>
        `
          )
          .join("")}
      </div>
    </section>

    <!-- Expertise: about/background -->
    <section id="expertise" class="section">
      <h2 class="section__title">Expertise</h2>
      <div class="expertise-grid">
        ${expertise
          .map(
            (e) => `
          <article class="expertise-card expertise-card--${e.color}">
            <div class="expertise-card__icon">${icons[e.icon]}</div>
            <h3>${e.title}</h3>
            <p class="expertise-card__summary">${e.summary}</p>
            <ul>
              ${e.items.map((i) => `<li>${i}</li>`).join("")}
            </ul>
          </article>
        `
          )
          .join("")}
      </div>
    </section>
  </main>

  <footer class="footer footer--sticky">
    <div class="footer__inner">
      <span class="footer__cta">Abierto a conversar sobre cloud, platform engineering e IA agéntica.</span>
      <nav class="footer__links">
        <a href="${profile.linkedin}" target="_blank" rel="noopener">LinkedIn <span class="footer__stat">${postsStats.followers.toLocaleString("es-CL")}+</span></a>
        <a href="${profile.github}" target="_blank" rel="noopener">GitHub ↗</a>
      </nav>
    </div>
  </footer>
`;

// Theme toggle
const saved = localStorage.getItem("theme");
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
const initial = saved || (prefersDark ? "dark" : "light");
if (initial === "light") document.documentElement.setAttribute("data-theme", "light");

document.querySelector(".theme-toggle")!.addEventListener("click", () => {
  const isLight = document.documentElement.getAttribute("data-theme") === "light";
  const next = isLight ? "dark" : "light";
  if (next === "dark") {
    document.documentElement.removeAttribute("data-theme");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
  }
  localStorage.setItem("theme", next);
});
