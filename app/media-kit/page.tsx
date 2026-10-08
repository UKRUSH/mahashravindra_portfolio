import { CopyButton } from "@/components/CopyButton";
import { Icon } from "@/components/Icon";
import { InviteToSpeakButton } from "@/components/InviteToSpeakButton";
import { bio, profile, speakingFormats, speakingTopics, whatsappFor } from "@/content/portfolio";
import { pageMetadata } from "@/lib/site-url";

export const metadata = pageMetadata({
  title: "Media Kit & Speaking",
  description:
    "Biographies, professional title, speaking formats, talk topics, and contact details for event organisers and media working with Mahesh Ravindra.",
  path: "/media-kit",
});

const wordCount = (text: string) => text.trim().split(/\s+/).length;

const sections = [
  { id: "short-bio", label: "Short biography" },
  { id: "full-bio", label: "Full biography" },
  { id: "talk-topics", label: "Talk topics" },
  { id: "speaking-formats", label: "Speaking formats" },
];

/**
 * Brief §3.1: short and full bio, title, formats, five topics, contact, and
 * downloads only when reviewed files exist (profilePdf / speakerSheet).
 * Word counts are computed from the supplied text, for organisers' limits.
 */
export default function MediaKitPage() {
  const downloads = [
    profile.profilePdf && { label: "Professional profile (PDF)", href: profile.profilePdf },
    profile.speakerSheet && { label: "Speaker sheet (PDF)", href: profile.speakerSheet },
  ].filter((item): item is { label: string; href: string } => Boolean(item));
  const fullBio = bio.long.join("\n\n");
  const whatsapp = whatsappFor();

  return (
    <main id="main-content" tabIndex={-1}>
      <section className="hero kit-hero" aria-labelledby="media-kit-title">
        <div className="container kit-hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Media kit</p>
            <h1 id="media-kit-title">Media kit &amp; speaking</h1>
            <p className="hero-summary">
              Biographies, speaking topics, and contact details for event organisers, journalists, and podcast hosts.
              Biographies may be used as written when introducing Mahesh.
            </p>
            <div className="actions">
              <InviteToSpeakButton />
              <a className="btn btn--hero" href="/mahesh-ravindra-card.jpg" download>
                Save contact card <Icon name="download" />
              </a>
            </div>
          </div>

          <div className="speaker-card">
            <div className="speaker-card-head">
              <span className="speaker-monogram" aria-hidden="true">
                {profile.initials}
              </span>
              <div>
                <p className="speaker-name">{profile.name}</p>
                <p className="speaker-title">{profile.title}</p>
              </div>
            </div>
            <ul className="speaker-tags" aria-label="Positioning">
              {profile.positioning.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="speaker-meta">
              <Icon name="pin" /> {profile.location} · {profile.languages.join(" & ")}
            </p>
          </div>
        </div>
      </section>

      <section className="section section--tight kit-body-section" aria-label="Media kit">
        <div className="container media-kit-grid">
          <div className="media-kit-body">
            <section id="short-bio" className="kit-block" aria-labelledby="short-bio-title">
              <div className="kit-block-head">
                <span className="kit-block-number" aria-hidden="true">01</span>
                <div>
                  <h2 id="short-bio-title">Short biography</h2>
                  <p className="kit-block-meta">{wordCount(bio.short)} words · for programmes and introductions</p>
                </div>
                <CopyButton text={bio.short} label="Copy short bio" />
              </div>
              <div className="bio-block">
                <p>{bio.short}</p>
              </div>
            </section>

            <section id="full-bio" className="kit-block" aria-labelledby="full-bio-title">
              <div className="kit-block-head">
                <span className="kit-block-number" aria-hidden="true">02</span>
                <div>
                  <h2 id="full-bio-title">Full biography</h2>
                  <p className="kit-block-meta">{wordCount(fullBio)} words · for profiles and press</p>
                </div>
                <CopyButton text={fullBio} label="Copy full bio" />
              </div>
              <div className="bio-block">
                {bio.long.map((paragraph) => (
                  <p key={paragraph.slice(0, 32)}>{paragraph}</p>
                ))}
              </div>
            </section>

            <section id="talk-topics" className="kit-block" aria-labelledby="topics-title">
              <div className="kit-block-head">
                <span className="kit-block-number" aria-hidden="true">03</span>
                <div>
                  <h2 id="topics-title">Talk topics</h2>
                  <p className="kit-block-meta">Offered topics, adaptable to the audience and format</p>
                </div>
              </div>
              <ol className="kit-topics card-list">
                {speakingTopics.map((topic, index) => (
                  <li className="card kit-topic" key={topic}>
                    <span className="kit-topic-number" aria-hidden="true">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <p>{topic}</p>
                  </li>
                ))}
              </ol>
            </section>

            <section id="speaking-formats" className="kit-block" aria-labelledby="formats-title">
              <div className="kit-block-head">
                <span className="kit-block-number" aria-hidden="true">04</span>
                <div>
                  <h2 id="formats-title">Speaking formats</h2>
                  <p className="kit-block-meta">Six ways to work together</p>
                </div>
              </div>
              <ul className="grid-2 card-list kit-formats">
                {speakingFormats.map((format) => (
                  <li className="card kit-format" key={format.title}>
                    <span className="speaking-format-icon">
                      <Icon name={format.icon} />
                    </span>
                    <div>
                      <h3>{format.title}</h3>
                      <p>{format.focus}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          <div className="kit-aside">
            <div className="kit-panel">
              <h2 className="column-title">Quick facts</h2>
              <dl className="facts-list">
                <div>
                  <dt>Name</dt>
                  <dd>{profile.name}</dd>
                </div>
                <div>
                  <dt>Title</dt>
                  <dd>{profile.title}</dd>
                </div>
                <div>
                  <dt>Based in</dt>
                  <dd>{profile.location}</dd>
                </div>
                <div>
                  <dt>Languages</dt>
                  <dd>{profile.languages.join(" & ")}</dd>
                </div>
              </dl>
            </div>

            <div className="kit-panel">
              <h2 className="column-title">Contact</h2>
              <ul className="footer-links">
                <li>
                  <a href={`mailto:${profile.email}`}>
                    <Icon name="mail" /> {profile.email}
                  </a>
                </li>
                {profile.phones.map((phone) => (
                  <li key={phone.href}>
                    <a href={phone.href}>
                      <Icon name="phone" /> {phone.label}
                    </a>
                  </li>
                ))}
                {whatsapp && (
                  <li>
                    <a href={whatsapp} target="_blank" rel="noopener noreferrer">
                      <Icon name="chat" /> WhatsApp {profile.whatsappNumber}
                      <span className="sr-only"> (opens in a new tab)</span>
                    </a>
                  </li>
                )}
              </ul>
              {downloads.length > 0 && (
                <>
                  <h2 className="column-title kit-downloads-title">Downloads</h2>
                  <ul className="footer-links">
                    {downloads.map((download) => (
                      <li key={download.href}>
                        <a href={download.href} download>
                          <Icon name="arrowRight" /> {download.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </div>

            {/* Stays in view while the bios and topics scroll (desktop). */}
            <div className="kit-panel kit-sticky">
              <nav className="kit-toc" aria-label="On this page">
                <h2 className="column-title">On this page</h2>
                <ol>
                  {sections.map((section, index) => (
                    <li key={section.id}>
                      <a href={`#${section.id}`}>
                        <span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span> {section.label}
                      </a>
                    </li>
                  ))}
                </ol>
              </nav>
              <InviteToSpeakButton />
              <a className="btn btn--secondary" href="/mahesh-ravindra-card.jpg" download>
                Save contact card <Icon name="download" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
