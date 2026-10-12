# Portfolio design direction

Use editorial composition to connect engineering and creative work. The supplied references combine an early newspaper layout with later consumer-electronics advertising; the result is an intentional interpretation, not a claim to reproduce one historical period.

## Visual hierarchy

A consistent masthead, issue identifier/date, strong feature headline, hero photograph, captions, and clear section navigation establish the publication. Give important work room; dense reference typography is a compositional cue, not a requirement for tiny body text.

Use a restrained serif-led editorial hierarchy with a complementary sans serif for navigation and metadata. Select licensed Latin fonts during implementation and verify their actual rendering. Avoid loading Japanese font families for an English-only site. Do not prescribe exact fonts or token values before seeing a rendered composition.

Build the layout from columns, rules, intentional whitespace, varied headline scale, image crops, and captions. The contents page should have four image-led section entries without becoming a uniform dashboard of rounded cards. Engineering content may use clear technical diagrams and code where useful without changing the entire site into a terminal.

## Palette and print treatment

Use the [seven palette families](docs/research/PALETTES.md): newsprint, ocean signal, studio amber, black catalogue, forest circuitry, warm interior and lab sheet. The [image observations](docs/research/image-evidence.md) and [cross-image connections](docs/research/VISUAL-CONNECTIONS.md) explain their different origins and layouts. A saturated or dark feature can carry an issue's atmosphere; paper with one accent is one option, not the universal template. Keep coherent palette roles, stable publication identity and measured text contrast. Observed JPEG colors and proposed web tokens are distinct; neither is final implementation approval.

Use subtle grain, ink variation, fine rules, and paper color in the page furniture. Do not place a grain/filter layer over photographs. An archive image's ageing is not a requirement to artificially distress every element. Effects must remain lightweight and must not obscure text or controls.

## Reference map

The copied images below are internal inspiration, outside the application's public assets. Their supplied labels are not independently verified dates or provenance. Do not publish these scans, brand marks, product copy, or people as the author's work.

| Reference                                                    | Borrow                                                                         | Avoid                                                                                   |
| ------------------------------------------------------------ | ------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------- |
| [Sony recorder](docs/references/01-sony-recorder.jpeg)       | Large headline, open paper field, hero image, small factual caption blocks     | Sony identity and replicated advertisement wording                                      |
| [Seiko wave](docs/references/02-seiko-wave.jpeg)             | Saturated editorial feature color, image dominance, inset hierarchy            | Applying blue treatment to the author's photographs                                     |
| [Walkman](docs/references/03-walkman.jpeg)                   | Strong masthead silhouette and clear hero-to-caption hierarchy                 | Treating this unverified image as historical evidence or a font to copy                 |
| [Modular controls](docs/references/04-modular-controls.jpeg) | Precise labels and small accent details where functional                       | A knob-based global navigation system                                                   |
| [Studio editorial](docs/references/05-studio-editorial.jpeg) | Large photographic block, full-width headline, narrow supporting columns       | Recreating the equipment or product advertisement                                       |
| [Roland](docs/references/06-roland.jpeg)                     | Dark feature-page mood and restrained contrasting accent                       | Imposing dark green filters on photography                                              |
| [Yamaha](docs/references/07-yamaha.jpeg)                     | Asymmetric photographic layout, controlled red accent, quiet information block | Decorative Japanese text or copied portrait artwork                                     |
| [Newspaper](docs/references/08-newspaper.jpeg)               | Masthead, typographic contrast, rules, sectional density, limited spot color   | Literal vertical English text, microscopic columns, historical claims from the filename |

## Navigation and motion

The default journey is cover → contents → section → individual work. Also provide direct entry to engineering and permanent content URLs. Include a clear route back to contents and the issue archive. Browser back/forward must work naturally.

Use native links as the navigation foundation. Explore brief ink/accent changes, rule movement, or a small positional shift for interactive section entries. If using page transitions, ensure navigation and focus remain predictable and content loads independently of the effect. Do not commit to a motion library before a real need appears.

Equivalent focus feedback must accompany hover feedback. Reduced motion should remove spatial/page-turn movement while keeping navigation immediate. On touch, a single tap activates a link; no hover simulation is required. Music begins only through an explicit play action.

## Mobile and accessibility

Reflow content vertically on small screens. Use horizontal editorial spreads only where they stay readable. At 320 CSS pixels and enlarged text, essential content must not require horizontal scrolling. Maintain semantic heading order, descriptive link labels, adequate target sizes, text alternatives, and clearly visible focus.

## Visual acceptance

Review an actual cover, four-entry contents page, engineering page, photo essay, music entry, and story at narrow and wide widths when implemented. Confirm original photo rendering, section discoverability, meaningful hover/focus feedback, reduced-motion behavior, and consistent issue identity. A source-code check alone cannot establish visual quality.

## Visual guidance revision — 12 October 2026

The ten prototype iterations were rejected by the owner and removed. Their technical checks do not establish visual quality. Future work must resolve the actual visual asset and image/type relationship before surface styling; palette variants of one hero layout are insufficient exploration.

Use [publication layout](.agents/skills/japanese-publication-layout/SKILL.md) for image selection, page frames, spreads and book/album rhythm; use [print effects](.agents/skills/retro-print-effects/SKILL.md) for material mechanisms. Inspect the [visual atlas](docs/research/visual-atlas/index.html): unchanged source scans, schematic composition readings, opening-sequence studies and interactive clean/effected specimens. These are internal teaching materials, not approved application designs.

The priority set is now 06 Roland, 02 Seiko, 08 cinema sheet, 09 Canon Demi and 10 AKIRA. The original eight reference IDs remain stable. New scans are internal only. Book and album structures are proposed adaptations; the ads do not establish a complete historical book or album design.

Serif-led reading does not require every display headline to be serif. A strong or condensed sans display may express a catalogue or announcement structure. Preserve readable English and meaningful density. Material effects may affect separately authored editorial illustrations and display graphics as well as page furniture; original owner photography and supplied music artwork remain unfiltered. Effects must support composition rather than compensate for missing or unsuitable visuals.
