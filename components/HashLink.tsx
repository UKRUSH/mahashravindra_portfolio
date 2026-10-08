"use client";

import Link from "next/link";
import type { ComponentProps, MouseEvent } from "react";

/**
 * Link to a homepage section ("/#contact"). Next.js treats a click on the
 * current URL as a no-op, so once the address already ends in that hash the
 * link would stop scrolling. On the same page this scrolls the section into
 * view itself (honouring scroll-padding and the reduced-motion scroll setting);
 * from other pages it behaves like a normal Link.
 */
export function HashLink({ href, onClick, ...props }: Omit<ComponentProps<typeof Link>, "href"> & { href: string }) {
  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    onClick?.(event);
    if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

    const url = new URL(href, window.location.href);
    if (!url.hash || url.pathname !== window.location.pathname) return;
    const target = document.getElementById(decodeURIComponent(url.hash.slice(1)));
    if (!target) return;

    event.preventDefault();
    target.scrollIntoView({ block: "start" });
    if (window.location.hash !== url.hash) window.history.pushState(null, "", url.hash);
  }

  return <Link href={href} onClick={handleClick} {...props} />;
}
