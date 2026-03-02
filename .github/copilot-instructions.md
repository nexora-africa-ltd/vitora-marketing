# Copilot Instructions for vitora-marketing

## Project snapshot
- This repo is a Next.js App Router marketing site for Vitora HMIS (Kenya healthcare context), not the HMIS product itself.
- Build target is static export (`output: "export"` in `next.config.ts`), so pages are pre-rendered to `out/`.
- Current architecture is intentionally simple: route-level pages in `app/**/page.tsx` with mostly inline content and no backend/API routes.

## Core architecture and data flow
- `app/layout.tsx` is the root composition: global metadata + `ThemeProvider` + `Navbar` + page `<main>` + `Footer`.
- Shared site and navigation data lives in `lib/constants.ts` (`siteConfig`, `navigation`) and is consumed by layout components.
- Route pages (`app/page.tsx`, `app/features/page.tsx`, `app/integrations/page.tsx`, etc.) render mostly static sections; richer sections use local arrays + `.map(...)` inside the page file.
- Interactive pages are currently `app/contact/page.tsx` and `app/demo/page.tsx`, both client components with local `useState` and placeholder `console.log` submit handlers.

## Conventions to follow in this codebase
- Use the `@/*` path alias from `tsconfig.json` (e.g., `@/lib/constants`, `@/components/layout/navbar`).
- Keep server components by default; add `'use client'` only when hooks/browser APIs are needed.
- For theme-dependent UI, follow `components/layout/theme-toggle.tsx`: mounted guard (`mounted` state) to avoid hydration mismatch.
- Reuse `cn()` from `lib/utils.ts` for conditional classes instead of manual string concatenation.
- Keep nav/footer links centralized in `lib/constants.ts`; if you add/remove pages, update constants and corresponding routes together.

## Styling and design tokens
- Styling is Tailwind-first with custom brand tokens in `tailwind.config.ts` (`brand.burgundy`, `brand.teal`, `brand.gold`, `shadow-card`, `bg-gradient-hero`, animations).
- Global semantic CSS variables (light/dark) are in `app/globals.css`; prefer these tokens over ad-hoc colors.
- Existing UI pattern is section-based marketing layout: gradient hero, card grids, CTA bands, responsive via `container mx-auto px-4 sm:px-6 lg:px-8`.
- Icons are from `lucide-react`; use consistent sizing and color token classes (`text-brand-teal`, `text-brand-gold`, etc.).

## Developer workflows
- Install: `npm install`
- Dev: `npm run dev` (uses Turbopack)
- Lint: `npm run lint`
- Production build: `npm run build`
- Static output/deploy artifact is `out/` (also referenced in Azure Static Web Apps workflow under `.github/workflows/`).

## Guardrails for AI changes
- Preserve static-export compatibility: avoid introducing server-only features that require a running Node server at runtime.
- Prefer minimal, surgical edits to existing page structure and copy blocks instead of large refactors.
- When adding new routes, ensure they are linked from `navigation` only if the route exists.
- Keep metadata/site identity centralized via `siteConfig` rather than duplicating literals across files.
