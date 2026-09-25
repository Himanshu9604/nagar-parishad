import type { Service } from "@/types";

/**
 * Citizen services shown on the home page and /services.
 * Timelines follow the Maharashtra Right to Public Services Act, 2015 notifications — VERIFY locally.
 * `href` links to a detailed page; `onlineUrl` links to an official online portal.
 */
export const services: Service[] = [
  {
    slug: "birth-certificate",
    title: { en: "Birth Certificate", mr: "जन्म प्रमाणपत्र", hi: "जन्म प्रमाणपत्र" },
    icon: "baby",
    summary: {
      en: "Register a birth and obtain certified birth certificate copies.",
      mr: "जन्म नोंदणी करा व जन्म प्रमाणपत्राच्या प्रमाणित प्रती मिळवा.",
      hi: "जन्म पंजीकरण करें और प्रमाणित जन्म प्रमाणपत्र प्राप्त करें।",
    },
    department: "Birth & Death Registration",
    timeline: "7 days",
    fee: "₹ 20 per copy",
    href: "/services/birth-death-certificate",
    onlineUrl: "https://crsorgi.gov.in",
  },
  {
    slug: "death-certificate",
    title: { en: "Death Certificate", mr: "मृत्यू प्रमाणपत्र", hi: "मृत्यु प्रमाणपत्र" },
    icon: "scroll",
    summary: {
      en: "Register a death and obtain certified death certificate copies.",
      mr: "मृत्यू नोंदणी करा व मृत्यू प्रमाणपत्र मिळवा.",
      hi: "मृत्यु पंजीकरण करें और मृत्यु प्रमाणपत्र प्राप्त करें।",
    },
    department: "Birth & Death Registration",
    timeline: "7 days",
    fee: "₹ 20 per copy",
    href: "/services/birth-death-certificate",
    onlineUrl: "https://crsorgi.gov.in",
  },
  {
    slug: "property-tax",
    title: { en: "Property Tax", mr: "मालमत्ता कर", hi: "संपत्ति कर" },
    icon: "receipt",
    summary: {
      en: "Know your assessment, pay property tax and get rebates for early payment.",
      mr: "आपली कर आकारणी जाणून घ्या, मालमत्ता कर भरा व लवकर भरण्यावर सवलत मिळवा.",
      hi: "अपना कर निर्धारण जानें, संपत्ति कर भरें और जल्दी भुगतान पर छूट पाएँ।",
    },
    department: "Tax & Revenue",
    timeline: "Same day (receipt)",
    href: "/services/property-tax",
  },
  {
    slug: "water-connection",
    title: { en: "Water Connection & Bill", mr: "नळ जोडणी व पाणी बिल", hi: "नल कनेक्शन एवं जल बिल" },
    icon: "droplets",
    summary: {
      en: "Apply for a new tap connection, pay water bills and check supply timings.",
      mr: "नवीन नळ जोडणीसाठी अर्ज, पाणी बिल भरणा व पाणीपुरवठा वेळ.",
      hi: "नए नल कनेक्शन के लिए आवेदन, जल बिल भुगतान और आपूर्ति समय।",
    },
    department: "Water Supply",
    timeline: "15 days",
    href: "/services/water-supply",
  },
  {
    slug: "grievance",
    title: { en: "Complaints & Grievance", mr: "तक्रार निवारण", hi: "शिकायत निवारण" },
    icon: "megaphone",
    summary: {
      en: "Report issues like garbage, drainage, street lights or water leakage.",
      mr: "कचरा, नाली, पथदिवे, पाणी गळती इत्यादी तक्रारी नोंदवा.",
      hi: "कचरा, नाली, स्ट्रीट लाइट या पानी रिसाव जैसी समस्याएँ दर्ज करें।",
    },
    department: "General Administration",
    timeline: "3 – 15 days",
    href: "/services/grievance",
  },
  {
    slug: "building-permission",
    title: { en: "Building Permission", mr: "बांधकाम परवानगी", hi: "भवन अनुमति" },
    icon: "building",
    summary: {
      en: "Approval of building plans, commencement and occupancy certificates.",
      mr: "बांधकाम नकाशा मंजुरी, बांधकाम प्रारंभ व भोगवटा प्रमाणपत्र.",
      hi: "भवन नक्शा स्वीकृति, निर्माण प्रारंभ एवं अधिभोग प्रमाणपत्र।",
    },
    department: "Town Planning",
    timeline: "30 days",
  },
  {
    slug: "trade-license",
    title: { en: "Trade Licence", mr: "व्यवसाय परवाना", hi: "व्यापार लाइसेंस" },
    icon: "store",
    summary: {
      en: "New trade / shop licence and annual renewal for businesses.",
      mr: "नवीन व्यवसाय परवाना व वार्षिक नूतनीकरण.",
      hi: "नया व्यापार लाइसेंस और वार्षिक नवीनीकरण।",
    },
    department: "Health & Sanitation",
    timeline: "15 days",
  },
  {
    slug: "no-dues",
    title: { en: "No-Dues Certificate", mr: "थकबाकी नसल्याचा दाखला", hi: "बकाया नहीं प्रमाणपत्र" },
    icon: "clipboard",
    summary: {
      en: "Certificate confirming no pending Nagar Parishad dues on a property.",
      mr: "मालमत्तेवर नगर परिषदेची कोणतीही थकबाकी नसल्याचा दाखला.",
      hi: "संपत्ति पर नगर परिषद का कोई बकाया न होने का प्रमाणपत्र।",
    },
    department: "Tax & Revenue",
    timeline: "7 days",
    fee: "₹ 100",
  },
  {
    slug: "marriage-registration",
    title: { en: "Marriage Registration", mr: "विवाह नोंदणी", hi: "विवाह पंजीकरण" },
    icon: "heart",
    summary: {
      en: "Registration of marriages under the Maharashtra Regulation of Marriage Bureaus and Registration of Marriages Act.",
      mr: "महाराष्ट्र विवाह मंडळ विनियमन व विवाह नोंदणी अधिनियमांतर्गत विवाह नोंदणी.",
      hi: "महाराष्ट्र विवाह पंजीकरण अधिनियम के अंतर्गत विवाह पंजीकरण।",
    },
    department: "Birth & Death Registration",
    timeline: "7 days",
  },
  {
    slug: "fire-noc",
    title: { en: "Fire NOC", mr: "अग्निशमन ना-हरकत दाखला", hi: "फायर एनओसी" },
    icon: "flame",
    summary: {
      en: "Fire safety No-Objection Certificate for buildings and establishments.",
      mr: "इमारती व आस्थापनांसाठी अग्निसुरक्षा ना-हरकत दाखला.",
      hi: "भवनों एवं प्रतिष्ठानों के लिए अग्नि सुरक्षा अनापत्ति प्रमाणपत्र।",
    },
    department: "Fire & Emergency Services",
    timeline: "15 days",
  },
  {
    slug: "street-light",
    title: { en: "Street Light Complaint", mr: "पथदिवे तक्रार", hi: "स्ट्रीट लाइट शिकायत" },
    icon: "lightbulb",
    summary: {
      en: "Report non-working street lights in your area.",
      mr: "आपल्या परिसरातील बंद पथदिव्यांची तक्रार करा.",
      hi: "अपने क्षेत्र की बंद स्ट्रीट लाइट की शिकायत करें।",
    },
    department: "Street Lights & Electrical",
    timeline: "3 days",
    href: "/services/grievance",
  },
  {
    slug: "rti",
    title: { en: "Right to Information", mr: "माहितीचा अधिकार", hi: "सूचना का अधिकार" },
    icon: "scale",
    summary: {
      en: "Seek information under the RTI Act, 2005 from the Public Information Officer.",
      mr: "माहिती अधिकार अधिनियम, २००५ अंतर्गत जन माहिती अधिकाऱ्याकडून माहिती मागवा.",
      hi: "सूचना का अधिकार अधिनियम, 2005 के तहत जन सूचना अधिकारी से जानकारी माँगें।",
    },
    department: "General Administration",
    timeline: "30 days",
    fee: "₹ 10",
    href: "/rti",
    onlineUrl: "https://rtionline.maharashtra.gov.in",
  },
];

/** Services highlighted on the home page (by slug, in display order). */
export const featuredServiceSlugs = [
  "birth-certificate",
  "property-tax",
  "water-connection",
  "grievance",
  "building-permission",
  "trade-license",
  "no-dues",
  "rti",
];
