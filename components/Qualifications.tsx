import { SectionHeading } from "@/components/SectionHeading";
import { qualifications } from "@/content/portfolio";

/**
 * Brief §5.7: four credential cards with exact institution names. No
 * university logos (none approved), years, or classifications (not supplied).
 */
export function Qualifications() {
  return (
    <section id="qualifications" className="section section--soft" aria-labelledby="qualifications-title">
      <div className="container">
        <SectionHeading
          id="qualifications-title"
          eyebrow="Qualifications"
          title="A foundation in marketing, leadership, and finance"
        />
        <div className="grid-4">
          {qualifications.map((qualification) => (
            <article className="card qualification-card" key={qualification.title}>
              <p className="qualification-abbr" aria-hidden="true">
                {qualification.short}
              </p>
              <h3>{qualification.title}</h3>
              <p className="qualification-institution">{qualification.institution}</p>
              <p className="qualification-field">{qualification.field}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
