"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { HashLink } from "@/components/HashLink";
import { Icon } from "@/components/Icon";
import { ThemeToggle } from "@/components/ThemeToggle";
import { navLinks, profile } from "@/content/portfolio";

/** Matches the 64rem breakpoint in globals.css where the desktop nav appears. */
const DESKTOP_QUERY = "(min-width: 64rem)";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  // Nonmodal disclosure: Escape and outside clicks close it, and it closes
  // when the viewport grows to the desktop layout. Listeners exist only while open.
  useEffect(() => {
    if (!open) return;

    const desktop = window.matchMedia(DESKTOP_QUERY);

    function onKeyDown(event: KeyboardEvent) {
      if (event.key !== "Escape") return;
      setOpen(false);
      toggleRef.current?.focus();
    }
    function onPointerDown(event: PointerEvent) {
      if (!headerRef.current?.contains(event.target as Node)) setOpen(false);
    }
    function onViewportChange() {
      if (desktop.matches) setOpen(false);
    }

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    desktop.addEventListener("change", onViewportChange);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
      desktop.removeEventListener("change", onViewportChange);
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className="site-header" ref={headerRef}>
      <div className="container header-inner">
        <Link className="wordmark" href="/" onClick={close}>
          <span className="monogram" aria-hidden="true">
            {profile.initials}
          </span>
          <span>
            <strong>{profile.name}</strong>
            <small>{profile.role}</small>
          </span>
        </Link>

        <nav className="desktop-nav" aria-label="Primary">
          {navLinks.map((link) => (
            <HashLink key={link.href} href={link.href}>
              {link.label}
            </HashLink>
          ))}
        </nav>

        <div className="header-actions">
          <ThemeToggle />
          <HashLink className="btn btn--primary header-cta" href="/#contact">
            Let&apos;s Talk <Icon name="arrowRight" />
          </HashLink>
          <button
            ref={toggleRef}
            type="button"
            className="icon-button menu-toggle"
            aria-controls="mobile-navigation"
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            {/* Three bars that morph into an X via aria-expanded (globals.css). */}
            <span className="menu-bars" aria-hidden="true">
              <span />
              <span />
              <span />
            </span>
            <span className="sr-only">Menu</span>
          </button>
        </div>
      </div>

      <nav id="mobile-navigation" className="mobile-nav" aria-label="Mobile" hidden={!open}>
        <div className="container">
          {navLinks.map((link) => (
            <HashLink key={link.href} href={link.href} onClick={close}>
              {link.label} <Icon name="arrowRight" />
            </HashLink>
          ))}
          <HashLink className="btn btn--primary" href="/#contact" onClick={close}>
            Let&apos;s Talk <Icon name="arrowRight" />
          </HashLink>
        </div>
      </nav>
    </header>
  );
}
