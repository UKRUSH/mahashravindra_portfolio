import type { ReactNode } from "react";
import { Icon, type IconName } from "@/components/Icon";
import { contact, emailFor, enquiryTypes, profile, whatsappFor } from "@/content/portfolio";

type Tile = { label: string; value: string; icon: IconName; href?: string; external?: boolean; wide?: boolean };

const subjectFor = (type: string) => (type.endsWith("Enquiry") ? type : `${type} enquiry`);

/**
 * Brief §5.14: purple full-width panel with direct links only. No form is
 * rendered because no contact backend is configured (§11.2); LinkedIn and
 * WhatsApp appear only once real values are supplied. The enquiry chips are
 * the §11.2 enquiry types, used as prefilled email subjects.
 */
export function Contact() {
  const whatsapp = whatsappFor();

  const tiles: Tile[] = [
    ...profile.phones.map((phone) => ({ label: `${phone.kind} phone`, value: phone.label, icon: "phone" as const, href: phone.href })),
    ...(whatsapp ? [{ label: "WhatsApp", value: profile.whatsappNumber ?? "", icon: "chat" as const, href: whatsapp, external: true }] : []),
    ...(profile.linkedinUrl ? [{ label: "LinkedIn", value: "LinkedIn profile", icon: "external" as const, href: profile.linkedinUrl, external: true }] : []),
    { label: "Location", value: profile.location, icon: "pin" },
    { label: "Company", value: profile.companyUrlLabel, icon: "external", href: profile.companyUrl, external: true, wide: true },
    { label: "Email", value: profile.email, icon: "mail", href: `mailto:${profile.email}`, wide: true },
  ];

  return (
    <section id="contact" className="contact-panel" aria-labelledby="contact-title">
      <div className="container contact-grid">
        <div>
          <p className="eyebrow">Contact</p>
          <h2 id="contact-title">{contact.heading}</h2>
          <p>{contact.body}</p>
          <div className="actions">
            {whatsapp && (
              <a className="btn btn--light" href={whatsapp} target="_blank" rel="noopener noreferrer">
                Message on WhatsApp <Icon name="chat" />
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            )}
            <a className={whatsapp ? "btn btn--hero" : "btn btn--light"} href={emailFor("Business enquiry")}>
              Email Mahesh <Icon name="mail" />
            </a>
          </div>

          <div className="contact-enquiries">
            <p className="contact-label" id="enquiry-label">
              Start an email about
            </p>
            <ul className="enquiry-chips" aria-labelledby="enquiry-label">
              {enquiryTypes.map((type) => (
                <li key={type}>
                  <a href={emailFor(subjectFor(type))}>{type}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="contact-save-row">
            <a className="contact-save" href="/mahesh-ravindra-card.jpg" download>
              <Icon name="download" /> Save contact card (JPG)
            </a>
            <a className="contact-save" href="/mahesh-ravindra.vcf" download>
              <Icon name="users" /> Add to phone contacts
            </a>
          </div>
        </div>

        <ul className="contact-tiles">
          {tiles.map((tile) => {
            const body: ReactNode = (
              <>
                <span className="contact-tile-icon">
                  <Icon name={tile.icon} />
                </span>
                <span>
                  <span className="contact-label">{tile.label}</span>
                  <span className="contact-tile-value">{tile.value}</span>
                </span>
              </>
            );
            return (
              <li key={tile.label} className={tile.wide ? "contact-tile-wide" : undefined}>
                {tile.href ? (
                  <a
                    className="contact-tile"
                    href={tile.href}
                    {...(tile.external && { target: "_blank", rel: "noopener noreferrer" })}
                  >
                    {body}
                    {tile.external && <span className="sr-only"> (opens in a new tab)</span>}
                  </a>
                ) : (
                  <div className="contact-tile contact-tile--static">{body}</div>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
