"use client";

import Link from "next/link";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { plates } from "@/lib/plates";
import { Typography } from "./typography";

let focusPageAfterNavigation = false;

export function FullscreenBook({
  index,
  initialMotion,
  cameraSurface,
  children,
}: {
  index: number;
  initialMotion: boolean;
  cameraSurface: boolean;
  children: ReactNode;
}) {
  const [motion, setMotion] = useState(initialMotion);
  const [contents, setContents] = useState(false);
  const indexDialog = useRef<HTMLDialogElement>(null);
  const backdrop = useRef<HTMLDivElement>(null);
  const poster = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const source = poster.current;
    const target = backdrop.current;
    if (!source || !target) return;
    const scene = source.cloneNode(true) as HTMLElement;
    scene.removeAttribute("id");
    scene
      .querySelectorAll("[id]")
      .forEach((node) => node.removeAttribute("id"));
    target.replaceChildren(scene);
    return () => {
      target.replaceChildren();
    };
  }, [children]);
  useEffect(() => {
    if (focusPageAfterNavigation) {
      const heading =
        poster.current?.querySelector<HTMLElement>(".composition h1");
      heading?.setAttribute("tabindex", "-1");
      heading?.focus({ preventScroll: true });
      focusPageAfterNavigation = false;
    }
  }, []);
  useEffect(() => {
    const preference = matchMedia("(prefers-reduced-motion: reduce)");
    const lens = document.getElementById(
      "camera-lens-breathe",
    ) as SVGAnimationElement | null;
    let playing = false;
    function syncCaptureMotion() {
      const enabled = motion && cameraSurface && !preference.matches;
      if (enabled && !playing && lens?.beginElement) {
        lens.beginElement();
        playing = true;
      } else if (!enabled && playing && lens?.endElement) {
        lens.endElement();
        playing = false;
      }
    }
    syncCaptureMotion();
    preference.addEventListener("change", syncCaptureMotion);
    return () => {
      preference.removeEventListener("change", syncCaptureMotion);
      if (playing) lens?.endElement();
    };
  }, [motion, cameraSurface]);
  const href = (n: number) =>
    `/?page=${plates[n].id}&motion=${motion ? "on" : "off"}${cameraSurface ? "" : "&surface=clean"}` as const;
  function openIndex() {
    indexDialog.current?.showModal();
    setContents(true);
  }
  function closeIndex() {
    indexDialog.current?.close();
    setContents(false);
  }
  function toggleMotion() {
    const nextMotion = !motion;
    setMotion(nextMotion);
    const url = new URL(window.location.href);
    url.searchParams.set("motion", nextMotion ? "on" : "off");
    window.history.replaceState(window.history.state, "", url);
  }
  function navigate() {
    focusPageAfterNavigation = true;
  }
  return (
    <main
      className={`fullscreen-reader reader-${plates[index].tone}`}
      data-motion={motion ? "on" : "off"}
      data-surface={cameraSurface ? "camera" : "clean"}
    >
      <div
        ref={backdrop}
        className="poster-backdrop"
        aria-hidden="true"
        inert
      />
      <div ref={poster} className="page-surface">
        {children}
      </div>
      <nav className="reader-dock" aria-label="Book navigation">
        <button
          onClick={openIndex}
          aria-expanded={contents}
          aria-controls="page-index"
        >
          <Typography variant="label">Index +</Typography>
        </button>
        <div className="dock-pagination">
          {index > 0 ? (
            <Link
              href={href(index - 1)}
              onNavigate={navigate}
              aria-label="Previous page"
            >
              <Typography variant="label">←</Typography>
            </Link>
          ) : (
            <span aria-hidden="true" className="dock-end">
              ←
            </span>
          )}
          <Typography variant="number">0{index + 1} / 06</Typography>
          {index < 5 ? (
            <Link
              href={href(index + 1)}
              onNavigate={navigate}
              aria-label="Next page"
            >
              <Typography variant="label">→</Typography>
            </Link>
          ) : (
            <span aria-hidden="true" className="dock-end">
              →
            </span>
          )}
        </div>
        <button onClick={toggleMotion} aria-pressed={motion}>
          <Typography variant="label">
            Motion {motion ? "on" : "off"}
          </Typography>
        </button>
      </nav>
      <dialog
        ref={indexDialog}
        className="page-index"
        id="page-index"
        aria-labelledby="index-title"
        onClose={() => setContents(false)}
      >
        <button className="index-close" onClick={closeIndex} autoFocus>
          <Typography variant="label">Close ×</Typography>
        </button>
        <Typography as="h2" variant="display" id="index-title">
          Six printed moments.
        </Typography>
        <nav className="index-links" aria-label="Page index">
          {plates.map((plate, n) => (
            <Link
              key={plate.id}
              href={href(n)}
              onNavigate={() => {
                focusPageAfterNavigation = true;
                closeIndex();
              }}
              aria-current={n === index ? "page" : undefined}
            >
              <Typography variant="number">0{n + 1}</Typography>
              <Typography variant="title">{plate.brand}</Typography>
              <Typography variant="micro">{plate.category}</Typography>
            </Link>
          ))}
        </nav>
        <Typography as="p" variant="body">
          HTML compositions with live English type and graphics clipped from the
          supplied references.
        </Typography>
      </dialog>
    </main>
  );
}
