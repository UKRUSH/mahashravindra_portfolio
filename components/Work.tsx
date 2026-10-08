import Link from "next/link";
import { Icon } from "@/components/Icon";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionHeading } from "@/components/SectionHeading";
import { projects } from "@/content/portfolio";

/**
 * Homepage work section (brief §5.10): the four featured records. Stages
 * reflect the supplied profile documents (build note, not visitor copy).
 */
export function Work() {
  const featured = projects.filter((project) => project.featured);

  return (
    <section id="work" className="section" aria-labelledby="work-title">
      <div className="container">
        <SectionHeading
          id="work-title"
          eyebrow="Projects & ventures"
          title="Current work, emerging ventures, and partnerships"
          description="Platforms in deployment, enterprise AI in progress, and sustainable ventures in development. Each record shows its current stage."
        />
        <div className="grid-2">
          {featured.map((project) => (
            <ProjectCard project={project} key={project.slug} />
          ))}
        </div>
        <div className="section-action">
          <Link className="text-link" href="/projects">
            View all {projects.length} projects and ventures <Icon name="arrowRight" />
          </Link>
        </div>
      </div>
    </section>
  );
}
