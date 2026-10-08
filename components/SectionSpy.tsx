"use client";

import { useEffect } from "react";

/**
 * Highlights the header link for the homepage section in view. Rendered by
 * the homepage (not the persistent header) so it starts and stops with the
 * page. It only toggles aria-current on header links, which React never
 * sets, so the two never conflict.
 */
export function SectionSpy() {
  useEffect(() => {
    const sections = [...document.querySelectorAll<HTMLElement>("main section[id]")];
    const links = [...document.querySelectorAll<HTMLAnchorElement>('.site-header a[href^="/#"]')];

    function mark(id: string | null) {
      for (const link of links) {
        if (id && link.getAttribute("href") === `/#${id}`) link.setAttribute("aria-current", "location");
        else link.removeAttribute("aria-current");
      }
    }

    // A thin band just above the middle of the viewport decides the active
    // section; sections without a nav link (e.g. Ecosystem) clear the mark.
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) if (entry.isIntersecting) mark(entry.target.id);
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );
    sections.forEach((section) => observer.observe(section));

    // Above the first section (the hero), nothing is current.
    function onScroll() {
      if (sections[0] && sections[0].getBoundingClientRect().top > window.innerHeight * 0.45) mark(null);
    }
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
      mark(null);
    };
  }, []);

  return null;
}
