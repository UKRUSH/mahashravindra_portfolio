import type { Metadata } from "next";
import Link from "next/link";
import { Icon } from "@/components/Icon";

export const metadata: Metadata = {
  title: "Page not found",
};

/** Brief §3.1 / §15: a useful 404 that routes visitors back to real content. */
export default function NotFound() {
  return (
    <main id="main-content" tabIndex={-1}>
      <section className="page-intro not-found" aria-labelledby="not-found-title">
        <div className="container">
          <p className="eyebrow">404</p>
          <h1 id="not-found-title">This page could not be found</h1>
          <p>The link may be out of date, or the address may have a typo. These pages are a good place to continue:</p>
          <div className="actions">
            <Link className="btn btn--primary" href="/">
              Back to the homepage <Icon name="arrowRight" />
            </Link>
            <Link className="btn btn--secondary" href="/projects">
              All projects &amp; ventures
            </Link>
            <Link className="btn btn--secondary" href="/#contact">
              Contact Mahesh
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
