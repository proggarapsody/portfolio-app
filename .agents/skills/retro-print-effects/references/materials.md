# Material recipes and limits

The [atlas material lab](../../../../docs/research/visual-atlas/index.html#materials) contains working source and visual specimens. Values below are project-authored starting ranges at approximately final CSS-pixel scale, not recovered historical ink specifications. Resize changes their appearance: evaluate the actual output, not only a zoomed screenshot.

| Mechanism | What it should visibly do | Starting experiment | Wrong result / adjustment |
| --- | --- | --- | --- |
| Paper variation | Quiet, uneven substrate; image regions and live reading text remain unobscured | Combine low-frequency tonal variation with a fine static grain, around 2–6% opacity on a paper-only layer. Keep a clean comparison. | Dark speckles, blanket yellow wash or visible tiling: reduce contrast, increase tile size, or omit. A warm color alone is not paper. |
| Ink edge / gain | Slightly imperfect edge on a bold authored title or drawing, with solid interior | SVG `feTurbulence` with stable seed → `feDisplacementMap`, roughly 0.3–1 CSS px scale. Optional `feMorphology` dilation about 0.1–0.3 units on large artwork. | Wavy lettering, closed counters, furry edges: reduce or remove. Do not apply to reading copy. |
| Plate registration | A small directional offset between two intentionally separate colored shapes | Offset an authored spot-color plate 0.3–0.8 CSS px relative to a key plate. Keep its direction consistent locally. | RGB glow or all glyphs duplicated: this is no longer a restrained print cue. Use plate masks, not three shadows on the whole page. |
| Graphic screen / halftone | Tone carried by dot coverage or spacing | For new graphic art, begin with a 2–4px dot pitch; adjust dots to the intended display size. Dot radius/coverage must follow tone for an actual halftone conversion. | A repeated uniform dot overlay is only a screen pattern. Label it honestly; it cannot reconstruct tonal separation. Avoid moiré from rescaling. |
| Tonal compression | Reduced tonal range while focal forms and detail remain intelligible | In a separately authored illustration, use a limited ink palette and deliberate tonal masses; inspect highlights and shadows. | Crushed black rectangle or washed-out grayscale photo: restore detail or choose a better asset. No automatic filter on owner photography. |
| Scan character | Very mild local softness/illumination variation on a purposely authored facsimile | Prefer a controlled pre-rendered graphic when a facsimile is explicitly needed; keep UI above it. | Dust/scratches/folds everywhere become fabricated history. Supplied scans already contain artifacts—never “age” them again for the atlas. |

## Executable mechanisms

In the atlas HTML, `ink-edge` uses `feTurbulence` as a displacement field and `feDisplacementMap` on `SourceGraphic`. The scale is small and the target is bounded SVG artwork. `paper-grain` converts noise to grayscale; its low-opacity rectangle sits only inside the paper specimen. Registration is two separate graphic plates with a slight translation. The control sliders modify these independently and zero restores a clean effect target.

SVG user units are not necessarily CSS pixels. If a viewBox is displayed at half its native width, its displacements shrink too. Tune the final rendered size. Give filters a padded region; clipping the displaced glyph edge is a bug, not distress. Multiple instances need unique IDs or shared definitions to prevent collisions in an application.

A CSS radial-gradient or SVG pattern can make a regular dot screen; it does not sample the underlying image luminance. For real halftone art, create a separate derivative from authorized source art with a tone-dependent dot process, retain the clean master, and visually inspect the chosen output dimensions. This skill does not authorize modifying owner photos or installing a particular graphics dependency.

## Reference-specific restraint

- **AKIRA / cinema sheet:** dense type and an illustration/figure carry the force. Modest uneven ink or paper may support them. A distressed border cannot substitute for the type/image arrangement.
- **Canon Demi:** tight photographic pairing and a shared frame carry the encounter. Do not exaggerate the scan grain until eyes/camera lose detail. For the portfolio, preserve the actual photo and borrow the layout relationship.
- **Roland:** dark detail, perspective and small light/orange lettering matter. Grain that collapses midtones defeats the reference.
- **Seiko:** saturated blue, wave structure, bright metal and staged scale matter. Brown paper, random scratches or newspaper dots on every element weaken that character.

## Implementation boundaries

Keep effects static and subordinate to semantic content. If a decorative SVG repeats a live heading, mark it `aria-hidden="true"` and keep the real heading readable. If the SVG itself conveys unique content, provide a useful accessible name and adjacent explanation. Pointer events must pass through decorative overlays; focus styles must be above them.

Avoid shipping expensive fullscreen turbulence by habit. Compare rendering and scrolling with the effect enabled/disabled on target devices before selecting runtime filters versus pre-rendered textures. Disable or simplify effects that damage reading at small scale; reduced-motion preference does not excuse flashing or moving grain elsewhere.

## Primary technical sources

- [MDN feTurbulence](https://developer.mozilla.org/en-US/docs/Web/SVG/Reference/Element/feTurbulence): procedural noise input. A noise field alone is not physical paper.
- [MDN feDisplacementMap](https://developer.mozilla.org/en-US/docs/Web/SVG/Reference/Element/feDisplacementMap): displacement of one input according to channels of another. The parameter choices here are our visual experiments.
- [MDN feMorphology](https://developer.mozilla.org/en-US/docs/Web/SVG/Reference/Element/feMorphology): erosion/dilation of graphic regions; not a claim of historically accurate ink gain.

Observed appearance, chosen simulation and established provenance are three separate statements. Do not identify letterpress, offset, risograph, paper stock or publication date from these JPEGs without additional evidence.

## Direct visual preview

Inspect the [saved material lab capture](../../../../docs/research/visual-atlas/atlas-materials.png) for the initial specimens. For parameter changes, open the live HTML. Subtle differences are intentional at these defaults; exaggerating a control helps identify its mechanism but is not a recommended final setting.
