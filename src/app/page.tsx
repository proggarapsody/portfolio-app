import { FullscreenBook } from "@/components/fullscreen-book";
import { AkiraPage } from "@/components/pages/akira";
import { CanonTelePage } from "@/components/pages/canon-tele";
import { SeikoPage } from "@/components/pages/seiko";
import { RolandPage } from "@/components/pages/roland";
import { SonyPage } from "@/components/pages/sony";
import { CanonDemiPage } from "@/components/pages/canon-demi";
import { plates } from "@/lib/plates";

export default async function Home({ searchParams }: PageProps<"/">) {
  const query = await searchParams;
  const found = plates.findIndex((plate) => plate.id === query.page);
  const index = found < 0 ? 0 : found;
  const pages = [
    <AkiraPage key="akira" />,
    <CanonTelePage key="canon-tele" />,
    <SeikoPage key="seiko" />,
    <RolandPage key="roland" />,
    <SonyPage key="sony" />,
    <CanonDemiPage key="canon-demi" />,
  ];
  return (
    <FullscreenBook
      key={`${index}-${query.motion}`}
      index={index}
      initialMotion={query.motion !== "off"}
      cameraSurface={query.surface !== "clean"}
    >
      {pages[index] ?? pages[0]}
    </FullscreenBook>
  );
}
