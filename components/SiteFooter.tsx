import Image from "next/image";
import Link from "next/link";
import { cacheLife } from "next/cache";
import { HashLink } from "@/components/HashLink";
import { Icon } from "@/components/Icon";
import { navLinks, profile, whatsappFor } from "@/content/portfolio";

/**
 * Calendar year for the copyright line (brief §5.15), not a career duration.
 * `new Date()` must be cached under cacheComponents; a daily lifetime keeps
 * it in the static shell while rolling over shortly after New Year.
 */
async function CopyrightYear() {
  "use cache";
  cacheLife("days");
  return <>{new Date().getFullYear()}</>;
}

const pages = [
  { label: "Projects & ventures", href: "/projects" },
  { label: "Media kit", href: "/media-kit" },
  { label: "Privacy", href: "/privacy" },
];

/**
 * Brief §5.15: name, title, company affiliation, navigation, and a Privacy
 * link; the BIZmaster logo appears on a white plate once an approved file
 * is set. The oversized sign-off is decorative.
 */
export function SiteFooter() {
  const [primaryPhone] = profile.phones;
  const whatsapp = whatsappFor();
  const [emailUser, emailDomain] = profile.email.split("@");

  return (
    <footer className="site-footer">
      <div className="container footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <Link className="wordmark" href="/">
              <span className="monogram" aria-hidden="true">
                {profile.initials}
              </span>
              <span>
                <strong>{profile.name}</strong>
                <small>{profile.title}</small>
              </span>
            </Link>
            <p className="footer-tagline muted">{profile.positioning.join(" · ")}</p>
            <div className="footer-company">
              {profile.companyLogo ? (
                <a className="logo-plate" href={profile.companyUrl} target="_blank" rel="noopener noreferrer">
                  <Image
                    src={profile.companyLogo.src}
                    width={profile.companyLogo.width}
                    height={profile.companyLogo.height}
                    alt={`${profile.company} logo`}
                  />
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              ) : (
                <p className="muted">
                  {profile.role},{" "}
                  <a href={profile.companyUrl} target="_blank" rel="noopener noreferrer">
                    {profile.company}
                    <span className="sr-only"> (opens in a new tab)</span>
                  </a>
                </p>
              )}
            </div>
            <HashLink className="btn btn--primary btn--small footer-cta" href="/#contact">
              Let&apos;s talk <Icon name="arrowRight" />
            </HashLink>
          </div>

          <nav className="footer-col" aria-labelledby="footer-nav-title">
            <h2 id="footer-nav-title" className="footer-title">
              Explore
            </h2>
            <ul className="footer-links footer-links--two">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <HashLink href={link.href}>{link.label}</HashLink>
                </li>
              ))}
            </ul>
          </nav>

          <nav className="footer-col" aria-labelledby="footer-pages-title">
            <h2 id="footer-pages-title" className="footer-title">
              Pages
            </h2>
            <ul className="footer-links">
              {pages.map((page) => (
                <li key={page.href}>
                  <Link href={page.href}>{page.label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="footer-col">
            <h2 className="footer-title">Connect</h2>
            <ul className="footer-links">
              {whatsapp && (
                <li>
                  <a href={whatsapp} target="_blank" rel="noopener noreferrer">
                    <Icon name="chat" /> WhatsApp
                    <span className="sr-only"> (opens in a new tab)</span>
                  </a>
                </li>
              )}
              <li>
                <a href={`mailto:${profile.email}`}>
                  <Icon name="mail" />
                  {/* Prefer wrapping after "@" in narrow columns. */}
                  <span>
                    {emailUser}@<wbr />
                    {emailDomain}
                  </span>
                </a>
              </li>
              <li>
                <a href={primaryPhone.href}>
                  <Icon name="phone" /> {primaryPhone.label}
                </a>
              </li>
              <li>
                <a href="/mahesh-ravindra-card.jpg" download>
                  <Icon name="download" /> Save contact card
                </a>
              </li>
            </ul>
          </div>
        </div>

        <p className="footer-signoff" aria-hidden="true">
          {profile.name}
        </p>

        <div className="footer-bottom">
          <p>
            © <CopyrightYear /> {profile.name}. All rights reserved.
            <span className="footer-bottom-location">
              <Icon name="pin" /> {profile.location}
            </span>
          </p>
          <a className="back-to-top" href="#main-content">
            Back to top
            <span className="back-to-top-icon" aria-hidden="true">
              <Icon name="arrowRight" />
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}
