# Portfolio development plan

The owner requested the application scaffold on 11 October 2026. The runtime, MDX configuration, quality tooling, and development commands are established; content validation and journal features remain future work. This plan sequences a working publication from the confirmed brief; it does not authorize deployment or create scheduled automation.

## 1 Establish the foundation

Read the brief, design direction, architecture, and task-relevant skill. Scaffold the supported Next.js App Router version with TypeScript. Select a package manager, commit one lockfile, and record the actual development/build/lint/typecheck commands in README. Set up content validation, stable IDs, draft handling, and the proposed route structure before adding elaborate effects.

Use supplied, approved content. When it is unavailable, keep development fixtures clearly labelled and out of production publishing. Do not invent career achievements, quotations, social links, or release credits.

## 2 Establish the editorial system

Build the cover and four-entry contents page first, then a representative page for each section. Choose fonts, spacing, color, rules, and image treatment from rendered compositions. Keep a consistent system with issue-level cover/accent variation. Refine the desktop and mobile reading flows together.

## 3 Connect real content

Add the author's selected photos, music, writing, projects, and professional experience. Preserve original photo rendering. Connect issues to content by stable IDs and validate links, image metadata, dates, attribution, and draft exclusions. Implement the current issue selection and archive.

## 4 Add restrained interaction

Implement hover/focus feedback, keyboard and touch navigation, previous/next reading controls, and explicit audio playback. Add route-transition enhancement only after ordinary navigation works. Verify reduced motion, focus after navigation, and browser back/forward behavior.

## 5 Verify and prepare publication

Check the production build and preview, permanent URLs, metadata, media loading, layout, and accessibility. Connect the supplied domain and publish only as part of a later authorized launch task. Update documentation to distinguish implemented behavior from plans.

## Acceptance checks

- **Journeys:** cover → contents → each of four sections; direct engineering entry; individual work links; archive → old cover → preserved selections; previous/next; back/forward; tags and contact links.
- **Content:** valid cross-references, no draft leakage, truthful professional claims, attributed quotes, accessible media controls and alternatives, no unintended photo filters.
- **Rendering:** readable narrow/wide layouts, enlarged text, no essential horizontal overflow, stable image space, no dependence on motion to reveal content.
- **Accessibility:** keyboard-only navigation, visible focus, semantic landmarks/headings, text contrast, appropriate touch targets, reduced motion, and automated checks supplemented by manual inspection. Target WCAG 2.2 AA.
- **Performance:** measure production builds on representative cover, contents, photo essay, and article pages. Target field Core Web Vitals at the 75th percentile: LCP ≤2.5 s, INP ≤200 ms, CLS ≤0.1. Before field data exists, use lab measurements and interaction checks as diagnostic evidence, not proof of field performance. Record device/network conditions and actual results.
- **SEO:** crawlable HTML and links, unique titles/descriptions, deliberate canonicals for the root/issue mirror, production-domain URLs, sitemap/robots correctness, meaningful social previews, and truthful structured data. Protect private previews and keep drafts unindexed.

Use focused public-boundary tests for content validation and reading/navigation behavior. Do not create tests that merely assert styling implementation details. Current checks cover the application scaffold only; journal journey, content, visual, and performance acceptance remain pending.

## Agent-assisted publishing later

A publishing change should prepare content and derivatives, validate references/drafts, build a preview, and expose a concrete result for review. Preserve prior issue selections. Set up recurring workflows only when the owner requests their schedule and scope; no schedule is inferred from an aspiration to update weekly or monthly.

Measurement and accessibility sources: [Web Vitals thresholds](https://web.dev/articles/vitals), [WCAG 2.2](https://www.w3.org/TR/WCAG22/), and [Google crawlable JavaScript content guidance](https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics).
