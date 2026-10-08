import type { MetadataRoute } from "next";
import { absoluteUrl, allowIndexing } from "@/lib/site-url";

/** Brief §12.1: crawlers allowed only on an explicitly indexed production domain. */
export default function robots(): MetadataRoute.Robots {
  if (!allowIndexing) {
    return { rules: { userAgent: "*", disallow: "/" } };
  }
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: absoluteUrl("/sitemap.xml"),
  };
}
