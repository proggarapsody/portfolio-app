# Aesthetics-source retrieval log

Research date: 2026-10-11. Retrieval only: downloaded source text to `/tmp/aesthetic-research` for inspection; no downloaded code executed, no skills installed, no runtime or output-quality evals. Repository popularity snapshots are not skill ratings. Every candidate JSON row pins repository HEAD and links to that exact commit.

## Search scope and queries

Primary browsing used GitHub pages for discovery and authenticated `gh api` repository metadata/commit/tree endpoints, followed by raw GitHub text at pinned SHA. Unauthenticated GitHub API hit a rate limit; authenticated read-only API succeeded. Search-engine listings served only as leads.

Queries included:

- `github SKILL.md Japanese aesthetics wabi sabi shibui kanso ma`
- `github SKILL.md Showa Japanese design newspaper`
- `github agent skills typography editorial print design`
- `site:github.com "SKILL.md" "wabi"`
- `site:github.com "SKILL.md" "shibui"`
- `site:github.com "SKILL.md" "kanso"`
- `site:github.com "SKILL.md" "Showa"`
- `site:github.com "SKILL.md" "ma" "Japanese" design`
- `site:github.com "SKILL.md" "newspaper" design`
- `site:github.com "SKILL.md" "昭和" design`
- `concertonotes "wabi-sabi" "SKILL.md"`
- `site:github.com concertonotes skills`
- `site:github.com nkuCarrie aesthetic-extractor-skill`

Dedicated Shibui/Kanso skills were not found in this bounded search. This is not an exhaustive absence claim. Showa search located an actual named `showa-kissaten` skill. Japanese-looking brand names alone were not accepted as Japanese aesthetic evidence.

## Inventory count and deduplication

`aesthetic-candidates.json` has 55 distinct inspected paths across 25 repositories:

- 38 with a confirmed license: 29 repository MIT, 3 scoped MIT in ConcertoNotes, 5 Apache-2.0, 1 CC-BY-4.0.
- Of those, 37 have YAML `name` frontmatter. Maestro top-level SKILL.md is a CLI index without frontmatter and should not be used toward a strict skill-spec minimum.
- 17 public candidates have no declared source license located. They are reference leads, not confirmed open source.
- The OpenDesign Swiss-print web prototype expressly derives from Leonxlnx `brutalist-skill`; preserve that shared provenance. Excluding that derivative and the Maestro top-level index leaves 36 conservatively distinct licensed skill entries in this branch.
- Dual `.agents`/`.claude` copies in y-endo were deduplicated. OpenDesign official/example copies were not counted. Each named aesthetic reference inside a router (30 styles, 54 styles, 12 styles, 10 slide presets) is a reference, not an independent skill.
- `nexu-io/open-design/skills/color-expert/SKILL.md` was a catalog advertisement requiring the upstream package. It was inspected but excluded; `meodai/skill.color-expert/SKILL.md` is the actual counted skill.
- Dependency licenses in design-skills-center's committed node_modules do not license its authored site skills.

## Japanese-specific findings

**Engineering grounding:** `hanageruge/ja-webtypo-skill` (MIT) directly targets Japanese phrase breaking, body alignment, CJK punctuation and quoted phrases. Native `auto-phrase` behavior varies by browser; build-time BudouX is the optional cross-engine path. It distinguishes heading/centered phrase handling from left-aligned body text.

**Review grounding:** `y-endo/agents` Japanese design review is public but unlicensed. Its source-card file links Japan Digital Agency typography/accessibility, W3C JLReq, SmartHR, WAIC and publisher pages for named Japanese design books. This is a Japanese writing/UI review workflow, not a style generator. Its JLReq note expressly warns against transferring all book-composition detail directly to browser UI.

**Principle-level Wabi-Sabi:** ConcertoNotes' community universal-design-principles package has a scoped MIT license (Copyright 2026 Hunter D) despite null repository-license metadata. `wabi-sabi`, `wabi-sabi-imperfection` and `wabi-sabi-restraint` are three real entrypoints. They frame selective warmth and absence, calibrated imperfection, accessibility/scanability boundaries and maintenance costs. The lineage file is an authored synthesis, not independent proof of historical accuracy.

**Fixed Japanese minimalist skin:** madebymustafa `japanese-minimal` (MIT) is a real genre-pack entrypoint. It prescribes rice-paper colors, sumi ink, hanko red, Shippori Mincho/Zen Kaku Gothic New, ma via large intervals, asymmetric columns, one vertical element, and single restrained fade/rise acts. This is a concrete author-designed interpretation; its fixed rules are not universal Japanese design laws.

**Themed artifact route:** Glaze (MIT) has one skill with a `sumi` CSS theme explicitly described through ma, enso, tategaki and hanko. Its eight themes are not eight skills. It skins existing content as standalone HTML rather than validating or authoring the content.

**Showa/craft specificity:** design-skills-center has real `showa-kissaten`, `wafu-minimal`, `sashiko-hitomezashi`, `rinpa-gold-ground`, `rinpa-kinji-mokkotsu`, and `yoiai-summer-festival` entrypoints. Showa uses cafe/bathhouse material vocabulary and noren/soroban interactions. Sashiko uses indigo cloth, cotton thread and binary stitch grids. Rinpa specifies gold ground, mokkotsu, tarashikomi and ma, with SVG filter/performance detail. Summer-festival ma includes light/sound arrival timing, Canvas/Web Audio and motion controls. **No source license found.** The same repo's `negative-space-minimal` skill explicitly describes Western gallery restraint and distinguishes itself from wafu, despite the YOHAKU demo name.

**Evidence extraction:** nkuCarrie `aesthetic-extractor` (public, unlicensed) separates observation from inference, and explicitly warns against choosing between Japanese minimalism and Scandinavian editorial labels without visible support. uyoujian's extractor (public, unlicensed) names Showa as an era/context dimension but does not provide a Showa design system.

## Craft and risk details

- Mono Color is source-MIT with separately restricted original artwork and separately owned third-party references. It is a print-image workflow requiring image generation for raster output, not merely a CSS pack.
- Color Expert is CC-BY-4.0, with attribution obligations; it is the upstream color-science reference skill.
- OpenDesign retro-zine is in an Apache repository but vendors MIT template assets; preserve the original MIT notice when copying assets.
- Maestro format-specific skills invoke Bun and format-specific build/export dependencies (Eleventy/Vite, Puppeteer, ffmpeg, p5.js, pagedjs-cli). Wabi-sabi/ukiyo-e styles are references shared by those actual format skills.
- gpt-image2-ppt uses Python and image API credentials/costs; Japanese-wabi is one preset rather than an independent skill. Raster slide text needs fidelity/editability review.
- Wedding Invitation requires Node 18+ and Chromium; Newspaper Brief requires Python and a browser for image export; NewspaperUI depends on its React library and has no declared source license found.
- Frontend Textbooks is an editorial HTML/PDF workflow with generated cover and print/mobile checks, not a ready-made portfolio component library.
- Aesthetic sources in this branch contain no inspected skill-specific agent event-hook bundle. React hook directories and unrelated plugin hooks in broad collections were not labeled as hooks for these aesthetic skills. Hook repositories should be researched and inventoried separately.

These notes describe source contents and constraints. They are not recommendations, cultural-authenticity verdicts, security certification or skill-performance evidence.
