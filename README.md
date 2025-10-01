<div align="center">
   <h1>Omisha Singh – Developer Portfolio</h1>
   <p><strong>Full‑stack engineer & B.Tech CSE student building realtime, AI-enabled, and community products.</strong></p>
   <p>
      <a href="https://hyaurora.me" target="_blank">Live Site</a> ·
      <a href="./src/data/resume.tsx">Config Data</a>
   </p>
   <p>
      <a href="https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fhy-aurora%2Fportfolio" target="_blank"><img alt="Deploy with Vercel" src="https://vercel.com/button" /></a>
   </p>
</div>

## ✨ Overview

This repository powers my personal portfolio at **hyaurora.me**. It showcases projects like StreamFi, MailForge, VYBE, EdHub, and UniMart; hackathon results; certifications; and a timeline of work & education. Originally forked from the open-source template by @dillionverma and then heavily extended:

- Removed blog module (static MDX parsing stripped) for a leaner build.
- Added animated effects (BlurFade, BorderBeam) and a custom icon system for tech stack badges.
- Expanded structured data: skills, hackathons + certificates, multi-project metadata.
- Enhanced SEO metadata (OpenGraph, Twitter, canonical) aligned to `hyaurora.me`.

## 🧱 Tech Stack

| Layer | Tech |
|-------|------|
| Framework | Next.js 14 App Router |
| Language | TypeScript, React 18 |
| UI | Tailwind CSS, shadcn/ui primitives, Magic UI components, Framer Motion |
| Animations | BlurFade, BorderBeam, custom motion wrappers |
| Content | Central config in `src/data/resume.tsx` (no CMS) |
| Icons | Inline custom SVG + lucide-react mapping |
| Deployment | Vercel (edge-ready) |

## 🚀 Features

- Single **data source of truth** (`src/data/resume.tsx`) for all sections.
- Project & hackathon cards with animated borders (BorderBeam) and markdown support.
- Skill badges auto-mapped to icons (fallback-safe).
- Accessible, responsive, dark‑mode friendly.
- Zero external DB; fully static-friendly (incremental build possible).

## 🔧 Quick Start

Clone and run locally:

```bash
git clone https://github.com/hy-aurora/portfolio
cd portfolio
pnpm install
pnpm dev
```

Then open: http://localhost:3000

## 🛠 Customization Guide

Edit the single config file:

```ts
// src/data/resume.tsx
export const DATA = {
   name: "Your Name",
   summary: "Short headline...",
   skills: ["TypeScript", "Next.js"],
   projects: [ { title: "Project", technologies: ["..."], description: "..." } ],
   hackathons: [ { title: "Event", description: "Result" } ],
};
```

To add a new skill icon:
1. Create / extend an icon in `src/components/icons.tsx`.
2. Ensure the mapping logic in `src/app/page.tsx` (skills section) recognizes the lowercase name.

Add a project image: place a file in `public/` (e.g., `streamfi.png`) and reference it via `image: "/streamfi.png"` in the project object.

## 🧪 Development Notes

- ESLint + TypeScript used; current TS version may exceed `@typescript-eslint` official support (warning harmless).
- All animation components are client-side; keep payload lean by avoiding unnecessary imports in server components.
- If you re-enable blog: restore `content/` MDX parsing pipeline and associated route handlers.

## 📦 Deployment

1. Push to GitHub.
2. Create a new Vercel project and import the repo.
3. (Optional) Set `NEXT_PUBLIC_*` env vars if adding APIs later.
4. Trigger production build – static assets & SEO metadata will propagate automatically.

## 🗺 Roadmap (Ideas)

- Replace inline SVG placeholders with official brand assets.
- Add framer-motion hover micro-animations to skill badges.
- Generate RSS or JSON feed for achievements.
- Integrate OG image generation (dynamic project cards).

## 📄 License

MIT – see [LICENSE](./LICENSE)

---

Questions or suggestions? Open an issue or reach out via the contact links on the site.
