import type { MetadataRoute } from "next";
import { projects } from "@/content/portfolio";
import { absoluteUrl } from "@/lib/site-url";

/**
 * Brief §12.1: homepage, project collection, every valid project, media kit,
 * and privacy. lastModified is omitted: there is no real per-page edit date,
 * and new Date() would only report the build time.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: absoluteUrl("/"), priority: 1 },
    { url: absoluteUrl("/projects"), priority: 0.8 },
    ...projects.map((project) => ({ url: absoluteUrl(`/projects/${project.slug}`), priority: 0.6 })),
    { url: absoluteUrl("/media-kit"), priority: 0.7 },
    { url: absoluteUrl("/privacy"), priority: 0.2 },
  ];
}
