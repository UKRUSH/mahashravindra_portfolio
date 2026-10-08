import { Icon } from "@/components/Icon";
import { SectionHeading } from "@/components/SectionHeading";
import { emailFor, recognition, recognitionNote } from "@/content/portfolio";

/**
 * Brief §5.11: the three principal categories from §2.9. No award names,
 * years, or certificate gallery until real documents are supplied. The scope
 * track only restates the section title (corporate → national → international).
 */
export function Recognition() {
  return (
    <section id="recognition" className="section section--soft recognition-section" aria-labelledby="recognition-title">
      <div className="container">
        <SectionHeading
          id="recognition-title"
          eyebrow="Recognition"
          title="Recognition across corporate, national, and international settings"
        />

        {/* Decorative: each card states its own level in text. */}
        <ol className="scope-track" aria-hidden="true">
          {recognition.map((item) => (
            <li key={item.scope}>
              <span className="scope-node" />
              <span className="scope-label">{item.scope}</span>
            </li>
          ))}
        </ol>

        <ul className="grid-3 card-list recognition-grid">
          {recognition.map((item) => (
            <li className="card recognition-card" key={item.title}>
              <div className="card-top">
                <div className="recognition-medal">
                  <Icon name={item.icon} />
                </div>
                <span className="recognition-level">{item.level}</span>
              </div>
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
            </li>
          ))}
        </ul>

        <div className="recognition-note">
          <Icon name="award" />
          <p>{recognitionNote}</p>
          <a className="text-link" href={emailFor("Award history request")}>
            Request award history <Icon name="arrowRight" />
          </a>
        </div>
      </div>
    </section>
  );
}
