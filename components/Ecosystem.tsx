import { Icon } from "@/components/Icon";
import { SectionHeading } from "@/components/SectionHeading";
import { ecosystem, pillars, profile } from "@/content/portfolio";

/**
 * Brief §5.8: six numbered pillar cards (3/2/1 columns). Only the section
 * action links out, to the verified company homepage; pillars get individual
 * URLs only once those are verified.
 */
export function Ecosystem() {
  return (
    <section id="ecosystem" className="section" aria-labelledby="ecosystem-title">
      <div className="container">
        <SectionHeading
          id="ecosystem-title"
          eyebrow="BIZmaster ecosystem"
          title="Six pillars. One coordinated business ecosystem."
          description={ecosystem.intro}
        />
        <ol className="grid-3 card-list">
          {pillars.map((pillar, index) => (
            <li className="card pillar-card" key={pillar.title}>
              <div className="card-top">
                <div className="card-icon">
                  <Icon name={pillar.icon} />
                </div>
                <span className="card-number" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <h3>{pillar.title}</h3>
              <p>{pillar.scope}</p>
            </li>
          ))}
        </ol>

        <div className="ecosystem-footer">
          <p className="positioning">
            <span className="positioning-label">Positioning</span>
            {ecosystem.positioning}
          </p>
          <a className="btn btn--secondary" href={profile.companyUrl} target="_blank" rel="noopener noreferrer">
            Visit {profile.company} <Icon name="external" />
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        </div>
      </div>
    </section>
  );
}
