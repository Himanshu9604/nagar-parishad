import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/site";
import { departments } from "@/data/departments";
import { wards } from "@/data/wards";

export const dynamic = "force-static";

const routes: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
  { path: "/", priority: 1, changeFrequency: "daily" },
  { path: "/about/", priority: 0.8, changeFrequency: "yearly" },
  { path: "/leadership/", priority: 0.7, changeFrequency: "yearly" },
  { path: "/ward-members/", priority: 0.7, changeFrequency: "yearly" },
  { path: "/wards/", priority: 0.8, changeFrequency: "yearly" },
  { path: "/organisation-structure/", priority: 0.7, changeFrequency: "yearly" },
  { path: "/history/", priority: 0.7, changeFrequency: "yearly" },
  { path: "/rti/", priority: 0.7, changeFrequency: "yearly" },
  { path: "/departments/", priority: 0.7, changeFrequency: "monthly" },
  { path: "/services/", priority: 0.9, changeFrequency: "monthly" },
  { path: "/services/birth-death-certificate/", priority: 0.9, changeFrequency: "monthly" },
  { path: "/services/property-tax/", priority: 0.9, changeFrequency: "monthly" },
  { path: "/services/water-supply/", priority: 0.9, changeFrequency: "monthly" },
  { path: "/services/grievance/", priority: 0.8, changeFrequency: "monthly" },
  { path: "/schemes/", priority: 0.8, changeFrequency: "monthly" },
  { path: "/tenders/", priority: 0.8, changeFrequency: "weekly" },
  { path: "/notices/", priority: 0.9, changeFrequency: "daily" },
  { path: "/circulars/", priority: 0.7, changeFrequency: "weekly" },
  { path: "/downloads/", priority: 0.8, changeFrequency: "monthly" },
  { path: "/important-links/", priority: 0.5, changeFrequency: "yearly" },
  { path: "/gallery/", priority: 0.5, changeFrequency: "monthly" },
  { path: "/contact/", priority: 0.7, changeFrequency: "yearly" },
  { path: "/emergency-contacts/", priority: 0.7, changeFrequency: "yearly" },
  { path: "/search/", priority: 0.3, changeFrequency: "yearly" },
  { path: "/site-map/", priority: 0.3, changeFrequency: "yearly" },
  { path: "/website-policies/", priority: 0.3, changeFrequency: "yearly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date(siteConfig.lastUpdated);
  return [
    ...routes.map((r) => ({
      url: `${siteConfig.url}${r.path}`,
      lastModified,
      changeFrequency: r.changeFrequency,
      priority: r.priority,
    })),
    ...departments.map((d) => ({
      url: `${siteConfig.url}/departments/${d.slug}/`,
      lastModified,
      changeFrequency: "yearly" as const,
      priority: 0.6,
    })),
    ...wards.map((w) => ({
      url: `${siteConfig.url}/wards/${w.wardNo}/`,
      lastModified,
      changeFrequency: "yearly" as const,
      priority: 0.5,
    })),
  ];
}
