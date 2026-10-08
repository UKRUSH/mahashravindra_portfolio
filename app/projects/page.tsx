import { Icon } from "@/components/Icon";
import { ProjectFilter } from "@/components/ProjectFilter";
import { emailFor } from "@/content/portfolio";
import { pageMetadata } from "@/lib/site-url";

export const metadata = pageMetadata({
  title: "Projects & Ventures",
  description:
    "AI platforms, enterprise automation, public- and private-sector engagements, partnerships, and sustainable ventures led or developed by Mahesh Ravindra.",
  path: "/projects",
});

export default function ProjectsPage() {
  return (
    <main id="main-content" tabIndex={-1}>
      <section className="page-intro" aria-labelledby="projects-title">
        <div className="container">
          <p className="eyebrow">Projects & ventures</p>
          <h1 id="projects-title">Current work, emerging ventures, and partnerships</h1>
          <p>
            AI platforms and enterprise automation from BIZmaster Solutions, public- and private-sector engagements,
            partnerships, and sustainable ventures in development. Each record shows its current stage; client names and
            results are published only where approved.
          </p>
        </div>
      </section>

      <section className="section section--tight" aria-label="All projects">
        <div className="container">
          <ProjectFilter />
        </div>
      </section>

      <section className="section section--soft" aria-labelledby="projects-cta-title">
        <div className="container cta-row">
          <div>
            <h2 id="projects-cta-title" className="cta-title">
              Have a project in mind?
            </h2>
            <p className="muted">Discuss AI adoption, business automation, partnerships, or a new venture.</p>
          </div>
          <a className="btn btn--primary" href={emailFor("Project enquiry")}>
            Discuss a Project <Icon name="arrowRight" />
          </a>
        </div>
      </section>
    </main>
  );
}
