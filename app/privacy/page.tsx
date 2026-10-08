import { profile } from "@/content/portfolio";
import { pageMetadata } from "@/lib/site-url";

export const metadata = pageMetadata({
  title: "Privacy",
  description: "How this portfolio handles information: no forms, analytics, or tracking cookies.",
  path: "/privacy",
});

// Brief §3.1: describe only practices the finished site actually has. Update
// this page (and its date) before adding a contact form, analytics, or embeds.
const lastUpdated = "9 October 2026";

export default function PrivacyPage() {
  return (
    <main id="main-content" tabIndex={-1}>
      <section className="page-intro" aria-labelledby="privacy-title">
        <div className="container">
          <p className="eyebrow">Privacy</p>
          <h1 id="privacy-title">Privacy</h1>
          <p>Last updated {lastUpdated}.</p>
        </div>
      </section>

      <section className="section section--tight" aria-label="Privacy details">
        <div className="container prose legal-copy">
          <h2>What this site collects</h2>
          <p>
            This portfolio has no contact form, no user accounts, no analytics, no advertising, and no tracking cookies.
            It does not ask you for personal information.
          </p>

          <h2>Your theme preference</h2>
          <p>
            If you switch between the light and dark theme, your choice is saved in your browser&apos;s local storage so
            the site remembers it on your next visit. It stays on your device and is never sent to us. You can remove it
            at any time by clearing this site&apos;s data in your browser.
          </p>

          <h2>Email, telephone, and WhatsApp links</h2>
          <p>
            Email and telephone links open your own email or phone app. Nothing is sent until you choose to send it. If
            you email or call, your message and contact details are received by {profile.name} through standard email and
            telephone providers and are used only to respond to your enquiry.
          </p>
          <p>
            WhatsApp links, including the speaking invitation, open WhatsApp with a suggested message that you can edit
            before sending. Messages you send there are handled by WhatsApp under its own privacy policy and are used by{" "}
            {profile.name} only to respond to you.
          </p>

          <h2>Hosting</h2>
          <p>
            Like any website, the server that delivers these pages may keep standard technical logs, such as your IP
            address, browser type, and the pages requested, for security and reliability.
          </p>

          <h2>Fonts and external links</h2>
          <p>
            Fonts are served from this site, so viewing a page makes no requests to third-party font services. Links to
            other websites, such as BIZmaster Solutions, are covered by those websites&apos; own privacy practices.
          </p>

          <h2>Questions</h2>
          <p>
            For any privacy question or request, email <a href={`mailto:${profile.email}`}>{profile.email}</a>.
          </p>
        </div>
      </section>
    </main>
  );
}
