# AGENTS.md

Single-package Next.js 15 (App Router) personal portfolio. No tests, no CI, no lockfile-based monorepo — keep this file to verified facts only.

## Language
- Always respond to the user in Spanish for this project.

## Commands
- `npm run dev` — dev server with Turbopack (`next dev --turbopack`), http://localhost:3000
- `npm run lint` — `next lint` (flat config, `next/core-web-vitals` + `next/typescript`)
- `npm run build` — also runs type checking; there is no separate typecheck script
- No test framework is installed; do not add or run test commands

## Environment
- Contact form mails via Resend: `app/api/send/route.ts` reads `process.env.RESEND_API_KEY` per-request; the route returns 500 without it (a `.env.local` is required to exercise the form locally).
- Contact-form validation lives in `lib/emailSchema.ts` (Zod) and is shared by `ContactForm.tsx` and the API route — change it there, never only client-side.
- Installed `node_modules` can drift from `package-lock.json` — if behavior looks version-specific, run `npm ci` (it takes several minutes on this machine).

## Architecture
- The entire page is one client component (`app/page.tsx`, `"use client"`) rendering Home/About/Skills/Projects/Contact sections. Scroll-spy section highlighting comes from `hooks/useInView.tsx` refs wired in `page.tsx`.
- All textual content (projects, skills, nav links) lives in `data/data.ts` — edit data there, not in components. Project screenshots are static files in `public/` referenced by `src` in `data.ts`.
- `components/EmailTemplate.tsx` is imported only by the API route (server side) — don't add `"use client"` to it.
- Styling: Tailwind v3 with custom tokens in `tailwind.config.ts` (`baseColor`/`secondColor`, `baseBGColor`/`secondBGColor`); `styles/NavBar.css` is plain CSS for the navbar.
- Scroll-reveal animations use `components/Reveal.tsx` (one-shot IntersectionObserver wrapper); global keyframes/utilities (`text-gradient`, `animate-float`, `ambient-blob`, etc.) live in `app/globals.css`. All motion respects `prefers-reduced-motion`.
- Path alias `@/*` maps to the repo root.

## Tooling quirks
- Node modules pin Next at exactly `15.1.11` (security patch for a React Server Components CVE — see git history). Do not casually downgrade/upgrade Next or React.
- `.agents/skills/` contains frontend/Next.js best-practice skills; load the relevant one for larger UI or Next.js changes rather than guessing conventions.
