import { SectionHeading } from "@/components/SectionHeading";
import { experience } from "@/content/portfolio";

/**
 * Brief §5.6: founder role first, dates and location above each title.
 * The 2005–2023 period stays one consolidated entry; never infer employers.
 */
export function ExperienceTimeline() {
  return (
    <section id="experience" className="section" aria-labelledby="experience-title">
      <div className="container experience-grid">
        <div>
          <SectionHeading
            id="experience-title"
            eyebrow="Experience"
            title="Experience built through leadership and execution"
          />
        </div>

        <ol className="timeline">
          {experience.map((role) => (
            <li className="timeline-item" key={role.title}>
              <p className="timeline-date">
                {role.dates} · {role.location}
              </p>
              <h3 className="timeline-title">{role.title}</h3>
              <p className="timeline-company">{role.organisation}</p>
              <div className="timeline-body">
                <p>{role.summary}</p>
                <h4 className="timeline-label">{role.highlightsLabel}</h4>
                <ul>
                  {role.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
                {role.note && <p className="timeline-note">{role.note}</p>}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
