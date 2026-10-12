import Image from "next/image";
import { Typography } from "@/components/typography";

export function SeikoPage() {
  return (
    <section
      className="full-page seiko-page"
      id="seiko"
      aria-label="Seiko SilverWave — a new wave of quartz"
    >
      <div className="composition seiko-composition">
        <Typography as="h1" variant="display" className="seiko-headline">
          A NEW WAVE OF QUARTZ
        </Typography>
        <button
          className="seiko-sea"
          type="button"
          aria-label="Bring the SilverWave ocean and silver reflections to life"
        >
          {/* Cropped photographic montage; its printed callout has been removed. */}
          <Image
            loading="eager"
            unoptimized
            width={736}
            height={670}
            className="seiko-montage"
            src="/graphics/seiko-ocean-watch.webp"
            alt="A silver Seiko digital watch rising out of a curling blue ocean wave"
          />
          <span className="seiko-foam" aria-hidden="true" />
          <span className="seiko-lcd-glint" aria-hidden="true" />
          <span className="seiko-steel-glint" aria-hidden="true" />
        </button>
        <div className="seiko-digital-note">
          <Typography as="p" variant="label" className="seiko-new">
            ★ DIGITAL. A NEW ARRIVAL.
          </Typography>
          <Typography as="p" variant="number" className="seiko-price">
            A DGL089　¥26,000
          </Typography>
          <Typography as="p" variant="micro" className="seiko-note">
            The precision of quartz. The spirit of the sea.
          </Typography>
        </div>
        <div className="seiko-poem">
          <Typography as="p" variant="body">
            The summer sun.
            <br />
            The deep blue night.
            <br />A ripple of silver.
            <br />
            <br />
            From the ocean
            <br />
            to the everyday.
            <br />
            <br />A watch for
            <br />a new wave.
          </Typography>
          <Typography as="p" variant="micro" className="seiko-smallprint">
            SILVERWAVE
            <br />
            QUARTZ COLLECTION
          </Typography>
        </div>
        <Image
          loading="eager"
          unoptimized
          width={184}
          height={294}
          className="seiko-analog seiko-diver"
          src="/graphics/seiko-diver.webp"
          alt="Silver bracelet watch with dark blue dial and red and blue bezel"
        />
        <Image
          loading="eager"
          unoptimized
          width={174}
          height={294}
          className="seiko-analog seiko-classic"
          src="/graphics/seiko-classic.webp"
          alt="Silver bracelet quartz watch with an ivory dial and day-date window"
        />
        <Typography
          as="p"
          variant="number"
          className="seiko-model seiko-model-diver"
        >
          B PHK061　¥38,000
        </Typography>
        <Typography
          as="p"
          variant="number"
          className="seiko-model seiko-model-classic"
        >
          C PGP050　¥30,000
        </Typography>
        <div className="seiko-copy">
          <Typography as="p" variant="label" className="seiko-sport">
            SPORTS WATER-RESISTANT WATCHES
          </Typography>
          <Typography as="p" variant="display" className="seiko-script">
            SilverWave
          </Typography>
          <Typography as="p" variant="micro" className="seiko-series">
            THE SILVERWAVE COLLECTION
          </Typography>
          <Typography as="p" variant="body" className="seiko-description">
            A new current in quartz timekeeping. Stainless steel, clear dials
            and a sporting spirit. Digital precision meets the familiar rhythm
            of hands. Three expressions of SilverWave, made for life beside the
            water.
          </Typography>
          <Typography as="p" variant="body" className="seiko-world">
            For the world of sport.
          </Typography>
          <Typography as="p" variant="display" className="seiko-wordmark">
            SEIKO
          </Typography>
        </div>
      </div>
    </section>
  );
}
