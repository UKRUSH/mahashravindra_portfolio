import { Icon } from "@/components/Icon";
import { SectionHeading } from "@/components/SectionHeading";
import { differentiators, purpose } from "@/content/portfolio";

/**
 * Brief §5.12: dark section as a visual pause. Vision and mission in full
 * (§2.13), three values cards, then the differentiators (§2.14) phrased
 * without guarantees or endorsements.
 */
export function Purpose() {
  return (
    <section id="vision" className="section section--dark" aria-labelledby="vision-title">
      <div className="container">
        <SectionHeading id="vision-title" eyebrow="Vision & values" title="Why the work matters" />

        <div className="grid-2 purpose-grid">
          <article className="purpose-statement">
            <h3>Vision</h3>
            <p>{purpose.vision}</p>
          </article>
          <article className="purpose-statement">
            <h3>Mission</h3>
            <p>{purpose.mission}</p>
          </article>
        </div>

        <ul className="grid-3 card-list values-grid">
          {purpose.values.map((value) => (
            <li className="card" key={value.title}>
              <h3>{value.title}</h3>
              <p>{value.detail}</p>
            </li>
          ))}
        </ul>

        <div className="differentiators">
          <h3>What Mahesh brings</h3>
          <ul className="differentiator-list">
            {differentiators.map((item) => (
              <li key={item}>
                <Icon name="check" /> {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
