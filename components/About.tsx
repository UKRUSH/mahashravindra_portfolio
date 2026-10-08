import Link from "next/link";
import { Icon } from "@/components/Icon";
import { SectionHeading } from "@/components/SectionHeading";
import { bio, credentialsShort, founderStory, profile } from "@/content/portfolio";

/**
 * Brief §5.4: narrow heading column, wider biography column (stacked on
 * mobile). The founder statement is adapted prose (§2.17), so it is shown
 * under a heading rather than styled as a verbatim quotation. The facts
 * list uses only the §2.1 snapshot fields.
 */
export function About() {
  const [lead, ...paragraphs] = bio.long;
  const facts = [
    { label: "Based in", value: profile.location },
    { label: "Languages", value: profile.languages.join(" & ") },
    { label: "Focus", value: profile.industryFocus },
    { label: "References", value: "Available on request" },
  ];

  return (
    <section id="about" className="section about-section" aria-labelledby="about-title">
      <div className="container about-grid">
        <div className="about-aside">
          <SectionHeading
            id="about-title"
            eyebrow="About Mahesh"
            title="A corporate foundation. A founder's focus."
          />
          <ul className="credentials-row" aria-label="Key credentials">
            {credentialsShort.map((credential) => {
              const [abbr, institution] = credential.split(" — ");
              return (
                <li className="credential" key={credential}>
                  <span className="credential-abbr">{abbr}</span>
                  <span>
                    <span className="sr-only"> — </span>
                    {institution}
                  </span>
                </li>
              );
            })}
          </ul>

          <dl className="facts-list" aria-label="At a glance">
            {facts.map((fact) => (
              <div key={fact.label}>
                <dt>{fact.label}</dt>
                <dd>{fact.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="prose about-body">
          <p className="about-lead">{lead}</p>
          {paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 32)}>{paragraph}</p>
          ))}

          <div className="statement founder-story">
            <h3>
              <Icon name="phone" /> {founderStory.title}
            </h3>
            <p>{founderStory.body}</p>
            <span className="founder-story-mark" aria-hidden="true">
              <Icon name="chat" />
            </span>
          </div>

          <Link className="about-link-card" href="/media-kit">
            <span>
              <strong>Media kit</strong>
              <span>Short bio, talk topics, and speaking details</span>
            </span>
            <span className="about-link-arrow">
              <Icon name="arrowRight" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
