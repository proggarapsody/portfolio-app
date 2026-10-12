import Image from "next/image";
import { Typography } from "@/components/typography";

const reports = [
  {
    title: "A city erased",
    copy: "The skyline has disappeared. At the centre of the metropolis, a vast black sphere rises from fractured streets. The familiar city becomes a ring of rubble.",
  },
  {
    title: "Roads fall silent",
    copy: "Every route leads toward the same horizon. Bridges and avenues have become fragments. From above, the streets are tiny beside the immense dark sphere.",
  },
  {
    title: "Beyond the blast",
    copy: "A fictional dispatch from the world of AKIRA. The reports describe an illustrated event, not a real disaster. After the explosion, an immense silence.",
  },
  {
    title: "The black sphere",
    copy: "An unbroken curve interrupts thousands of lines. Dark against the pale ruined city, it is the still centre of a landscape that offers no comfortable distance.",
  },
  {
    title: "Emergency edition",
    copy: "A city is its people, their memories and the places they know. Here the architecture carries those absent lives. The crowded columns gather around the image.",
  },
  {
    title: "After the silence",
    copy: "Neo Tokyo's story continues. The city falls silent, the horizon disappears, and an ordinary morning becomes an impossible landscape. An emergency edition.",
  },
];

export function AkiraPage() {
  return (
    <section
      className="full-page akira-page"
      id="akira"
      aria-label="AKIRA newspaper"
    >
      <div className="composition akira-composition">
        <header className="akira-banner">
          <Typography
            as="h1"
            variant="display"
            className="akira-headline print-ink"
          >
            NEO TOKYO
          </Typography>
          <div className="akira-banner-detail">
            <Typography variant="label">UNKNOWN FORCE</Typography>
            <Typography variant="title">CITY IN RUINS!</Typography>
          </div>
        </header>
        <Typography as="p" variant="label" className="akira-subhead">
          A metropolis vanishes in a single instant
        </Typography>

        <figure
          className="akira-illustration"
          tabIndex={0}
          aria-label="Explore the illustrated blast crater"
        >
          <div className="akira-crater-window">
            <Image
              loading="eager"
              src="/graphics/akira-crater.webp"
              width={461}
              height={335}
              unoptimized
              alt="A vast black sphere above a devastated city, drawn in dense black and white lines."
              className="akira-crater"
            />
            <div className="akira-shock-ring" aria-hidden="true" />
          </div>
          <Typography as="figcaption" variant="micro" className="akira-caption">
            ▲ Neo Tokyo swallowed by a giant sphere · Illustration excerpt /
            AKIRA
          </Typography>
        </figure>

        <aside className="akira-dispatch">
          <Typography as="h2" variant="title" className="akira-dispatch-title">
            STATE OF EMERGENCY
          </Typography>
          <Typography as="p" variant="body" className="akira-dispatch-copy">
            The fictional city of Neo Tokyo faces an event beyond explanation.
            An immense dark sphere occupies the centre of the illustrated blast.
            Around it, buildings and streets collapse into concentric fragments.
            This emergency dispatch follows the scene depicted in AKIRA: the
            city falls silent, the horizon disappears, and an ordinary morning
            becomes an impossible landscape.
          </Typography>
        </aside>

        <aside className="akira-rail" aria-label="Newspaper edition">
          <Typography as="p" variant="display" className="akira-masthead">
            AKIRA NEWS
          </Typography>
          <Typography as="p" variant="display" className="akira-extra">
            EXTRA
          </Typography>
          <Typography variant="label" className="akira-rail-label">
            SPECIAL EDITION
          </Typography>
        </aside>

        <div className="akira-reports">
          {reports.map((report) => (
            <article key={report.title}>
              <Typography
                as="h2"
                variant="label"
                className="akira-report-title"
              >
                ● {report.title}
              </Typography>
              <Typography as="p" variant="body" className="akira-report-copy">
                {report.copy}
              </Typography>
            </article>
          ))}
        </div>

        <footer className="akira-footer">
          <div className="akira-book-title">
            <Typography variant="poster" className="akira-logo print-ink">
              AKIRA
            </Typography>
            <Typography variant="number" className="akira-volume">
              3
            </Typography>
            <Typography variant="label" className="akira-author">
              OTOMO KATSUHIRO
            </Typography>
          </div>
          <div className="akira-release">
            <div className="akira-release-date">
              <Typography variant="poster">9/1</Typography>
              <Typography variant="label">(MON)</Typography>
            </div>
            <Typography variant="label" className="akira-release-copy">
              OUT NOW!
            </Typography>
          </div>
          <div className="akira-footer-strip">
            <Typography variant="label">Reserve your copy today!</Typography>
            <Typography variant="label">880 YEN · KODANSHA</Typography>
          </div>
        </footer>
      </div>
    </section>
  );
}
