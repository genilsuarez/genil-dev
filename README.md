# genil.dev

Portfolio técnico personal de Genil Suarez. Vite + TypeScript, sin framework, sin build de UI library.

## Desarrollo

```bash
npm install
npm run dev
```

## Contenido

Todo el contenido (proyectos, expertise, posts) vive en [`src/data/content.ts`](src/data/content.ts) — para agregar un proyecto nuevo (ej. AgentStudy, LearnHub), agregar una entrada al array `projects`.

## Deploy

`main` → GitHub Actions (`.github/workflows/deploy.yml`) → GitHub Pages. Dominio custom vía `public/CNAME` (`genil.dev`) — requiere configurar DNS (registros A de GitHub Pages o CNAME a `genilsuarez.github.io`) una vez comprado el dominio.
