"use client";

import { useEffect, useLayoutEffect, useSyncExternalStore, type MouseEvent } from "react";
import { Icon } from "@/components/Icon";
import { DARK_QUERY, THEME_STORAGE_KEY, type Theme } from "@/lib/theme";

function subscribe(onChange: () => void) {
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
  return () => observer.disconnect();
}

// The inline script in the root layout sets data-theme before paint;
// <html> is the source of truth, so React only mirrors it.
function getTheme(): Theme {
  return document.documentElement.dataset.theme === "dark" ? "dark" : "light";
}

function getServerTheme(): Theme {
  return "light";
}

function readStoredTheme(): Theme | null {
  try {
    const value = localStorage.getItem(THEME_STORAGE_KEY);
    return value === "light" || value === "dark" ? value : null;
  } catch {
    return null;
  }
}

function systemTheme(): Theme {
  return window.matchMedia(DARK_QUERY).matches ? "dark" : "light";
}

function applyTheme(theme: Theme) {
  document.documentElement.dataset.theme = theme;
}

export function ThemeToggle() {
  const theme = useSyncExternalStore(subscribe, getTheme, getServerTheme);
  const isDark = theme === "dark";

  // Strict Mode's dev remount resets <html> attributes; re-apply the saved or
  // system preference before paint. A no-op in production.
  useLayoutEffect(() => {
    applyTheme(readStoredTheme() ?? systemTheme());
  }, []);

  // Until the visitor picks a theme, follow the device setting as it changes.
  useEffect(() => {
    const media = window.matchMedia(DARK_QUERY);
    function onSystemChange() {
      if (!readStoredTheme()) applyTheme(systemTheme());
    }
    media.addEventListener("change", onSystemChange);
    return () => media.removeEventListener("change", onSystemChange);
  }, []);

  function toggle(event: MouseEvent<HTMLButtonElement>) {
    const next: Theme = isDark ? "light" : "dark";
    try {
      localStorage.setItem(THEME_STORAGE_KEY, next);
    } catch {
      // Storage unavailable (private mode, blocked): the choice lasts for this page only.
    }

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!document.startViewTransition || reduceMotion) {
      applyTheme(next);
      return;
    }

    // The new theme spreads outward from the button as a growing circle.
    const { left, top, width, height } = event.currentTarget.getBoundingClientRect();
    const x = left + width / 2;
    const y = top + height / 2;
    const radius = Math.hypot(Math.max(x, window.innerWidth - x), Math.max(y, window.innerHeight - y));

    const transition = document.startViewTransition(async () => {
      applyTheme(next);
      // Let the MutationObserver re-render this button so the snapshot has the new icon.
      await new Promise((resolve) => setTimeout(resolve, 0));
    });
    transition.ready
      .then(() => {
        document.documentElement.animate(
          { clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${radius}px at ${x}px ${y}px)`] },
          { duration: 550, easing: "cubic-bezier(0.16, 1, 0.3, 1)", pseudoElement: "::view-transition-new(root)" },
        );
      })
      .catch(() => {
        // Transition skipped (e.g. tab hidden); the theme is already applied.
      });
  }

  return (
    <button
      type="button"
      className="icon-button theme-toggle"
      aria-pressed={isDark}
      title={isDark ? "Switch to light theme" : "Switch to dark theme"}
      onClick={toggle}
    >
      {/* Both icons render; CSS shows the one for the current <html> theme, so
          the right icon appears before hydration even for dark visitors. */}
      <span className="theme-icons" aria-hidden="true">
        <Icon name="moon" className="theme-icon theme-icon--moon" />
        <Icon name="sun" className="theme-icon theme-icon--sun" />
      </span>
      <span className="sr-only">Dark theme</span>
    </button>
  );
}
