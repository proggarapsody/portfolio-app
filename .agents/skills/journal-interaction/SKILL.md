---
name: journal-interaction
description: Specify or implement the portfolio's cover-to-contents navigation, section entry feedback and reading transitions. Use for page movement, hover/focus/touch states, browser history or reduced-motion behavior.
---

# Journal interaction

Read [the route model](../../../ARCHITECTURE.md) and [motion direction](../../../DESIGN.md). [Visual connections](../../../docs/research/VISUAL-CONNECTIONS.md) distinguish static reference evidence from proposed motion. For source/tool alternatives, consult [the synthesis](../../../docs/research/SYNTHESIS.md).

Keep cover → contents → section → work as the curated reading journey. Maintain direct engineering access and stable work URLs. Previous/next and contents links supplement native navigation; swipe or animation must not be the only way forward.

Start with native links and server-rendered content. Add a small client boundary only for demonstrated interaction. Preserve browser back/forward, useful link labels and predictable focus after navigation. Do not replace readable routes with an opaque canvas, carousel state or client-only history.

For each section entry specify idle, hover, keyboard focus, touch activation and reduced-motion behavior. Candidate feedback includes an ink/accent change, rule extension, or slight displacement of surrounding furniture. Select by the composition; none is compulsory. Hover preview and page curl remain optional, not requirements from the photographs.

Give keyboard focus feedback independent of hover. One touch tap activates the destination. Reduced motion removes spatial/page-turn effects while leaving state feedback and navigation immediate. Do not apply moving grain, hue changes, blur or scaling to original photos.

Any transition must leave content/destinations accessible without animation or JavaScript enhancements. Check framework support before choosing view transitions. Use CSS for modest effects; GSAP, Motion, WebGL and WebAudio are not default dependencies. Music plays only after an explicit listening action.

Return a state/route specification or implementation plus meaningful journey evidence. When an application exists, verify direct URLs, cover/contents entry, back/forward, keyboard, touch and reduced motion at narrow/wide widths. Browser exercises establish behavior; they do not alone establish field performance or WCAG conformance.
