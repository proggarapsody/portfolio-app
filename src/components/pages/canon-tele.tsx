import Image from "next/image";
import { Typography } from "@/components/typography";

export function CanonTelePage() {
  return (
    <section
      className="full-page canon-tele-page"
      id="canon-tele"
      aria-label="Canon Autoboy TELE portrait advertisement"
    >
      <div className="composition canon-tele-composition">
        <header className="canon-tele-brand">
          <Typography as="p" variant="label" className="canon-tele-kicker">
            The Autoboy that brings you closer.
          </Typography>
          <Typography as="p" variant="display" className="canon-tele-canon">
            Canon
          </Typography>
          <Typography as="p" variant="display" className="canon-tele-autoboy">
            Autoboy
          </Typography>
          <Typography
            as="p"
            variant="label"
            className="canon-tele-wordmark-sub"
          >
            QUARTZ DATE
          </Typography>
          <Typography as="h1" variant="display" className="canon-tele-model">
            TELE
          </Typography>
        </header>
        {/* Only the photographic silhouette is retained from the supplied reference. */}
        <Image
          loading="eager"
          unoptimized
          width={361}
          height={570}
          className="canon-tele-portrait"
          src="/graphics/canon-tele-portrait.png"
          alt="Portrait of a man in a dark suit holding a Canon compact camera"
        />
        <Typography as="p" variant="display" className="canon-tele-headline">
          IT’S TELE.
        </Typography>
        <Typography as="p" variant="label" className="canon-tele-sidecopy">
          Powerful telephoto. A new camera from Canon.
        </Typography>
        <button
          type="button"
          className="canon-tele-shutter"
          aria-label="Look through the Canon camera lens"
        >
          <span className="canon-tele-lens-sweep" aria-hidden="true" />
        </button>
        <footer className="canon-tele-product">
          <Typography as="p" variant="label" className="canon-tele-tagline">
            Telephoto. The Canon way.
          </Typography>
          <Image
            loading="eager"
            unoptimized
            width={143}
            height={81}
            className="canon-tele-product-camera"
            src="/graphics/canon-tele-camera.png"
            alt="Canon Autoboy TELE camera"
          />
          <Typography as="p" variant="micro" className="canon-tele-price">
            Suggested retail price ¥58,800
          </Typography>
        </footer>
      </div>
    </section>
  );
}
