import Link from "next/link";
import { Icon } from "@/components/Icon";
import { InviteToSpeakButton } from "@/components/InviteToSpeakButton";
import { SectionHeading } from "@/components/SectionHeading";
import { speakingCta, speakingFormats, speakingIntro, speakingTopics } from "@/content/portfolio";

/**
 * Brief §5.13: offered topics and formats, not a record of past talks.
 * No event photos, venues, audience numbers, or schedule.
 */
export function Speaking() {
  return (
    <section id="speaking" className="section speaking-section" aria-labelledby="speaking-title">
      <div className="container">
        <SectionHeading
          id="speaking-title"
          eyebrow="Speaking"
          title="Practical conversations about AI, leadership, and growth"
          description={speakingIntro}
        />

        <div className="speaking-grid">
          <div>
            <h3 className="column-title">Talk topics</h3>
            <ol className="talk-list">
              {speakingTopics.map((topic, index) => (
                <li key={topic}>
                  <span className="talk-number" aria-hidden="true">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="talk-title">{topic}</span>
                </li>
              ))}
            </ol>
          </div>

          <div className="formats-panel">
            <h3 className="column-title">Formats</h3>
            <ul className="speaking-formats">
              {speakingFormats.map((format) => (
                <li className="speaking-format" key={format.title}>
                  <span className="speaking-format-icon">
                    <Icon name={format.icon} />
                  </span>
                  <div>
                    <h4>{format.title}</h4>
                    <p>{format.focus}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="speaking-cta">
          <span className="sound-bars" aria-hidden="true">
            {Array.from({ length: 9 }, (_, i) => (
              <span key={i} />
            ))}
          </span>
          <div>
            <h3>{speakingCta.title}</h3>
            <p>{speakingCta.body}</p>
          </div>
          <div className="actions">
            <InviteToSpeakButton label="Invite Me to Speak" className="btn btn--light" />
            <Link className="btn btn--hero" href="/media-kit">
              View Media Kit
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
