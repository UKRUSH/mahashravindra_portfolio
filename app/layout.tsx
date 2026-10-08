import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { MailtoFallback } from "@/components/MailtoFallback";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { whatsappFor } from "@/content/portfolio";
import { allowIndexing, hasSiteUrl, siteUrl } from "@/lib/site-url";
import { themeScript } from "@/lib/theme";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const defaultTitle = "Mahesh Ravindra — Business Strategy & AI Leadership";
const defaultDescription =
  "Explore Mahesh Ravindra's work in business architecture, AI automation, corporate growth, and BIZmaster Solutions.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: defaultTitle,
    template: "%s — Mahesh Ravindra",
  },
  description: defaultDescription,
  authors: [{ name: "Mahesh Ravindra" }],
  ...(hasSiteUrl && { alternates: { canonical: "/" } }),
  openGraph: {
    type: "website",
    siteName: "Mahesh Ravindra",
    title: defaultTitle,
    description: defaultDescription,
    url: "/",
  },
  twitter: { card: "summary_large_image" },
  // Previews and unconfigured deployments stay out of search results.
  robots: allowIndexing ? { index: true, follow: true } : { index: false, follow: false },
};

export const viewport: Viewport = {
  themeColor: "#5d0e8b",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    // data-theme starts light on the server; themeScript swaps in a saved
    // preference before paint, so the DOM legitimately differs at hydration.
    <html lang="en" className={inter.variable} data-theme="light" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <SiteHeader />
        {children}
        <SiteFooter />
        <MailtoFallback whatsapp={whatsappFor()} />
      </body>
    </html>
  );
}
