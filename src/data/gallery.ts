import type { GalleryItem } from "@/types";

/**
 * Photo gallery. Place images in /public/images/gallery/ (JPG/WebP recommended,
 * ~1600px wide) and update `src`, `width` and `height`.
 * The bundled SVGs are elegant placeholders — replace them with real photographs.
 */
export const gallery: GalleryItem[] = [
  { id: "g1", src: "/images/gallery/nagar-parishad-office.png", category: "heritage", width: 1600, height: 1000, date: "2026-08-15",
    alt: { en: "Nagar Parishad office building", mr: "नगर परिषद कार्यालय इमारत", hi: "नगर परिषद कार्यालय भवन" } },
  { id: "g2", src: "/images/gallery/railway-station.png", category: "heritage", width: 1600, height: 1000,
    alt: { en: "Dhamangaon railway station", mr: "धामणगाव रेल्वे स्थानक", hi: "धामणगांव रेलवे स्टेशन" } },
  { id: "g3", src: "/images/gallery/independence-day.svg", category: "events", width: 1600, height: 1000, date: "2026-08-15",
    alt: { en: "Independence Day flag hoisting ceremony", mr: "स्वातंत्र्य दिन ध्वजारोहण समारंभ", hi: "स्वतंत्रता दिवस ध्वजारोहण समारोह" } },
  { id: "g4", src: "/images/gallery/cleanliness-drive.svg", category: "cleanliness", width: 1600, height: 1000, date: "2026-10-02",
    alt: { en: "Swachhata Hi Seva cleanliness drive", mr: "स्वच्छता ही सेवा मोहीम", hi: "स्वच्छता ही सेवा अभियान" } },
  { id: "g5", src: "/images/gallery/cc-road-work.svg", category: "development", width: 1600, height: 1000,
    alt: { en: "Cement concrete road development work", mr: "सिमेंट काँक्रीट रस्ता विकासकाम", hi: "सीमेंट कंक्रीट सड़क विकास कार्य" } },
  { id: "g6", src: "/images/gallery/water-tank.svg", category: "development", width: 1600, height: 1000,
    alt: { en: "Elevated water storage reservoir", mr: "उंच जलकुंभ", hi: "ऊँचा जल भंडारण टैंक" } },
  { id: "g7", src: "/images/gallery/tree-plantation.svg", category: "cleanliness", width: 1600, height: 1000, date: "2026-07-05",
    alt: { en: "Tree plantation drive", mr: "वृक्षारोपण मोहीम", hi: "वृक्षारोपण अभियान" } },
  { id: "g8", src: "/images/gallery/ganesh-festival.svg", category: "culture", width: 1600, height: 1000,
    alt: { en: "Ganeshotsav celebrations", mr: "गणेशोत्सव", hi: "गणेशोत्सव समारोह" } },
  { id: "g9", src: "/images/gallery/garden.svg", category: "development", width: 1600, height: 1000,
    alt: { en: "Nagar Parishad public garden", mr: "नगर परिषद उद्यान", hi: "नगर परिषद उद्यान" } },
];

export const galleryCategories: { key: GalleryItem["category"] | "all"; label: { en: string; mr: string; hi: string } }[] = [
  { key: "all", label: { en: "All", mr: "सर्व", hi: "सभी" } },
  { key: "events", label: { en: "Events", mr: "कार्यक्रम", hi: "कार्यक्रम" } },
  { key: "development", label: { en: "Development Works", mr: "विकासकामे", hi: "विकास कार्य" } },
  { key: "cleanliness", label: { en: "Swachh & Green", mr: "स्वच्छ व हरित", hi: "स्वच्छ एवं हरित" } },
  { key: "heritage", label: { en: "Heritage", mr: "वारसा", hi: "धरोहर" } },
  { key: "culture", label: { en: "Culture", mr: "संस्कृती", hi: "संस्कृति" } },
];
