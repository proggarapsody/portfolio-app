import { readingFont, groteskFont, posterFont } from "@/fonts";
import type { Metadata } from "next";
import "./globals.css";
import { PrintEffects } from "@/components/print-effects";

export const metadata: Metadata = {
  title: "Paper studies — an interactive reference book",
  description:
    "Six full-screen HTML print compositions with live English typography, clipped reference graphics and subject-led motion.",
  robots: { index: false, follow: false },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${readingFont.variable} ${groteskFont.variable} ${posterFont.variable}`}
    >
      <body>
        <PrintEffects />
        {children}
      </body>
    </html>
  );
}
