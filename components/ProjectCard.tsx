import Link from "next/link";
import { Icon } from "@/components/Icon";
import type { Project } from "@/content/portfolio";

/**
 * Brief §5.10 / §10.5: category, source-reported stage, title, summary, and a
 * link to the real detail route. No impact metrics or invented imagery.
 */
export function ProjectCard({ project, headingLevel = "h3" }: { project: Project; headingLevel?: "h2" | "h3" }) {
  const Heading = headingLevel;

  return (
    <article className="card card--interactive project-card">
      {/* Decorative icon panel: no project imagery exists yet (brief §6). */}
      <div className="project-art">
        <span className="badge">{project.stage}</span>
        <Icon name={project.icon} size={48} />
      </div>
      <p className="card-meta">{project.category}</p>
      <Heading className="project-card-title">{project.title}</Heading>
      <p>{project.summary}</p>
      <div className="card-footer">
        <Link className="text-link" href={`/projects/${project.slug}`}>
          Project overview<span className="sr-only">: {project.title}</span>
          <Icon name="arrowRight" />
        </Link>
      </div>
    </article>
  );
}
