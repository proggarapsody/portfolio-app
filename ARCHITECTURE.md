# Portfolio architecture

Next.js and Vercel are confirmed. The application foundation uses Next.js 16.4.0, React 19.3.0, TypeScript, npm, and the App Router under `src/app`. Node.js 24 is the recommended runtime; local checks used Node.js 26.4.0. See README for actual commands. The architecture below remains the baseline for journal features; content routes and publishing are not implemented yet.

## Rendering and content ownership

Use the App Router and Server Components by default. Pre-render public editorial content where appropriate; Server Components alone do not guarantee build-time prerendering. Use the installed version's static route-generation APIs for known content routes. Limit Client Components to actual interaction such as the music player or optional transition enhancement. Ordinary links, headings, article content, and contents navigation must not depend on client hydration.

Start with versioned, repository-managed Markdown/MDX and structured metadata, matching the agent-assisted publishing workflow. Keep MDX limited to trusted author-controlled source. Validate frontmatter and cross-references at build time. No database or hosted CMS is needed initially; reconsider only when a concrete publishing requirement appears.

Store original media separately from generated display derivatives. Preserve the artistic color and rendering of supplied photos; responsive resizing and compression must be visually reviewed. Do not commit large audio masters into the application by default. Choose media storage after inspecting actual sizes and playback needs.

## Proposed route contract

| Route | Purpose |
| --- | --- |
| `/` | Cover for the explicitly selected current issue |
| `/issues` | Issue archive |
| `/issues/[issueSlug]` | Permanent issue cover |
| `/issues/[issueSlug]/contents` | Archived selection and four section introductions |
| `/engineering` | Direct professional entry, experience, projects, professional/contact links |
| `/engineering/[slug]` | Permanent project case study |
| `/photography` and `/photography/[slug]` | Photography index and album/photo essay |
| `/music` and `/music/[slug]` | Music index and individual release/work |
| `/writing` and `/writing/[slug]` | Story index and article |
| `/tags/[slug]` | Useful cross-section tag collection |

Avoid generating empty tag pages. Routes are an implementation baseline, not existing endpoints. Keep URLs stable once published and use redirects when a slug must change.

## Content boundaries

- **Site settings:** publication name, author identity, verified professional/contact links, deployment origin, and current issue ID. Keep drafts explicit; missing production values must not silently become fabricated defaults.
- **Issue:** stable ID/slug, title, date, cover asset and alt text, quote with attribution, editorial introduction, accent choice, and ordered section selections referencing stable content IDs.
- **Common content:** stable ID/slug, title, summary, draft/published status, publication date, optional genuine modified date, tags, and relevant media/credits.
- **Engineering project:** context, contribution, technical decisions, evidence-backed results, links, and selected media. Keep the author's experience profile separate from project records.
- **Photo essay:** ordered images, original asset references, dimensions, alt text and optional captions, plus narrative.
- **Music work:** artwork, description, audio source or verified external listening link, format/duration where known, and credits.
- **Story:** readable body content with optional illustrations and captions.

Archived issues preserve cover, editorial wording, and ordered selections. Referenced works remain independently maintainable; full historical snapshots of every article revision are not a launch requirement. Prevent dangling references when retiring content. Draft content must stay out of public routes, issue selections, feeds, and sitemaps.

## Reading order

An issue owns the order of its selections. Section browsing owns its own order. Previous/next controls must label which order they follow. Directly visiting a work must not require an issue context. If an issue context is carried in a URL parameter, canonicalize to the permanent content URL and validate the context before displaying issue navigation.

## Images, fonts, audio, and motion

Use Next.js image and font facilities where appropriate, with explicit image dimensions and correct responsive sizes. Prioritize only the actual above-the-fold cover image; defer below-fold media. Never ship full-resolution originals as every thumbnail. Keep a way to view photographs with their intended rendering.

Keep font families/weights limited and serve only needed subsets. Music playback should have accessible controls, avoid autoplay, and avoid fetching full audio until requested. Start with CSS for small interactions; adopt a motion dependency only for an effect CSS cannot reasonably provide.

## Publishing on Vercel

Use preview deployments to review content and appearance before production publication. The owner already has a domain, but its exact value and DNS configuration remain inputs for launch. Derive canonical URLs from a configured production origin; never infer the production domain from a preview request host.

Content changes can trigger normal builds. Automation may prepare content updates and validation later; this task does not create scheduled jobs or publish anything. A CMS or dynamic rendering path can be introduced later without changing permanent public URLs.

## SEO and quality

Server-render meaningful content and real links. Generate page-specific metadata, social previews, canonical URLs, a sitemap, and robots directives through supported Next.js APIs. The root current cover and permanent issue cover should resolve canonical duplication deliberately, normally using the permanent issue URL as canonical for the mirrored root cover. Update this relationship when the current issue changes.

Use appropriate truthful structured data, such as Article for stories and Person where relevant; do not promise rich results. Exclude drafts and private previews from indexing. See [development acceptance](docs/DEVELOPMENT.md) and the installed performance/SEO skills for checks.

Framework sources: [Server and Client Components](https://nextjs.org/docs/app/getting-started/server-and-client-components), [static route parameters](https://nextjs.org/docs/app/api-reference/functions/generate-static-params), [images](https://nextjs.org/docs/app/getting-started/images), and [metadata](https://nextjs.org/docs/app/getting-started/metadata-and-og-images). Consult version-matched bundled docs after installation, as described in [Next.js agent setup](https://nextjs.org/docs/app/guides/ai-agents).
