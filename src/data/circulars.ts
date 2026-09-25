import type { DocumentItem } from "@/types";

/**
 * Circulars and Government Resolutions (GR).
 * PDFs live in /public/documents/circulars/.
 */
export const circulars: DocumentItem[] = [
  {
    id: "c-2026-06",
    title: {
      en: "GR: Implementation of Right to Public Services – revised service timelines",
      mr: "शासन निर्णय: लोकसेवा हक्क – सुधारित सेवा कालमर्यादा",
      hi: "शासन निर्णय: लोक सेवा अधिकार – संशोधित सेवा समय-सीमा",
    },
    category: "general",
    date: "2026-08-25",
    file: "/documents/circulars/rts-revised-timelines.pdf",
    fileSize: "3 pages",
    referenceNo: "UDD/RTS/2026/CR-45",
    isNew: true,
  },
  {
    id: "c-2026-05",
    title: {
      en: "Circular: Ban on single-use plastic within municipal limits",
      mr: "परिपत्रक: नगर परिषद हद्दीत एकल-वापर प्लास्टिक बंदी",
      hi: "परिपत्र: नगर सीमा में एकल-उपयोग प्लास्टिक पर प्रतिबंध",
    },
    category: "health",
    date: "2026-07-15",
    file: "/documents/circulars/plastic-ban.pdf",
    fileSize: "2 pages",
    referenceNo: "NPD/HS/CIR/2026/03",
  },
  {
    id: "c-2026-04",
    title: {
      en: "GR: Revised property tax assessment guidelines for Municipal Councils",
      mr: "शासन निर्णय: नगर परिषदांसाठी सुधारित मालमत्ता कर आकारणी मार्गदर्शक सूचना",
      hi: "शासन निर्णय: नगर परिषदों हेतु संशोधित संपत्ति कर निर्धारण दिशानिर्देश",
    },
    category: "tax",
    date: "2026-06-02",
    file: "/documents/circulars/property-tax-guidelines.pdf",
    fileSize: "5 pages",
    referenceNo: "UDD/NP/2026/CR-112",
  },
  {
    id: "c-2026-03",
    title: {
      en: "Circular: Rainwater harvesting mandatory for new buildings",
      mr: "परिपत्रक: नवीन इमारतींसाठी पर्जन्यजल संधारण बंधनकारक",
      hi: "परिपत्र: नए भवनों के लिए वर्षा जल संचयन अनिवार्य",
    },
    category: "planning",
    date: "2026-05-11",
    file: "/documents/circulars/rainwater-harvesting.pdf",
    fileSize: "2 pages",
    referenceNo: "NPD/TP/CIR/2026/02",
  },
  {
    id: "c-2026-02",
    title: {
      en: "GR: Online registration of births and deaths through CRS portal",
      mr: "शासन निर्णय: सीआरएस पोर्टलद्वारे जन्म व मृत्यू ऑनलाइन नोंदणी",
      hi: "शासन निर्णय: सीआरएस पोर्टल द्वारा जन्म एवं मृत्यु ऑनलाइन पंजीकरण",
    },
    category: "certificate",
    date: "2026-03-18",
    file: "/documents/circulars/crs-online-registration.pdf",
    fileSize: "2 pages",
    referenceNo: "PHD/RBD/2026/CR-08",
  },
  {
    id: "c-2026-01",
    title: {
      en: "Circular: Office timings and citizen charter display",
      mr: "परिपत्रक: कार्यालयीन वेळ व नागरिक सनद प्रदर्शित करणे",
      hi: "परिपत्र: कार्यालय समय एवं नागरिक चार्टर प्रदर्शन",
    },
    category: "general",
    date: "2026-01-05",
    file: "/documents/circulars/office-timings-citizen-charter.pdf",
    fileSize: "1 page",
    referenceNo: "NPD/GA/CIR/2026/01",
  },
];
