import type { LText, Locale } from "@/types";
import { services } from "@/data/services";
import { departments } from "@/data/departments";
import { notices } from "@/data/notices";
import { circulars } from "@/data/circulars";
import { forms } from "@/data/forms";
import { tenders } from "@/data/tenders";
import { schemes } from "@/data/schemes";
import { govLinks } from "@/data/links";
import { emergencyContacts } from "@/data/emergency";
import { wards } from "@/data/wards";
import { lt } from "./utils";

export type SearchKind =
  | "page"
  | "service"
  | "department"
  | "notice"
  | "circular"
  | "form"
  | "tender"
  | "scheme"
  | "link"
  | "contact";

export interface SearchEntry {
  id: string;
  kind: SearchKind;
  title: LText;
  description?: LText | string;
  href: string;
  external?: boolean;
  keywords?: string;
}

const pages: SearchEntry[] = [
  { id: "p-about", kind: "page", href: "/about", title: { en: "About Nagar Parishad", mr: "नगर परिषदेविषयी", hi: "नगर परिषद के बारे में" }, keywords: "history vision mission profile" },
  { id: "p-leadership", kind: "page", href: "/leadership", title: { en: "President & Chief Officer", mr: "नगराध्यक्ष व मुख्याधिकारी", hi: "नगराध्यक्ष एवं मुख्य अधिकारी" }, keywords: "nagaradhyaksha mukhyadhikari message" },
  { id: "p-wards", kind: "page", href: "/ward-members", title: { en: "Elected Ward Members", mr: "निर्वाचित नगरसेवक", hi: "निर्वाचित पार्षद" }, keywords: "councillor nagarsevak corporator ward prabhag" },
  { id: "p-wardstats", kind: "page", href: "/wards", title: { en: "Ward Details & Voter Statistics", mr: "प्रभाग माहिती व मतदार आकडेवारी", hi: "वार्ड विवरण एवं मतदाता आँकड़े" }, keywords: "voter list matdar yadi population male female households polling booth" },
  { id: "p-history", kind: "page", href: "/history", title: { en: "History & Past Presidents", mr: "इतिहास व माजी नगराध्यक्ष", hi: "इतिहास एवं पूर्व नगराध्यक्ष" }, keywords: "history itihas former president nagaradhyaksha Pratap Adsad Archana Rothe census 2011 population literacy" },
  { id: "p-rti", kind: "page", href: "/rti", title: { en: "Right to Information (RTI)", mr: "माहितीचा अधिकार", hi: "सूचना का अधिकार" }, keywords: "rti pio appeal information officer fee 4(1)(b)" },
  { id: "p-org", kind: "page", href: "/organisation-structure", title: { en: "Organisation Structure", mr: "प्रशासकीय रचना", hi: "प्रशासनिक संरचना" }, keywords: "hierarchy org chart collector chief officer president committee" },
  { id: "p-bd", kind: "page", href: "/services/birth-death-certificate", title: { en: "Birth & Death Certificate", mr: "जन्म व मृत्यू प्रमाणपत्र", hi: "जन्म एवं मृत्यु प्रमाणपत्र" }, keywords: "janm mrutyu dakhla registration" },
  { id: "p-tax", kind: "page", href: "/services/property-tax", title: { en: "Property Tax", mr: "मालमत्ता कर", hi: "संपत्ति कर" }, keywords: "gharpatti house tax assessment rebate mutation" },
  { id: "p-water", kind: "page", href: "/services/water-supply", title: { en: "Water Supply & Water Bill", mr: "पाणीपुरवठा व पाणी बिल", hi: "जलापूर्ति एवं जल बिल" }, keywords: "nal connection pani patti tap" },
  { id: "p-griev", kind: "page", href: "/services/grievance", title: { en: "Complaints & Grievance", mr: "तक्रार निवारण", hi: "शिकायत निवारण" }, keywords: "complaint takrar garbage drainage streetlight" },
  { id: "p-gallery", kind: "page", href: "/gallery", title: { en: "Photo Gallery", mr: "छायाचित्र दालन", hi: "फ़ोटो गैलरी" }, keywords: "photos images events" },
  { id: "p-contact", kind: "page", href: "/contact", title: { en: "Contact Us", mr: "संपर्क", hi: "संपर्क करें" }, keywords: "address phone email map office" },
  { id: "p-emergency", kind: "page", href: "/emergency-contacts", title: { en: "Emergency Contacts", mr: "आपत्कालीन संपर्क", hi: "आपातकालीन संपर्क" }, keywords: "police fire ambulance hospital helpline" },
];

