import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { UmamiAnalytics } from "@/components/analytics/umami";
import { siteConfig } from "@/lib/constants";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.url),
  alternates: {
    canonical: "/",
  },
  keywords: [
    // Core product
    "HMIS",
    "HMIS Kenya",
    "Hospital Management Information System",
    "clinic management system Kenya",
    "healthcare software Kenya",
    // Operations & workflow
    "patient management system",
    "clinic workflow management",
    "patient flow management",
    "patient registration system",
    "clinic billing software",
    "medical records management",
    // SHA & compliance
    "SHA integration",
    "SHA claims automation",
    "NHIF to SHA migration",
    "Kenya DPA 2019 compliance",
    "KHIS DHIS2 reporting",
    // Capabilities
    "offline-first healthcare",
    "clinical decision support",
    "triage management system",
    "pharmacy management",
    "laboratory information system",
    // Audience
    "digital clinic platform Kenya",
    "hospital software Nairobi",
    "outpatient clinic software",
  ],
  authors: [{ name: "Nexora Africa Ltd" }],
  creator: "Nexora Africa Ltd",
  icons: {
    icon: [
      {
        url: "/favicon.ico",
        sizes: "48x48",
      },
      {
        url: "/favicon-light.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/favicon-dark.png",
        media: "(prefers-color-scheme: dark)",
      },
    ],
    apple: "/favicon-light.png",
  },
  openGraph: {
    type: "website",
    locale: "en_KE",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: "@nexoraafrica",
  },
  other: {
    "theme-color": "#3D000F",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Vitora HMIS",
  applicationCategory: "HealthApplication",
  operatingSystem: "Web, Windows, macOS, Linux, Android, iOS",
  description: siteConfig.description,
  url: siteConfig.url,
  author: {
    "@type": "Organization",
    name: "Nexora Africa Ltd",
    url: "https://nexora.africa",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Nairobi",
      addressCountry: "KE",
    },
  },
  offers: {
    "@type": "AggregateOffer",
    availability: "https://schema.org/InStock",
    priceCurrency: "KES",
    lowPrice: "15000",
    highPrice: "75000",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased">
        <UmamiAnalytics />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-lg focus:bg-brand-burgundy focus:px-4 focus:py-2 focus:text-white"
          >
            Skip to content
          </a>
          <div className="relative flex min-h-screen flex-col">
            <Navbar />
            <main id="main-content" className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
