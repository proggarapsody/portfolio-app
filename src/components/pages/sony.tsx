import { Typography } from "@/components/typography";

export function SonyPage() {
  return (
    <section
      className="full-page sony-page"
      id="sony"
      aria-label="Sony Memo cassette recorder — sound hunting"
    >
      <div className="composition sony-composition">
        <header className="sony-masthead">
          <Typography as="p" variant="micro" className="sony-tagline">
            A Japanese name. A worldwide mark.
          </Typography>
          <Typography as="p" variant="display" className="sony-wordmark">
            SONY
            <Typography variant="micro" className="sony-registered">
              ®
            </Typography>
          </Typography>
        </header>
        <Typography as="h1" variant="title" className="sony-headline">
          <Typography
            as="span"
            variant="title"
            className="sony-heading-line sony-hunting"
          >
            Sound hunting
          </Typography>
          <Typography as="span" variant="title" className="sony-heading-line">
            Record anything, anywhere
          </Typography>
          <Typography
            as="span"
            variant="title"
            className="sony-heading-line sony-play"
          >
            for PLAY — no separate mic needed
          </Typography>
        </Typography>
        <button
          type="button"
          className="sony-subject"
          aria-label="Set the Sony Memo speaker and cassette in motion"
        >
          {/* SVG contour isolates the recorder and hand. Below source y854, a clean
              skin crop replaces printed copy on the forearm; no page text is baked in. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/graphics/sony-recorder-hand.webp"
            width="446"
            height="797"
            alt="A hand holding a Sony Memo cassette recorder diagonally, its silver face and round speaker turned forward"
          />
          <span className="sony-speaker-pulse" aria-hidden="true" />
          <span className="sony-tape-motion" aria-hidden="true" />
        </button>
        <Typography as="p" variant="title" className="sony-release">
          New release
        </Typography>
        <div className="sony-copy sony-copy-left">
          <Typography as="p" variant="body">
            Capture sound with the feeling of taking a photograph. A new PLAY
            machine for the pleasure of listening. Choose your angle freely.
            Press the lever and pull the trigger.
          </Typography>
        </div>
        <div className="sony-copy sony-copy-middle">
          <Typography as="p" variant="body">
            Catch sound at the instant it happens. Low wind and handling noise.
            A compact recorder, ready for the sounds worth keeping.
          </Typography>
          <Typography as="p" variant="micro" className="sony-features">
            • Built-in condenser microphone
            <br />• Low wind and handling noise
            <br />• High-quality recording and playback
            <br />• Record, play and automatic level control
          </Typography>
        </div>
        <div className="sony-product">
          <div className="sony-product-box">
            <Typography as="p" variant="display" className="sony-product-brand">
              SONY
              <Typography variant="micro" className="sony-product-registered">
                ®
              </Typography>
            </Typography>
            <Typography as="p" variant="label" className="sony-product-kind">
              CASSETTE RECORDER
            </Typography>
            <Typography as="p" variant="label" className="sony-product-name">
              MEMO MACHINE
            </Typography>
          </div>
          <Typography as="p" variant="display" className="sony-memo">
            Memo
          </Typography>
          <Typography as="p" variant="number" className="sony-price">
            ¥25,300
          </Typography>
          <Typography as="p" variant="micro" className="sony-accessories">
            Case ¥2,900 · AC adaptor ¥2,400 · Batteries ¥600
            <br />
            Earphone ¥330 · Remote control ¥600
          </Typography>
        </div>
        <footer className="sony-footer">
          <Typography as="p" variant="label" className="sony-service-mark">
            SONY
            <br />
            SONY
            <br />
            SONY
          </Typography>
          <div className="sony-service-copy">
            <Typography as="p" variant="micro">
              For Sony products, accessories and service, ask your Sony dealer.
            </Typography>
            <Typography as="p" variant="micro">
              Sony Memo · Portable cassette recorder · Original reference price
              · © 1970 SONY
            </Typography>
          </div>
        </footer>
      </div>
    </section>
  );
}
