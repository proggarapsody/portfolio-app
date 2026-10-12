# Validation and completion evidence

Checked 11 October 2026. This task produced research, skills and documents, not an application or prototype.

## Source coverage

Three parallel retrieval tracks and a bounded design-hook/craft follow-up inspected **124 records**, deduplicated to **120 primary entrypoints across 43 repositories**. **97 distinct licensed skills** meet the strict count. Hooks, individual optimization rules, referenced style essays, duplicate retrieval records, a top-level index, a declared derivative, uncertain-original subskills, undeclared licenses and malformed YAML are excluded as applicable. The count exceeds the requested minimum of 50 without relying on publicly visible but unlicensed files.

An independent pinned-source re-fetch checked file SHA-256 and parsed discovery metadata. [source-verification.json](source-verification.json) records each outcome. Newspaper-brief S037 exists and its hash matches, but the upstream description has invalid YAML; it is excluded from the strict count and not installed. License evidence was retrieved in the source tracks; the re-fetch check verifies file identity/metadata, not license interpretation, effectiveness or cultural authority.

[catalog.json](catalog.json) records exact source paths/revisions, license status, repository star snapshots and brief-specific fit labels. The larger track files preserve actual inspected evidence and source-specific prerequisites. Popularity is not treated as a per-skill rating. Source-fit judgement and conflicts are explained in [SYNTHESIS.md](SYNTHESIS.md).

All eleven engineering-track hook source hashes also matched an independent re-fetch, recorded in [hook-source-verification.json](hook-source-verification.json). The additional Impeccable design hook has provider/source evidence in [design-hook-evidence.json](design-hook-evidence.json). These checks establish source identity, not successful hook execution.

## Installed skill checks

All **ten** discoverable skill folders passed the local OpenAI skill-creator `quick_validate.py` check. It checks frontmatter/naming/scaffold structure, not design judgement. It ran with PyYAML in the already prepared temporary validation environment; no application/global dependency was added.

The four project-authored entrypoints are 20–22 lines each and focus on distinct jobs: reference-led composition, issue art direction, reading interaction, and English editorial copy. All six preserved upstream entrypoints are also below Claude's suggested 500-line body ceiling. The large compiled React guide remains an optional reference.

The lock contains current file counts and tree hashes for all ten folders. Full scoped MIT license was added unchanged for Wabi-Sabi restraint; its entrypoint and supporting checklist match the pinned upstream files. The other five upstream folders retain their prior recorded adaptations and license evidence. No lifecycle or React runtime hook was configured or installed.

## Image and palette checks

All **eight** project reference copies match the attachments byte for byte. [image-palettes.json](image-palettes.json) records dimensions, SHA-256, dominant bins, localized regions, hue/saturation masks and retained pixel counts. Files were analyzed, not edited. [image-evidence.md](image-evidence.md) records observable layout/type/material/wording with transcription confidence and provenance limits.

Seven proposed web palette families appear in [PALETTES.md](PALETTES.md), [web-palettes.json](web-palettes.json), and the SVG atlas. Each opaque reading-text and signal-color pair passes 4.5:1 against its listed surface using the WCAG sRGB luminance formula. Decorative furniture colors are not approved as text. This arithmetic cannot prove contrast with real textures, photographs, overlays or rendered fonts.

## Independent documentation exercises

The same request was completed in two isolated outputs: one using a snapshot of the earlier editorial skill/docs, one using the revised project skills and relevant small references. No prototype or application code was generated. Requests covered three issue directions from images 2/5/8, connections/history for 1/3/8, contents states/direct employer access, and a clearly fictional music-copy exercise with missing metadata.

| Evidence                                                     | Observed result                                                                                                                                                                                   |
| ------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Earlier skill output](exercises/earlier-skill-response.md)  | Already produced distinct marine/studio/newsprint compositions, preserved photo rendering, avoided authenticating scans, and retained keyboard/touch/reduced-motion and direct engineering access |
| [Revised skill output](exercises/revised-skills-response.md) | Preserved those behaviors and explicitly used palette-role values, decorative-color limits, different display-type relationships and source-specific history limits                               |
| [Metadata routing output](exercises/routing-response.md)     | Routed a serialization bug to React/Next guidance rather than aesthetic/copy skills; recognized a user-requested Japanese translation as a scope change without inventing translation expertise   |

Both outputs met the observed core constraints. This is not evidence that the revised skills caused a measurable performance uplift, nor a benchmark of all candidates. The added value demonstrated in the revised output is more explicit use of the documented reference/palette decisions. Future implementation still requires real rendered and interaction evidence.

## File integrity and scope

Final checks verify local Markdown targets outside fenced examples, JSON parsing, SVG XML structure, source counts, image hashes, skill tree hashes, and the absence of application/dependency manifests or enabled hook settings. Detailed counts are saved in [final-checks.json](final-checks.json). Heading anchors and every external link are not exhaustively verified. Runtime tests, visual website QA, field metrics, SEO outcomes and deployment checks were not run because no application exists.

## Visual skill revision — 2026-10-12

Added `japanese-publication-layout` and `retro-print-effects`, revised the two existing editorial/issue skills, and integrated routing into AGENTS, README and DESIGN. The library now contains twelve skills and ten reference scans. The original eight-image records above describe the earlier preparation state.

Validation performed:

- Skill creator `quick_validate.py` passed for all four added/revised entrypoints, using the existing temporary Python validation environment with PyYAML. The initial system-Python attempt lacked PyYAML; no project dependency was added.
- 116 local Markdown targets in the changed skills and integration documents resolved. All ten reference files matched their manifest SHA-256 values. Updated skill file counts/tree hashes were recorded in the lock.
- Chromium loaded all five atlas images and showed no horizontal document overflow at 1440, 390 and 320 CSS pixels. Keyboard adjustment reached each of four sliders' maximum values and changed its corresponding SVG attribute; reset restored all starting values.
- Inspected rendered reference comparisons, opening diagrams and material specimens; changed mobile comparisons to stack vertically so their images remain legible. Paper noise sits behind specimen lettering. Seven saved captures live beside the atlas; working browser captures are under `output/playwright/`.
- The initial browser request for `/favicon.ico` returned 404; the atlas now supplies a data favicon. No external runtime resources are needed by the atlas. Linked primary sources are explanatory references, not runtime dependencies.

These checks cover skill structure, local references and the teaching atlas. They are not an independent skill-effectiveness evaluation, cross-browser validation, WCAG conformance or proof of improved portfolio design. No application code, new portfolio prototype or deployment was part of this revision. The ten rejected experiments remain removed.
