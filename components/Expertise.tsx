import { Icon } from "@/components/Icon";
import { SectionHeading } from "@/components/SectionHeading";
import { expertise, expertiseIntro } from "@/content/portfolio";

/**
 * Brief §5.5: three equal cards listing every competency line from §2.5–2.7.
 * No proficiency bars or percentages; the source gives no numeric ratings.
 * The row numbers are list order only, not a ranking.
 */
export function Expertise() {
  return (
    <section id="expertise" className="section section--soft expertise-section" aria-labelledby="expertise-title">
      <div className="container">
        <div className="expertise-head">
          <SectionHeading id="expertise-title" eyebrow="Expertise" title="Where strategy meets implementation" />
          <p className="expertise-intro">{expertiseIntro}</p>
        </div>

        <div className="grid-3 expertise-grid">
          {expertise.map((group) => (
            <article className="card expertise-card" key={group.title}>
              <div className="expertise-card-head">
                <div className="card-icon">
                  <Icon name={group.icon} />
                </div>
                <span className="expertise-count">{group.items.length} areas</span>
              </div>
              <h3>{group.title}</h3>
              <ol className="competency-list">
                {group.items.map((item, index) => (
                  <li key={item.area}>
                    <span className="competency-index" aria-hidden="true">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <strong>{item.area}</strong>
                      <span>{item.detail}</span>
                    </div>
                  </li>
                ))}
              </ol>
              <span className="expertise-watermark" aria-hidden="true">
                <Icon name={group.icon} />
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
