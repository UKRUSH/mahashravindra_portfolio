# Build plan — 10 parts

Source of truth: [portfolio-brief.md](./portfolio-brief.md). Section numbers (§) refer to that brief.

Project layout differs slightly from the brief's `src/` suggestion: this repo uses `app/`, `components/`, `content/`, and `lib/` at the root with the `@/*` alias. Next.js 16 with `cacheComponents` is enabled. Synchronous `new Date()` in a Server Component fails prerendering, so any date logic must live in a Client Component or a `"use cache"` function.

| Part | Scope | Brief § | Status |
| --- | --- | --- | --- |
| 1 | **Foundation**: brief and plan in repo, Tailwind removed, plain-CSS design system, Inter font, root layout and metadata, skip link, full typed content model, shared primitives (`SectionHeading`, `Icon`), temporary homepage | 4, 7, 8, 9, 10.1, 10.3 | Done |
| 2 | **Site shell**: sticky `SiteHeader` with mobile disclosure, `ThemeToggle` (persisted, no flash), `SiteFooter` with logo plate and year | 5.1, 5.15, 10.4, 11.1 | Done |
| 3 | **Hero and professional snapshot**: portrait card with MR fallback, actions, four stat tiles | 5.2, 5.3, 10.2 | Done |
| 4 | **About and Expertise**: long bio, credentials row, "Why I built BIZmaster", three competency cards | 2.2, 2.5–2.7, 2.17, 5.4, 5.5 | Done |
| 5 | **Experience and Qualifications**: two-entry timeline, four credential cards | 2.4, 2.8, 5.6, 5.7 | Done |
| 6 | **Ecosystem and AI products**: six pillar cards, positioning line, six product cards with "Discuss this solution" | 2.10, 2.11, 5.8, 5.9 | Done |
| 7 | **Work**: featured cards on the homepage, `/projects` with category filter, `/projects/[slug]` detail pages | 2.12, 5.10, 10.5, 10.7 | Done |
| 8 | **Recognition, Vision and Values, Speaking, Contact**: dark purpose panel, differentiators, talk topics and formats, purple contact panel | 2.9, 2.13–2.16, 5.11–5.14 | Done |
| 9 | **Secondary pages and SEO**: `/media-kit`, `/privacy`, `not-found`, metadata per page, sitemap, robots, Open Graph image, Person JSON-LD | 3.1, 12 | Done |
| 10 | **QA and polish**: ESLint, `tsc`, production build, responsive review at 320/375/768/1024/1440, keyboard and contrast checks, §14 checklist | 13, 14 | Done |

## Final QA (9 October 2026)

All passing on the production build:

- ESLint, `tsc`, `next build` (every page prerendered; unknown project slugs return a real 404 via `proxy.ts`).
- 531 links across all 13 pages: internal routes and `#section` anchors resolve, mailto/tel/WhatsApp targets are well-formed, the company site responds, downloads (`.jpg`, `.vcf`) return the right type, and new-tab links carry `rel="noopener noreferrer"`.
- Every interaction clicked in Chrome: skip link, header and footer section links (including repeat clicks on an unchanged hash, fixed with `components/HashLink.tsx`), Let's Talk, hero buttons, theme toggle and persistence, mobile menu (Escape, outside click, link close), project filter counts and status, copy-bio buttons (clipboard read back), media-kit contents, back to top, and every save-card download.
- axe-core (WCAG 2.1 A/AA and best practice) on every page in light and dark: no violations.
- Layout at 320/375/768/1024/1440 in both themes with no horizontal overflow; full content audit of every brief field (§14.1); print and reduced-motion show all content.

Before launch: set `SITE_URL` and `ALLOW_INDEXING=true` on the production deployment (see `.env.example`); until then robots and `noindex` keep the site out of search. Measure Core Web Vitals once hosted.

## Added beyond the brief

- MR favicon and Apple touch icon (`app/icon.tsx`, `app/apple-icon.tsx`), replacing the scaffold favicon.
- `proxy.ts`: unknown project slugs return a real 404 (cacheComponents has no `dynamicParams = false`).
- Header highlights the homepage section in view (`components/SectionSpy.tsx`).
- "Save contact card" vCard at `/mahesh-ravindra.vcf`, built from published contact details only.
- Copy buttons and word counts for the biographies on `/media-kit`.
- WhatsApp speaking invitations (`components/InviteToSpeakButton.tsx`) and a WhatsApp contact tile.
- "Save contact card" JPG business card at `/mahesh-ravindra-card.jpg` (Inter OFL fonts in `assets/fonts`, converted with `sharp`).
- Visual enhancement layer: hero entrance, scroll reveals, grain, section redesigns, footer sign-off.

## Open items from the owner (§14.4)

1. Name spelling: Ravindra or Ravinder. The site uses **Ravindra** provisionally.
2. Approved portrait and BIZmaster logo file.
3. Portfolio domain and hosting.
4. LinkedIn URL, if wanted. (WhatsApp confirmed 9 October 2026: +94 777 960 231, now used for speaking invitations and the Contact section.)
5. Award details and certificates.
6. Current project stages and any publishable results.
7. Reviewed downloadable profile or speaker sheet.
8. Email provider and privacy practices, needed only if a form or analytics is added.
