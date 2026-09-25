import { wardTotals } from "./wards";
import { census2011 } from "./history";
import { formatNumber } from "@/lib/utils";

/**
 * ─────────────────────────────────────────────────────────────
 *  SITE CONFIGURATION
 *  Edit this file to update office address, phone numbers, email,
 *  social links and headline statistics shown across the website.
 *
 *  ⚠ Values marked "VERIFY" are placeholders — replace them with
 *    official information before publishing.
 * ─────────────────────────────────────────────────────────────
 */
export const siteConfig = {
  url: "https://www.dhamangaonrailwaynp.gov.in", // VERIFY: final production domain
  name: "Nagar Parishad Dhamangaon Railway",
  nameMr: "नगर परिषद धामणगाव रेल्वे",
  district: "Amravati",
  state: "Maharashtra",
  description:
    "Official website of Nagar Parishad Dhamangaon Railway, Dist. Amravati, Maharashtra — citizen services, property tax, water supply, birth & death certificates, notices, tenders and schemes.",
  keywords: [
    "Nagar Parishad Dhamangaon Railway",
    "Dhamangaon Railway",
    "धामणगाव रेल्वे नगर परिषद",
    "Amravati",
    "Maharashtra municipal council",
    "property tax Dhamangaon",
    "birth certificate Dhamangaon",
    "water bill Dhamangaon",
  ],
  address: {
    line1: "Nagar Parishad Karyalaya, Main Road",
    line2: "Dhamangaon Railway, Tq. Dhamangaon Rly.",
    city: "Dist. Amravati, Maharashtra – 444709", // VERIFY PIN code
  },
  addressMr: "नगर परिषद कार्यालय, मुख्य रस्ता, धामणगाव रेल्वे, जि. अमरावती, महाराष्ट्र – ४४४७०९",
  phone: "07222-237050", // as listed on amravati.gov.in
  phoneAlt: "07222-000001", // VERIFY
  helpline: "1800-000-0000", // VERIFY: citizen toll-free helpline
  whatsapp: "+91 90000 00000", // VERIFY
  email: "np.dhamangaonrly@gmail.com", // VERIFY
  emailOfficial: "co.dhamangaonrly@maharashtra.gov.in", // VERIFY
  mapEmbedUrl:
    "https://www.google.com/maps?q=Dhamangaon+Railway+Nagar+Parishad&output=embed",
  mapLink: "https://www.google.com/maps/search/?api=1&query=Dhamangaon+Railway+Nagar+Parishad",
  social: {
    facebook: "https://www.facebook.com/",
    x: "https://x.com/",
    youtube: "https://www.youtube.com/",
    instagram: "https://www.instagram.com/",
  },
  lastUpdated: "2026-09-24",
};

/** Headline figures shown on the home & about pages (ward figures come from data/wards.ts). VERIFY area. */
export const townStats = [
  { value: String(wardTotals.wards), label: { en: "Electoral Wards", mr: "प्रभाग", hi: "वार्ड" } },
  { value: formatNumber(census2011.population.total), label: { en: "Population (Census 2011)", mr: "लोकसंख्या (जनगणना २०११)", hi: "जनसंख्या (जनगणना 2011)" } },
  { value: formatNumber(wardTotals.voters.total), label: { en: "Registered Voters", mr: "नोंदणीकृत मतदार", hi: "पंजीकृत मतदाता" } },
  { value: `${census2011.literacy.total}%`, label: { en: "Literacy (Census 2011)", mr: "साक्षरता (जनगणना २०११)", hi: "साक्षरता (जनगणना 2011)" } },
];
