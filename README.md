# Personal editorial portfolio

Application foundation for an English-language portfolio journal built with Next.js and intended for Vercel. It will bring together software engineering, photography, music, and writing. The publication name will be chosen later.

## Start here

1. Read [AGENTS.md](AGENTS.md) for workflow and skill routing.
2. Read the [confirmed brief](docs/BRIEF.md) and [design direction](DESIGN.md).
3. Use [ARCHITECTURE.md](ARCHITECTURE.md) for routes, content boundaries, and Next.js decisions.
4. Follow the [development plan](docs/DEVELOPMENT.md) when implementation is requested.
5. Consult [skill research](docs/SKILL-RESEARCH.md) for sources, selection reasons, and update instructions.

The deeper research includes [120 existing skill entrypoints](docs/research/CATALOG.md), [source-specific judgements](docs/research/SYNTHESIS.md), [the original eight image analyses](docs/research/image-evidence.md), [connections and wording](docs/research/VISUAL-CONNECTIONS.md), [seven palette families](docs/research/PALETTES.md), and [existing hook comparisons](docs/research/HOOKS.md). Twelve skills are discoverable locally; the broad catalog stays outside automatic skill loading. [Validation](docs/research/VALIDATION.md) separates source/structural checks and documentation exercises from future rendered-site evidence.

## Current state

The Next.js application now includes [Paper studies](docs/PAPERBOOK.md), six full-screen HTML compositions rebuilt from the owner-supplied references. It has shared design tokens, English reading notes, subject-specific hover/focus/touch effects, and reduced-motion support. Journal routes, approved owner content, content schemas/cross-reference validation, and publishing remain future work. The scaffold has `noindex, nofollow` metadata. There is no deployment or configured automation.

## Development

Use Node.js 24 (`nvm use`) and npm 11. The scaffold was verified locally with Node.js 26.4.0 and npm 11.17.0. Next.js 16.4.0 and React 19.3.0 were resolved from the npm registry's stable tags on 11 October 2026. Commit `package-lock.json` as the sole dependency lockfile.

```sh
npm ci
npm run dev
```

Open http://localhost:3000. The App Router lives in `src/app`; `@/*` resolves to `src/*`. Server Components are the default. Styling uses plain CSS with shared typography, spacing, palette and print-effect tokens for the reference book. The locally served [type system](docs/TYPOGRAPHY.md) uses Source Serif 4, Archivo and Anton; inspect its live specimen at `/typography`.

| Command                | Purpose                                              |
| ---------------------- | ---------------------------------------------------- |
| `npm run dev`          | Local development with Turbopack                     |
| `npm run build`        | Production build                                     |
| `npm start`            | Serve the production build                           |
| `npm run lint`         | Next.js/TypeScript ESLint rules; warnings fail       |
| `npm run typecheck`    | Generate route types and check TypeScript            |
| `npm run format`       | Format application, tests, configuration, and README |
| `npm run format:check` | Check formatting without changing files              |
| `npm run check`        | Lint, types, formatting, and production build        |
| `npm run test:e2e`     | Production smoke and automated accessibility checks  |

For browser tests, run `npx playwright install chromium` once, then `npm run build` and `npm run test:e2e`. The test runner starts its own production server on port 3100 and checks desktop/mobile Chromium. These checks establish reference-book controls and navigation behavior, not complete journal journeys or WCAG conformance.

## Installed foundation

- Next.js, React, React DOM, TypeScript, typed routes, and the `@/*` import alias.
- `@next/mdx`, the MDX compiler/runtime, and `remark-gfm` for trusted local Markdown/MDX. `src/mdx-components.tsx` is configured for the App Router. Keep authored content outside `src/app` until publication rules are implemented.
- `yaml` and Zod for future structured metadata parsing and validation; schemas, stable-ID resolution, and draft filtering are not implemented yet. `server-only` is available to protect future filesystem/content modules.
- Sharp for image optimization. The inspiration library remains under `docs/references`; only clipped photographic and illustration graphics are served under `public/graphics` for this local reconstruction study.
- ESLint with Next.js rules, Prettier, Playwright, and axe for development checks.

Next.js documentation matching the installed version is available in `node_modules/next/dist/docs`. Native Next.js facilities cover images, fonts, metadata, and routing; no CMS, database, state store, UI kit, or motion library is needed for this foundation.

Dependency checks on 11 October 2026: `npm audit --omit=dev` reported zero vulnerabilities. The full audit reported five high-severity findings in the Next.js ESLint dependency chain (`braces` → `micromatch` → `fast-glob`). npm's proposed fix downgrades Next.js lint tooling to version 14; it was not applied. ESLint 10 is supported by the installed Next.js documentation, though three bundled plugins still emit peer-range warnings. `npm ci --dry-run` and linting succeeded with npm 11.

The project location is `portfolio-app`. Skills live in `.agents/skills/`; keep this directory with the project. Newly installed skills are available for discovery on the next turn in the project context.

## Inputs needed during development

Supply the chosen publication name, existing domain, actual professional/contact URLs, approved CV and experience text, and the initial content selection when those tasks begin. These inputs do not block preparation. Do not invent them or publish placeholder personal information.

### Visual skill companion

[Publication layout](.agents/skills/japanese-publication-layout/SKILL.md) and [retro print effects](.agents/skills/retro-print-effects/SKILL.md) add image direction, book/album structure and concrete material guidance. Open the [internal visual atlas](docs/research/visual-atlas/index.html) in a browser for five source comparisons and adjustable print specimens. The reference library now contains ten scans; the original eight-image research remains a historical record. No new portfolio prototype is included.
