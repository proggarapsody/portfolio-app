import Link from "next/link";
import { Typography } from "@/components/typography";

export default function TypographyStudy() {
  return (
    <main className="type-study">
      <header className="type-study-header">
        <Typography variant="label">
          Paper studies / Type specimen 01
        </Typography>
        <Link href="/?page=akira">
          <Typography variant="label">Return to the pages ↗</Typography>
        </Link>
      </header>
      <Typography as="h1" variant="display" className="type-study-title">
        Type on paper.
      </Typography>
      <Typography as="p" variant="body" className="type-study-intro">
        Three families, each with a job. Editorial reading, forceful
        announcements, and precise equipment labels.
      </Typography>
      <section className="type-study-poster">
        <Typography as="h2" variant="label">
          01 / Anton · Poster lettering
        </Typography>
        <Typography
          as="p"
          variant="poster"
          className="specimen-poster print-ink"
        >
          NEO TOKYO
        </Typography>
        <Typography as="p" variant="body">
          Tall, dense capitals for the newspaper announcement. Keep them at
          display sizes; they earn their space through weight and silhouette.
        </Typography>
      </section>
      <section className="type-study-serif">
        <Typography as="h2" variant="label">
          02 / Source Serif 4 · Editorial voice
        </Typography>
        <Typography as="p" variant="display" className="specimen-serif-heading">
          A sound small enough to hold.
        </Typography>
        <Typography as="p" variant="title" className="specimen-italic">
          for PLAY — record the passing moment.
        </Typography>
        <div className="specimen-reading">
          <Typography as="p" variant="body">
            The hand is the scale. An angular recorder cuts across warm paper,
            carrying the promise of taking sound anywhere. The heading opens the
            page; the small print draws the eye closer. Optical sizing lets the
            same family work in both places.
          </Typography>
          <Typography as="p" variant="body">
            This is the reading voice for stories, captions and liner notes.
            Real italics can carry a quiet aside or a phrase from a song. The
            letterforms stay clear at smaller sizes, with enough contrast for a
            large editorial headline.
          </Typography>
        </div>
      </section>
      <section className="type-study-grotesk">
        <Typography as="h2" variant="label">
          03 / Archivo · Technical voice
        </Typography>
        <Typography as="p" variant="label" className="specimen-technical">
          Electronic Musical Instruments
        </Typography>
        <div className="specimen-widths">
          <Typography variant="label" className="specimen-narrow">
            QUARTZ / 78%
          </Typography>
          <Typography variant="label" className="specimen-wide">
            QUARTZ / 112%
          </Typography>
        </div>
        <Typography as="p" variant="number" className="specimen-figures">
          0123456789 / ¥25,300 / 10:08:59
        </Typography>
        <Typography as="p" variant="body">
          A compact grotesk for model names, labels, navigation and numbers. Use
          its native width axis to fit the composition; keep reading copy in the
          serif.
        </Typography>
      </section>
      <section className="type-study-ink" id="ink">
        <Typography as="h2" variant="label">
          Ink / Live lettering on paper
        </Typography>
        <div className="ink-comparison">
          <div>
            <Typography variant="micro">Clean type</Typography>
            <Typography as="p" variant="poster" className="specimen-ink">
              MEMO
            </Typography>
            <Typography as="p" variant="title">
              Sound hunting
            </Typography>
          </div>
          <div className="printed-type">
            <Typography variant="micro">Printed type</Typography>
            <Typography as="p" variant="poster" className="specimen-ink">
              MEMO
            </Typography>
            <Typography as="p" variant="title">
              Sound hunting
            </Typography>
          </div>
        </div>
        <Typography as="p" variant="body">
          Uneven ink edges and sparse gaps in coverage. Small reading type uses
          a gentler treatment; controls stay clean.
        </Typography>
      </section>
      <footer className="type-study-footer">
        <Typography variant="micro">
          Locally served WOFF2 · SIL Open Font License · Live text throughout
        </Typography>
      </footer>
    </main>
  );
}
