import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/components/Icon";
import type { Project } from "@/content/portfolio";

/**
 * Brief §5.10 / §10.5: category, source-reported stage, title, summary, and a
 * link to the real detail route. No impact metrics. Card photos are
 * illustrative stock, so they stay decorative (empty alt).
 */
export function ProjectCard({ project, headingLevel = "h3" }: { project: Project; headingLevel?: "h2" | "h3" }) {
  const Heading = headingLevel;

  return (
    <article className="card card--interactive project-card">
      <div className={project.image ? "project-art project-art--photo" : "project-art"}>
        {project.image && (
          <Image
            className="project-photo"
            src={project.image.src}
            alt=""
            fill
            sizes="(max-width: 767px) calc(100vw - 4rem), (max-width: 1023px) calc(50vw - 4rem), 560px"
          />
        )}
        <span className="badge">{project.stage}</span>
        <span className="project-art-icon">
          <Icon name={project.icon} size={48} />
        </span>
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
