---
name: retro-print-effects
description: Design and implement controlled paper, ink, halftone, registration and scan-like treatments for this portfolio's editorial graphics. Use for retro distortion or printed material character, while preserving original photographs and readable UI; not for generic VHS or glitch styling.
---

# Make the material explain the image

Start with the actual reference and the surface being represented. Read [material recipes](references/materials.md) and inspect the live [material lab](../../../docs/research/visual-atlas/index.html#materials), including its clean/effected pairs. These are controlled specimens, not portfolio examples or historically authenticated printing simulations.

Distinguish the causes: paper variation belongs to the substrate; ink gain changes printed edges; registration shifts separate ink plates; halftone changes how tone is represented; scanning can add blur, uneven illumination or compression. They are not interchangeable synonyms for “retro.” The supplied JPEGs cannot prove a printing process.

Choose the minimum treatment that supports the composition. State its target layer and visible purpose. A newspaper drawing, green catalogue scene and glossy blue product montage do not share one sepia/noise preset. Do not add VHS tracking, CRT scanlines, RGB glitch or animated noise just because a reference contains vintage electronics.

## Layer contract

- Keep the page background, original media, authored editorial artwork, live text and controls separate.
- Owner photographs and supplied music artwork keep their original color/rendering, with no grain overlays, distortions or hover scaling. Put paper around them. If treatment is desired, use separately authored editorial art or obtain a specific change to the preservation brief.
- Print effects may alter authored display artwork, illustration, rules or paper. Body copy, links, captions and focus rings remain crisp and readable. Display artwork still needs an accessible text equivalent; decorative duplicate plates must not repeat in the accessibility tree.
- Use bounded local effects, stable seeds, static rendering and no pointer interception. Avoid a full-viewport blend/filter stack. Effects must not be required to read or navigate.

## Build and tune

Start from a clean composition. Introduce one mechanism, compare at final display size, then decide whether another is justified. Use the recipe ranges as experiments, not required tokens. Store a small raster texture if that is cheaper and visually equivalent; CSS/SVG is not automatically faster. Use SVG filters only on the limited authored target, with sufficient filter bounds to prevent clipped edges.

For implementation, use the atlas's SVG filter definitions and paired specimens as a small executable reference. Its paper swatch, ink edge and registration controls are independent; the dot specimen is explicitly a graphic screen, **not** a photo-to-halftone conversion. Read the recipe before applying it elsewhere.

Inspect at 100%, thumbnail size, narrow width and enlarged text. Compare effects on/off: shape, hierarchy and image intent must survive. Check that texture does not read as dirty compression, misregistration does not become double vision, and dark imagery retains detail. Check other browsers if the treatment is shipped; the atlas's Chromium check alone is not cross-browser evidence.

Return the chosen mechanism, layer, parameters, rendered comparison and any unresolved asset or rendering limitation. A build passing, an effect existing or a scan looking old does not establish good visual direction. Use [japanese-publication-layout](../japanese-publication-layout/SKILL.md) for the image/page relationship that the treatment supports.
