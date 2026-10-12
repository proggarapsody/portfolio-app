# Six poster studies: completion evidence

The requested work is a six-page reference reconstruction, with English replacements for Japanese text. This is not the broader portfolio publication implementation.

| Requirement | Current evidence |
| --- | --- |
| New branch from main | `feature/animated-paperbook`; merge-base and main both `7aa297c4d11a3b50b35adff57eb2eab7285ef821` at completion |
| Separate live HTML page for every reference | Six components in `src/components/pages`; source illustration/photo crops in `public/graphics`; no full scan used as a page |
| Shared typography, palette, spacing and reusable distortion | `Typography`, `src/styles/tokens.css`, `materials.css`, `PrintEffects`; page styles refer to shared font/color roles |
| Typography appropriate to references | Locally served Source Serif 4, Archivo and Anton; live specimens at `/typography`; font provenance in `src/fonts/manifest.json` |
| Static composition inspected against sources | All six desktop renders and mobile renders inspected; photographic silhouettes, image bounds, headline masses, source aspect ratios and printed borders retained |
| Topic-specific hover motion | Browser runtime observed seismic/shock, camera exposure, water/glints, reel/panel signal, speaker/tape and iris animations on the corresponding page |
| Retro live ink and whole-surface camera capture | Bounded ink coverage/edge filters; proportional optical displacement, grain, vignette and exposure treatment |
| Animated grain and lens distortion, no 3D book turn | Runtime observed gate weave, grain and exposure CSS motion and changing lens scale; no navigation delay or 3D transform |
| Poster presentation with blurred enlarged backdrop | Runtime backdrop blur `80px`; inert decorative duplicate, stripped IDs and zero backdrop animations; no added outer paper frame |
| Motion off and reduced motion | Runtime observed zero running foreground CSS animations; lens scale returns to stable `0.075` under both settings |
| Reader navigation and accessibility | Desktop/mobile production tests cover six pages, modal index, Escape/focus restoration, history, motion URL and axe checks |
| Build and source checks | `npm run check` and `npm run test:e2e` |

Static fidelity is visually assessed, not certified as exact pixel identity. English lettering changes glyph shapes and copy lengths, cropped graphics have cleanup differences, and the requested optical capture deliberately distorts the finished poster. The clean comparison is available with `surface=clean&motion=off`; default capture mode is available with `motion=off` before subject animation.

Generated screenshots and browser probe scripts are local verification artifacts under ignored `output/playwright/`. No deployment, publication or push is part of this delivery.
