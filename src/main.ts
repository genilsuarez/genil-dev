import "./style.css";
import { profile, projects, expertise, topPosts, postsStats, studyMaterials } from "./data/content";

const app = document.querySelector<HTMLDivElement>("#app")!;

const featuredProjects = projects.filter((p) => p.featured);
const otherProjects = projects.filter((p) => !p.featured);

const icons = {
  cloud: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M17.5 19a4.5 4.5 0 0 0 0-9 6 6 0 0 0-11.3-2A5 5 0 0 0 6.5 19h11z"/></svg>`,
  stack: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2 2 7l10 5 10-5-10-5z"/><path d="m2 17 10 5 10-5"/><path d="m2 12 10 5 10-5"/></svg>`,
  agent: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="8" width="16" height="12" rx="2"/><path d="M12 8V4M9 4h6"/><circle cx="9" cy="14" r="1"/><circle cx="15" cy="14" r="1"/></svg>`,
};

function sectionBadge(n: string) {
  return `<span class="badge">${n}</span>`;
}

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
        <a href="#expertise">Expertise</a>
        <a href="#contenido">Contenido</a>
      </nav>
      <button class="theme-toggle" aria-label="Cambiar tema" type="button">
        <svg class="theme-toggle__sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>
        <svg class="theme-toggle__moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
      </button>
    </div>
  </header>

  <main>
    <section id="top" class="hero">
      <p class="hero__eyebrow">${profile.location} · ${profile.company}</p>
      <h1>${profile.name}</h1>
      <ul class="role-legend">
        ${profile.roles
          .map(
            (r, i) => `
          <li class="role-legend__item" style="animation-delay:${0.32 + i * 0.05}s">
            <span class="role-legend__swatch role-legend__swatch--${r.color}"></span>
            <span class="role-legend__label">${r.label}</span>
          </li>
        `
          )
          .join("")}
      </ul>
      <div class="hero__summary-card">
        <p class="hero__summary">${profile.summary}</p>
        <ul class="hero__highlights">
          <li><span class="hero__highlight hero__highlight--blue">18 años infraestructura</span></li>
          <li><span class="hero__highlight hero__highlight--green">Plataforma de pagos PCI</span></li>
          <li><span class="hero__highlight hero__highlight--purple">IA en operaciones TI</span></li>
        </ul>
      </div>
    </section>

    <section id="proyectos" class="section">
      <h2 class="section__title">${sectionBadge("1")} Proyectos personales destacados</h2>
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

    <section id="expertise" class="section">
      <h2 class="section__title">${sectionBadge("2")} Stack técnico / Expertise</h2>
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

    <section id="contenido" class="section">
      <h2 class="section__title">${sectionBadge("3")} Contenido técnico</h2>
      <p class="section__lead">
        ${postsStats.totalPosts}+ publicaciones técnicas en LinkedIn ·
        ${postsStats.followers.toLocaleString("es-CL")}+ seguidores.
        Foco en arquitecturas de IA agéntica, MCP, y FinOps de IA.
      </p>

      <h3 class="subsection__title">Material de estudio</h3>
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

      <h3 class="subsection__title">Top posts en LinkedIn</h3>
      <ul class="posts-list">
        ${topPosts
          .map(
            (post) => `
          <li>
            <span class="posts-list__title">${post.title}</span>
            <span class="posts-list__meta">${post.month} · ${post.impressions.toLocaleString("es-CL")} impresiones</span>
          </li>
        `
          )
          .join("")}
      </ul>
    </section>

  </main>

  <footer class="footer footer--sticky">
    <div class="footer__inner">
      <span class="footer__cta">Abierto a conversar sobre cloud, platform engineering e IA agéntica.</span>
      <nav class="footer__links">
        <a href="${profile.linkedin}" target="_blank" rel="noopener">LinkedIn ↗</a>
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