/** Flat index of all static content — built once at import time (client-side only, no API). */
export const searchIndex: SearchEntry[] = [
  ...pages,
  ...services.map<SearchEntry>((s) => ({
    id: `s-${s.slug}`,
    kind: "service",
    title: s.title,
    description: s.summary,
    href: s.href ?? "/services",
    keywords: s.department,
  })),
  ...departments.map<SearchEntry>((d) => ({
    id: `d-${d.slug}`,
    kind: "department",
    title: d.name,
    description: d.summary,
    href: `/departments/${d.slug}`,
    keywords: [d.head, ...d.functions, ...(d.services ?? [])].join(" "),
  })),
  ...notices.map<SearchEntry>((n) => ({
    id: n.id,
    kind: "notice",
    title: n.title,
    description: n.summary,
    href: n.file,
    external: true,
    keywords: `${n.referenceNo ?? ""} ${n.category}`,
  })),
  ...circulars.map<SearchEntry>((c) => ({
    id: c.id,
    kind: "circular",
    title: c.title,
    href: c.file,
    external: true,
    keywords: `${c.referenceNo ?? ""} ${c.category} GR`,
  })),
  ...forms.map<SearchEntry>((f) => ({
    id: f.id,
    kind: "form",
    title: f.title,
    href: f.file,
    external: true,
    keywords: `form application arj ${f.category}`,
  })),
  ...tenders.map<SearchEntry>((t) => ({
    id: t.id,
    kind: "tender",
    title: t.title,
    description: `${t.tenderNo} · ${t.estimatedCost}`,
    href: "/tenders",
    keywords: `${t.tenderNo} ${t.department} nivida`,
  })),
  ...schemes.map<SearchEntry>((s) => ({
    id: `sc-${s.id}`,
    kind: "scheme",
    title: s.name,
    description: s.summary,
    href: `/schemes#${s.id}`,
    keywords: "yojana scheme",
  })),
  ...govLinks.map<SearchEntry>((g) => ({
    id: `l-${g.url}`,
    kind: "link",
    title: { en: g.title, mr: g.titleMr },
    description: g.description,
    href: g.url,
    external: true,
  })),
  ...wards.map<SearchEntry>((w) => ({
    id: `w-${w.wardNo}`,
    kind: "page",
    title: { en: `Ward ${w.wardNo} – ${w.area.en}`, mr: `प्रभाग ${w.wardNo} – ${w.area.mr ?? w.area.en}`, hi: `वार्ड ${w.wardNo} – ${w.area.hi ?? w.area.en}` },
    description: `Voters ${w.voters.total} · Population ${w.population.total}`,
    href: `/wards/${w.wardNo}`,
    keywords: `${w.members.map((m) => m.name.en).join(" ")} ${w.pollingStation} ward prabhag voters`,
  })),
  ...emergencyContacts.map<SearchEntry>((e) => ({
    id: `e-${e.id}`,
    kind: "contact",
    title: e.name,
    description: e.number,
    href: "/emergency-contacts",
    keywords: e.number,
  })),
];

function normalise(text: string): string {
  return text.toLowerCase().normalize("NFC");
}

/** Simple multi-term search across all languages of each entry. */
export function searchSite(query: string, locale: Locale): SearchEntry[] {
  const terms = normalise(query).split(/\s+/).filter(Boolean);
  if (terms.length === 0) return [];

  return searchIndex
    .map((entry) => {
      const title = typeof entry.title === "string" ? entry.title : Object.values(entry.title).join(" ");
      const desc =
        typeof entry.description === "string"
          ? entry.description
          : entry.description
            ? Object.values(entry.description).join(" ")
            : "";
      const haystack = normalise(`${title} ${desc} ${entry.keywords ?? ""}`);
      const titleLocal = normalise(lt(entry.title, locale));

      let score = 0;
      for (const term of terms) {
        if (!haystack.includes(term)) return null;
        score += titleLocal.includes(term) ? 3 : 1;
      }
      return { entry, score };
    })
    .filter((r): r is { entry: SearchEntry; score: number } => r !== null)
    .sort((a, b) => b.score - a.score)
    .map((r) => r.entry);
}
