import Image from "next/image";

import { Typography } from "@/components/typography";

export function RolandPage() {
  return (
    <section
      className="full-page roland-page"
      id="roland"
      aria-label="Roland electronic musical instruments catalogue"
    >
      <div className="composition roland-composition">
        <Image
          loading="eager"
          unoptimized
          className="roland-photo-header"
          src="/graphics/roland-header-clean.png"
          alt=""
          width="434"
          height="38"
        />
        <Image
          loading="eager"
          unoptimized
          className="roland-studio"
          src="/graphics/roland-studio.jpg"
          alt="A tape recorder in the foreground of a dark green studio, with a wall of modular synthesizers, a keyboard and headphones"
          width="434"
          height="505"
        />
        <Image
          loading="eager"
          unoptimized
          className="roland-photo-footer"
          src="/graphics/roland-footer-clean.png"
          alt=""
          width="434"
          height="41"
        />
        <header className="roland-brand">
          <svg
            className="roland-symbol"
            viewBox="0 0 56 32"
            fill="none"
            aria-hidden="true"
          >
            <path d="M3 30V3h44c9 0 9 12 0 12H13v10h40M8 30V8h38c3 0 3 3 0 3H8M53 30H18V20h29c10 0 10-17 0-17" />
          </svg>
          <Typography as="h1" variant="display" className="roland-wordmark">
            Roland
          </Typography>
        </header>
        <button
          type="button"
          className="roland-studio-control"
          aria-label="Explore the recorder reel and synthesizer indicator lights"
        >
          <span className="roland-reel-window" aria-hidden="true">
            <span className="roland-reel-perspective">
              <Image
                loading="eager"
                unoptimized
                className="roland-reel-turn"
                src="/graphics/roland-reel.jpg"
                alt=""
                width="89"
                height="235"
              />
            </span>
          </span>
          <span className="roland-panel-window" aria-hidden="true">
            <span className="roland-panel-light" />
          </span>
        </button>
        <footer className="roland-catalogue">
          <Typography as="p" variant="micro" className="roland-volume">
            Catalogue&nbsp; Vol.1
          </Typography>
          <Typography as="p" variant="label" className="roland-category">
            Electronic Musical Instruments
          </Typography>
        </footer>
      </div>
    </section>
  );
}
