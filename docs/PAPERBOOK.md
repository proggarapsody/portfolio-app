# Paper studies

This branch implements the owner's 12 October request for six original reference compositions as full-screen React/HTML/CSS pages. It is an interactive reference study, not the owner's published portfolio. The explicit reconstruction request supersedes the earlier inspiration-only restriction for this study. No deployment is made; indexing remains disabled.

## Composition and graphics

Each reference has a separate page component and scoped CSS under `src/components/pages` and `src/styles/pages`. All page headlines, brand wordmarks, captions, prices and columns are live text through the shared Typography component. English text replaces Japanese while retaining the original hierarchy and geometric masses. The source portrait ratios are fitted to the viewport over an enlarged, heavily blurred duplicate of the current poster; there is no surrounding book frame or scan used as the page background.

Photographic/illustrated graphics are clipped from the supplied references. Lettering physically on pictured devices remains part of the photograph. Printed page copy is excluded from crops. Some graphic reconstruction is required where source copy overlaps photos:

- AKIRA: crater illustration only, source rectangle `(26,220,461,335)`.
- Canon Tele: alpha-masked portrait `(30,85,361,570)`, plus separate bottom camera `(15,539,143,81)`.
- Seiko: wave/watch montage `(0,55,736,670)` with its printed callout replaced by feathered source-ocean patches; two silhouette-masked analog watch crops.
- Roland: studio photograph between y38 and y543, upper-left photo extension, and separate reel crop. Logo and bottom copy are live SVG/type.
- Sony: masked recorder/hand `(128,296,446,797)`. Printed copy over the lower forearm is replaced with a feathered clean source-skin sample.
- Canon Demi: eyes `(34,30,684,388)` and a transparent hand/camera silhouette, excluding the adjacent Japanese headline.

Small text-free source paper samples provide paper texture separately from the photographs. The six entire scans are not shipped in public application assets. Existing originals remain under `docs/references`; Canon Tele is added there as reference 11. No imagery is presented as owner work. These studies do not alter the portfolio's approved content/route model.

## Shared design system

`src/styles/tokens.css` contains all palette, font, weight, size, leading, tracking, spacing, rules and motion roles. The polymorphic `Typography` component supports display/title/body/label/micro/number variants and shared type overrides for accurately positioned page-specific type. Page palettes and layouts draw on these shared styles rather than isolated font/color declarations.

`src/styles/materials.css` provides reusable source paper surfaces and a bounded, seeded ink-edge distortion for live display type. Paper grain is normalized to remove repeating illumination seams; photographic asset files are retained; the subsequently requested optical capture style filters the entire rendered print surface. `src/styles/fullscreen.css` defines the full-screen canvas, reader controls, index, focus and reduced-motion rules. Scoped page styles contain subject-specific effects: seismic impact, camera exposure, ocean reflection, reel/signal, recording/tape and lens iris. Effects have no painted overlay in static mode. No new runtime dependency or animation library is added.

## Reading and review

Run `npm run dev`. `/` opens AKIRA; `/?page=seiko` opens that composition directly. Valid IDs are `akira`, `canon-tele`, `seiko`, `roland`, `sony`, and `canon-demi`. Previous/next and index entries use native links and preserve browser history. Previous/next remain usable without JavaScript; opening the enhanced modal index requires JavaScript. Page navigation is immediate; the subsequently requested camera treatment replaces the earlier 3D page turn. Wide landscape screens put controls in the outer margin; other viewports reserve space below the composition. The modal index traps focus, closes with Escape and restores focus to its opener. Page navigation focuses the new heading. Motion selections remain in the shareable URL.

For static review add `&motion=off`. Motion off and OS reduced-motion preferences suppress animations. Hover and keyboard/click focus activate subject effects; no audio plays. Original lettering and English lettering have different shapes, so the result should be judged as a faithful layout reconstruction, not an exact pixel identity. The original photo silhouettes, scales, source ratios and layout landmarks are retained; bitmap cleanup and translated type introduce visible differences.

Browser comparison artifacts are saved under ignored `output/playwright`. Static source/render pairs cover all six pages. The existing production smoke checks cover all six routes, index, history, motion controls, viewport overflow and automated accessibility in desktop/mobile Chromium. These checks do not establish WCAG conformance or field performance. No deployment or publishing automation is configured.

## Whole-surface camera treatment

The owner requested stronger retro styling and camera-like distortion across the whole surface. The default view now applies a proportional radial lens displacement, optical softness, uneven exposure, vignette and film grain to the entire composition. Reader controls remain outside the photographic surface. This specific request authorizes filtering the reference photographs as part of the captured page; it does not change preservation rules for future owner photography.

The lens map and stable grain tile are reproducible with `node scripts/prepare-camera-surface.mjs`. The lens field is shared across all pages and scales with the printed surface, so mobile does not receive a fixed oversized displacement. Blue/green pages use their own shadow roles. Motion-on adds shifting film grain, subpixel film-gate weave, slow exposure variation and slight lens breathing. Motion-off and OS reduced motion freeze both CSS and lens motion. No 3D page effect or navigation delay remains. `&surface=clean` disables the camera treatment for comparison of the underlying layout while retaining printed lettering; `motion=off` stops subject and capture motion independently.

## Poster presentation

The surrounding paper presentation was removed on request. The foreground is the live poster with its original printed layout borders; there is no added paper frame, stacked-page edge or 3D turn. Behind it, a decorative DOM duplicate of the current poster is enlarged and heavily blurred to fill the viewport. It contains the same graphics and palette, not a pasted reference scan. The duplicate has IDs removed, is inert and aria-hidden, and has all motion and ink/camera filters disabled. Only the foreground participates in reading, focus and interactions.
