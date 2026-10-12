import Image from "next/image";
import { Typography } from "@/components/typography";

const columns = [
  "A small camera, a new way to see. Keep a Demi close at hand and take it wherever the day leads.",
  "A glance. A smile. A moment in the street. The world is full of pictures waiting to be taken.",
  "Slip it into your pocket. Bring it out when something catches your eye. Photography feels natural.",
  "Light and compact, with a beautifully simple form. A camera made to travel with you every day.",
  "The half-frame format makes room for more memories on a single roll of film.",
  "A 28 mm f/2.8 Canon lens brings the scene into focus. Fine detail, from a remarkably small camera.",
  "Set the exposure. Frame the picture. Release the shutter. Let the moment become a photograph.",
  "For days out, journeys away and the familiar places you see with fresh eyes.",
  "Take a Demi from your pocket. There is always something worth remembering.",
  "Canon Demi. The little camera with a wider world in view.",
];

export function CanonDemiPage() {
  return (
    <section
      className="full-page canon-demi-page"
      id="canon-demi"
      aria-label="Canon Demi pocket camera advertisement"
    >
      <div className="composition canon-demi-composition">
        <div className="canon-demi-frame" aria-hidden="true" />
        <Image
          loading="eager"
          unoptimized
          className="canon-demi-eyes"
          src="/graphics/canon-demi-eyes.webp"
          width="684"
          height="388"
          alt="Close-up of a woman's eyes beneath her fringe"
        />
        <Image
          loading="eager"
          unoptimized
          className="canon-demi-camera"
          src="/graphics/canon-demi-camera-hand.png"
          width="550"
          height="379"
          alt="A hand holding a Canon Demi half-frame camera"
        />
        <Typography as="h1" variant="title" className="canon-demi-headline">
          Take a Demi from your pocket.
        </Typography>
        <button
          className="canon-demi-lens"
          type="button"
          aria-label="Close the Canon Demi lens iris"
        >
          <span className="canon-demi-iris" aria-hidden="true" />
        </button>
        <footer className="canon-demi-footer">
          <div className="canon-demi-maker">
            <Typography as="p" variant="label">
              CANON CAMERA CO., INC.
            </Typography>
            <Typography as="p" variant="micro">
              Precision cameras and optical instruments.
            </Typography>
            <Typography as="p" variant="micro">
              A compact half-frame camera for everyday pictures.
            </Typography>
          </div>
          <div className="canon-demi-brand">
            <Typography as="p" variant="display" className="canon-demi-canon">
              Canon
            </Typography>
            <Typography
              as="p"
              variant="display"
              className="canon-demi-name print-ink"
            >
              DEMI
            </Typography>
            <Typography as="p" variant="number" className="canon-demi-price">
              Retail ¥10,800
            </Typography>
            <Typography
              as="p"
              variant="micro"
              className="canon-demi-accessories"
            >
              Case ¥1,000 · Wrist strap ¥300
            </Typography>
          </div>
          <div className="canon-demi-columns">
            {columns.map((copy) => (
              <Typography as="p" variant="micro" key={copy}>
                {copy}
              </Typography>
            ))}
          </div>
        </footer>
      </div>
    </section>
  );
}
