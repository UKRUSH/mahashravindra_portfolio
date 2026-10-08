import { NextResponse, type NextRequest } from "next/server";
import { projects } from "@/content/portfolio";

const slugs = new Set(projects.map((project) => project.slug));

/**
 * Unknown /projects/<slug> URLs would otherwise stream the static shell with
 * a 200 before notFound() runs (cacheComponents has no dynamicParams=false).
 * Rewriting to a path with no route serves the not-found page with a real 404.
 */
export function proxy(request: NextRequest) {
  const slug = request.nextUrl.pathname.split("/")[2];
  if (slug && !slugs.has(decodeURIComponent(slug))) {
    return NextResponse.rewrite(new URL("/404", request.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: "/projects/:slug",
};
