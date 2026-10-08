import type { Metadata } from "next";

/**
 * Portfolio domain and indexing switch (brief §12.1), set per deployment:
 *
 *   SITE_URL=https://example.com   the chosen portfolio domain (not bizmastersolutions.lk
 *                                  unless the portfolio is deliberately hosted there)
 *   ALLOW_INDEXING=true            production only; previews stay noindex
 *
 * Without SITE_URL, canonical URLs are omitted and crawlers are kept out.
 */
const configuredUrl = process.env.SITE_URL?.trim().replace(/\/+$/, "");

export const siteUrl = configuredUrl || "http://localhost:3000";
export const hasSiteUrl = Boolean(configuredUrl);
export const allowIndexing = hasSiteUrl && process.env.ALLOW_INDEXING === "true";

export function absoluteUrl(path: string) {
  return new URL(path, siteUrl).toString();
}

/**
 * Served by app/opengraph-image.tsx. Listed explicitly because a page-level
 * openGraph object replaces the inherited one, dropping the file-based image.
 */
const ogImage = { url: "/opengraph-image", width: 1200, height: 630, alt: "Mahesh Ravindra, Founder & CEO, BIZmaster Solutions" };

/** Per-page title, description, canonical, and matching Open Graph fields. */
export function pageMetadata({ title, description, path }: { title?: string; description: string; path: string }): Metadata {
  return {
    ...(title && { title }),
    description,
    ...(hasSiteUrl && { alternates: { canonical: path } }),
    openGraph: {
      ...(title && { title: `${title} — Mahesh Ravindra` }),
      description,
      url: path,
      images: [ogImage],
    },
  };
}
