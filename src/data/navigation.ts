import type { NavItem } from "@/types";

/**
 * Main navigation. `key` maps to the `nav.*` entry in i18n/dictionaries.ts.
 * Add / remove / reorder menu items here.
 */
export const mainNav: NavItem[] = [
  { key: "home", href: "/" },
  {
    key: "about",
    href: "/about",
    children: [
      { key: "aboutParishad", href: "/about" },
      { key: "history", href: "/history" },
      { key: "orgStructure", href: "/organisation-structure" },
      { key: "leadership", href: "/leadership" },
      { key: "wardMembers", href: "/ward-members" },
      { key: "wards", href: "/wards" },
      { key: "departments", href: "/departments" },
    ],
  },
  {
    key: "services",
    href: "/services",
    children: [
      { key: "allServices", href: "/services" },
      { key: "birthDeath", href: "/services/birth-death-certificate" },
      { key: "propertyTax", href: "/services/property-tax" },
      { key: "water", href: "/services/water-supply" },
      { key: "grievance", href: "/services/grievance" },
      { key: "rti", href: "/rti" },
    ],
  },
  { key: "schemes", href: "/schemes" },
  {
    key: "documents",
    href: "/notices",
    children: [
      { key: "notices", href: "/notices" },
      { key: "circulars", href: "/circulars" },
      { key: "tenders", href: "/tenders" },
      { key: "downloads", href: "/downloads" },
      { key: "links", href: "/important-links" },
    ],
  },
  { key: "gallery", href: "/gallery" },
  {
    key: "contact",
    href: "/contact",
    children: [
      { key: "contact", href: "/contact" },
      { key: "emergency", href: "/emergency-contacts" },
    ],
  },
];

export const footerQuickLinks: NavItem[] = [
  { key: "aboutParishad", href: "/about" },
  { key: "history", href: "/history" },
  { key: "leadership", href: "/leadership" },
  { key: "orgStructure", href: "/organisation-structure" },
  { key: "wards", href: "/wards" },
  { key: "departments", href: "/departments" },
  { key: "tenders", href: "/tenders" },
  { key: "gallery", href: "/gallery" },
  { key: "sitemap", href: "/site-map" },
];

export const footerServiceLinks: NavItem[] = [
  { key: "birthDeath", href: "/services/birth-death-certificate" },
  { key: "propertyTax", href: "/services/property-tax" },
  { key: "water", href: "/services/water-supply" },
  { key: "grievance", href: "/services/grievance" },
  { key: "downloads", href: "/downloads" },
  { key: "rti", href: "/rti" },
  { key: "emergency", href: "/emergency-contacts" },
];
