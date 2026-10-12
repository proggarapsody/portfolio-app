# Type on paper

The reference pages now use a small role-based type system instead of generic Georgia/Arial. The live specimen is at `/typography`.

| Family         | Role                                | Use                                                                                                                                                    |
| -------------- | ----------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Source Serif 4 | Editorial reading and serif display | Stories, captions, liner notes, Sony headings; Roman and real italic. Optical sizing follows the rendered size.                                        |
| Archivo        | Commercial/technical grotesk        | Equipment labels, model names, prices, navigation and figures. Native width axis (62–125%) and weight axis (100–900) supply compact and wide settings. |
| Anton          | Heavy poster display                | AKIRA-scale lettering only. A naturally condensed silhouette; use its actual 400 weight, not synthetic bold.                                           |

Source Serif gives the reading voice warmth and contrast; Archivo connects the advertisements to precise equipment typography; Anton carries the unusually compressed poster mass. These are visual adaptations, not claims to identify the historical typefaces in the scans. English word lengths still require page-specific size, tracking and line decisions.

All faces are locally served WOFF2 through `next/font/local`. Roman/italic are real files; families, weights, width roles, sizes, leading and tracking remain shared tokens and Typography variants. There are no runtime requests to Google Fonts. The extra poster face is 12 KB and is not preloaded across every page. The font asset manifest records exact download URLs, sizes and SHA-256 digests; SIL Open Font License texts are retained under `src/fonts`.

## Primary sources

- [Source Serif 4 official specimen](https://adobe-fonts.github.io/source-serif/) and [Adobe source repository](https://github.com/adobe-fonts/source-serif).
- [Archivo by Omnibus-Type](https://www.omnibus-type.com/fonts/archivo/) and [Google Fonts metadata](https://github.com/google/fonts/blob/main/ofl/archivo/METADATA.pb).
- [Anton project](https://github.com/googlefonts/AntonFont) and [Google Fonts description](https://github.com/google/fonts/blob/main/ofl/anton/DESCRIPTION.en_us.html).

## Boundaries

Do not turn reading text into compressed capitals or use the poster face for the reader controls. Brand recreations remain scoped to the reference studies. Original photographs and device lettering are not filtered or re-typeset. Test a font in the composition, not just in a specimen: fitting the footprint and ink mass matters as much as the family name.

## Ink treatment

Printed display text uses a bounded SVG filter with seeded edge displacement and sparse alpha voids. AKIRA has stronger newsprint ink; other pages use a gentler letterpress-like treatment. Small text uses very low displacement and tonal variation. Shared classes target live Typography descendants only; photographs stay outside the text filters, while the separately requested camera treatment covers the entire poster; reader controls remain unfiltered. Nested lettering is filtered once. The specimen includes clean/printed text side by side. These are controlled digital treatments, not a claim about the original printing process.
