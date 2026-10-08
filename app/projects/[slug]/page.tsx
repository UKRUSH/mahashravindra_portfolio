import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Icon } from "@/components/Icon";
import { ProjectCard } from "@/components/ProjectCard";
import { emailFor, getProject, projects } from "@/content/portfolio";
import { pageMetadata } from "@/lib/site-url";

// Every project is prerendered. Unknown slugs render on demand and hit
// notFound() (dynamicParams is unavailable with cacheComponents).
export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: PageProps<"/projects/[slug]">): Promise<Metadata> {
  const project = getProject((await params).slug);
  if (!project) return {};
  return pageMetadata({ title: project.title, description: project.summary, path: `/projects/${project.slug}` });
}

/**
 * Brief §10.7: only supplied information. No problem/solution/results
 * sections or metrics; missing detail is offered by enquiry instead.
 */
export default async function ProjectPage({ params }: PageProps<"/projects/[slug]">) {
  const project = getProject((await params).slug);
  if (!project) notFound();

  const sameCategory = projects.filter((p) => p.slug !== project.slug && p.category === project.category);
  const otherFeatured = projects.filter((p) => p.slug !== project.slug && p.category !== project.category && p.featured);
  const related = [...sameCategory, ...otherFeatured].slice(0, 3);
  const enquiry = emailFor(`Project enquiry: ${project.title}`);

  return (
    <main id="main-content" tabIndex={-1}>
      <section className="page-intro" aria-labelledby="project-title">
        <div className="container">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link className="text-link" href="/projects">
              <Icon name="arrowLeft" /> All projects
            </Link>
          </nav>
          <div className="project-intro-meta">
            <span className="card-icon">
              <Icon name={project.icon} />
            </span>
            <span className="badge">{project.stage}</span>
            <span className="muted">{project.category}</span>
          </div>
          <h1 id="project-title">{project.title}</h1>
          <p>{project.summary}</p>
        </div>
      </section>

      <section className="section section--tight" aria-label="Project details">
        <div className="container project-detail-grid">
          <div className="prose project-detail-body">
            <h2>Overview</h2>
            <p>{project.focus}</p>

            {project.involvement && (
              <>
                <h2>Mahesh&apos;s involvement</h2>
                <p>{project.involvement}</p>
              </>
            )}

            {project.capabilities.length > 0 && (
              <>
                <h2>Related capabilities</h2>
                <ul className="chip-list">
                  {project.capabilities.map((capability) => (
                    <li className="chip" key={capability}>
                      {capability}
                    </li>
                  ))}
                </ul>
              </>
            )}

            <div className="statement">
              <h3>Further project information is available by enquiry</h3>
              <p>Contact Mahesh to discuss this work, its current stage, or opportunities to collaborate.</p>
            </div>
          </div>

          <section className="detail-aside" aria-label="Project summary">
            <dl>
              <dt>Category</dt>
              <dd>{project.category}</dd>
              <dt>Stage</dt>
              <dd>{project.stage}</dd>
            </dl>
            <a className="btn btn--primary" href={enquiry}>
              Enquire about this project
            </a>
          </section>
        </div>
      </section>

      {related.length > 0 && (
        <section className="section section--soft" aria-labelledby="related-title">
          <div className="container">
            <h2 id="related-title" className="related-title">
              More work
            </h2>
            <div className="grid-3">
              {related.map((p) => (
                <ProjectCard project={p} key={p.slug} />
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
