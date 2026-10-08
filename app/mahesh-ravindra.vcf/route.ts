import { profile } from "@/content/portfolio";

/** vCard text escaping (RFC 6350 §3.4): backslash, comma, semicolon, newline. */
function escape(value: string) {
  return value.replace(/\\/g, "\\\\").replace(/,/g, "\\,").replace(/;/g, "\\;").replace(/\n/g, "\\n");
}

/**
 * "Save contact" card built only from details already published on the
 * site. No portrait or LinkedIn until real values exist in content.
 */
export function GET() {
  const [givenName, ...rest] = profile.name.split(" ");
  const tel = (href: string) => href.replace(/^tel:/, "");
  const lines = [
    "BEGIN:VCARD",
    "VERSION:3.0",
    `N:${escape(rest.join(" "))};${escape(givenName)};;;`,
    `FN:${escape(profile.name)}`,
    `ORG:${escape(profile.company)}`,
    `TITLE:${escape(profile.role)}`,
    ...profile.phones.map((phone, index) => `TEL;TYPE=VOICE${index === 0 ? ",PREF" : ""}:${tel(phone.href)}`),
    `EMAIL;TYPE=INTERNET:${profile.email}`,
    `URL:${profile.companyUrl}`,
    ...(profile.linkedinUrl ? [`URL:${profile.linkedinUrl}`] : []),
    `ADR;TYPE=WORK:;;;Colombo;;;Sri Lanka`,
    "END:VCARD",
  ];

  return new Response(lines.join("\r\n") + "\r\n", {
    headers: {
      "Content-Type": "text/vcard; charset=utf-8",
      "Content-Disposition": 'attachment; filename="mahesh-ravindra.vcf"',
    },
  });
}
