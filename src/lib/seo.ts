import type { Metadata } from "next";
import { siteConfig } from "@/data/site";

interface PageSeo {
  title: string;
  description: string;
  /** Route path beginning with "/", e.g. "/about" */
  path: string;
  keywords?: string[];
}

/** Builds consistent per-page metadata (title, canonical, Open Graph, Twitter). */
export function buildMetadata({ title, description, path, keywords }: PageSeo): Metadata {
  const url = path === "/" ? "/" : `${path.replace(/\/$/, "")}/`;
  return {
    title,
    description,
    keywords: keywords ? [...keywords, ...siteConfig.keywords] : siteConfig.keywords,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      url,
      title: `${title} | ${siteConfig.name}`,
      description,
      siteName: siteConfig.name,
      locale: "en_IN",
      images: [{ url: "/images/og-image.svg", width: 1200, height: 630, alt: siteConfig.name }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${siteConfig.name}`,
      description,
    },
  };
}

/** JSON-LD for the Nagar Parishad as a government organisation. */
export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "GovernmentOrganization",
    name: siteConfig.name,
    alternateName: siteConfig.nameMr,
    url: siteConfig.url,
    logo: `${siteConfig.url}/images/emblem.svg`,
    email: siteConfig.email,
    telephone: siteConfig.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: `${siteConfig.address.line1}, ${siteConfig.address.line2}`,
      addressLocality: "Dhamangaon Railway",
      addressRegion: siteConfig.state,
      postalCode: "444709",
      addressCountry: "IN",
    },
    areaServed: "Dhamangaon Railway, Amravati, Maharashtra",
  };
}
