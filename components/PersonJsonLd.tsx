import { bio, expertise, profile, qualifications } from "@/content/portfolio";
import { absoluteUrl, hasSiteUrl } from "@/lib/site-url";

/**
 * Brief §12.2: Person structured data from controlled content only.
 * Portfolio URL, portrait, and sameAs appear only once real values exist;
 * the company homepage is an affiliation, never a sameAs profile. Phone and
 * email are left out until the owner opts in to having them indexed.
 */
export function PersonJsonLd() {
  const sameAs = [profile.linkedinUrl].filter((url): url is string => Boolean(url));

  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    jobTitle: profile.role,
    description: bio.short,
    worksFor: { "@type": "Organization", name: profile.company, url: profile.companyUrl },
    address: { "@type": "PostalAddress", addressLocality: "Colombo", addressCountry: "LK" },
    nationality: { "@type": "Country", name: "Sri Lanka" },
    knowsLanguage: profile.languages,
    knowsAbout: expertise.flatMap((group) => group.items.map((item) => item.area)),
    hasCredential: qualifications.map((qualification) => ({
      "@type": "EducationalOccupationalCredential",
      name: qualification.title,
      recognizedBy: { "@type": "Organization", name: qualification.institution },
    })),
    ...(hasSiteUrl && { url: absoluteUrl("/") }),
    ...(hasSiteUrl && profile.portrait && { image: absoluteUrl(profile.portrait) }),
    ...(sameAs.length > 0 && { sameAs }),
  };

  return (
    <script
      type="application/ld+json"
      // Escape "<" so content can never close the script element.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(person).replace(/</g, "\\u003c") }}
    />
  );
}
