import localFont from "next/font/local";

export const readingFont = localFont({
  src: [
    {
      path: "./source-serif-4-normal.woff2",
      weight: "200 900",
      style: "normal",
    },
    {
      path: "./source-serif-4-italic.woff2",
      weight: "200 900",
      style: "italic",
    },
  ],
  variable: "--font-source-serif",
  display: "swap",
  fallback: ["Georgia", "Times New Roman"],
  preload: true,
});

export const groteskFont = localFont({
  src: [
    { path: "./archivo-normal.woff2", weight: "100 900", style: "normal" },
    { path: "./archivo-italic.woff2", weight: "100 900", style: "italic" },
  ],
  variable: "--font-archivo",
  display: "swap",
  fallback: ["Arial", "Helvetica"],
  declarations: [{ prop: "font-stretch", value: "62% 125%" }],
  preload: true,
});

export const posterFont = localFont({
  src: "./anton-normal.woff2",
  weight: "400",
  style: "normal",
  variable: "--font-anton",
  display: "swap",
  fallback: ["Arial Narrow", "Arial"],
  preload: false,
});
