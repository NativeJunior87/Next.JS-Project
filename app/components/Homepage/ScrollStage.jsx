"use client";

import { useEffect, useRef } from "react";

const clamp01 = (n) => Math.min(Math.max(n, 0), 1);

/**
 * Wraps the whole page and writes two CSS variables on <main> while you scroll:
 *
 *   --p       0 to 1  how far the crystal has travelled. It reaches 1 exactly
 *                     when the MIDDLE of the About section is at the middle of
 *                     the screen, and stays at 1 from then on.
 *   --reveal  0 to 1  fades the About text in as the section enters the screen.
 *
 * Nothing re-renders in React on scroll; only CSS variables change.
 */
export default function ScrollStage({ children }) {
  const ref = useRef(null);

  useEffect(() => {
    const stage = ref.current;
    let frame = 0;

    const update = () => {
      frame = 0;
      const about = document.getElementById("about");
      const vh = window.innerHeight;
      const y = window.scrollY;
      const maxScroll = Math.max(document.documentElement.scrollHeight - vh, 1);

      let p = 0;
      let reveal = 1;

      if (about) {
        const rect = about.getBoundingClientRect();
        const aboutTop = rect.top + y;
        // scroll position where the About section's midpoint is at screen middle
        const lockAt = Math.min(aboutTop + rect.height / 2 - vh / 2, maxScroll);

        const t = clamp01(y / Math.max(lockAt, 1));
        p = 1 - (1 - t) * (1 - t); // ease-out: glides in, settles at the midpoint

        const r = clamp01((y + vh * 0.6 - aboutTop) / (vh * 0.6));
        reveal = r * r * (3 - 2 * r);
      }

      stage.style.setProperty("--p", p.toFixed(4));
      stage.style.setProperty("--reveal", reveal.toFixed(4));
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    // re-measure if the page height changes (fonts loading, content edits)
    const observer = new ResizeObserver(onScroll);
    observer.observe(stage);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      observer.disconnect();
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return <main ref={ref}>{children}</main>;
}