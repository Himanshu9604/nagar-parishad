import type { Department } from "@/types";

/**
 * Departments of the Nagar Parishad. Each entry automatically gets its own page
 * at /departments/<slug>. VERIFY heads and contact numbers.
 */
export const departments: Department[] = [
  {
    slug: "general-administration",
    name: { en: "General Administration", mr: "सामान्य प्रशासन", hi: "सामान्य प्रशासन" },
    icon: "landmark",
    head: "Administrative Officer",
    phone: "07222-000004",
    email: "admin.dhamangaonrly@gmail.com",
    summary: {
      en: "Establishment, records, council meetings, RTI and coordination of all departments.",
      mr: "आस्थापना, अभिलेख, सर्वसाधारण सभा, माहितीचा अधिकार व सर्व विभागांचे समन्वय.",
      hi: "स्थापना, अभिलेख, परिषद बैठकें, सूचना का अधिकार और सभी विभागों का समन्वय।",
    },
    functions: [
      "Establishment and service matters of employees",
      "Organising General Body and Standing Committee meetings",
      "Record room management and certified copies",
      "Right to Information (RTI) applications and appeals",
      "Inward / outward correspondence",
    ],
    services: ["RTI application", "Certified copies of records", "No-dues certificate"],
  },
  {
    slug: "tax",
    name: { en: "Tax & Revenue", mr: "कर व वसुली", hi: "कर एवं राजस्व" },
    icon: "receipt",
    head: "Tax Superintendent",
    phone: "07222-000008",
    summary: {
      en: "Property tax assessment, billing, collection, mutation and tax-related certificates.",
      mr: "मालमत्ता कर आकारणी, देयके, वसुली, फेरफार व कराशी संबंधित दाखले.",
      hi: "संपत्ति कर निर्धारण, बिलिंग, वसूली, नामांतरण और कर संबंधी प्रमाणपत्र।",
    },
    functions: [
      "Quadrennial assessment of properties",
      "Issue of property tax bills and demand notices",
      "Collection of property, water and other taxes",
      "Mutation (transfer) of property records",
      "Hearing of assessment objections",
    ],
    services: ["Property tax payment", "Mutation / name transfer", "Assessment extract (Utara)", "No-dues certificate"],
  },
  {
    slug: "water-supply",
    name: { en: "Water Supply", mr: "पाणीपुरवठा", hi: "जलापूर्ति" },
    icon: "droplets",
    head: "Water Supply Engineer",
    phone: "07222-000009",
    summary: {
      en: "Operation of water treatment and distribution, new connections, water billing and leak repairs.",
      mr: "जलशुद्धीकरण व वितरण, नवीन नळ जोडणी, पाणी देयके व गळती दुरुस्ती.",
      hi: "जल शोधन एवं वितरण, नए नल कनेक्शन, जल बिलिंग और रिसाव मरम्मत।",
    },
    functions: [
      "Operation & maintenance of water treatment plant and ESRs",
      "Daily supply scheduling across wards",
      "New tap connections and disconnections",
      "Water quality testing",
      "Pipeline leak and contamination complaints",
    ],
    services: ["New tap connection", "Water bill payment", "Change of connection name", "Tanker on request"],
  },
  {
    slug: "health-sanitation",
    name: { en: "Health & Sanitation", mr: "आरोग्य व स्वच्छता", hi: "स्वास्थ्य एवं स्वच्छता" },
    icon: "leaf",
    head: "Sanitary Inspector",
    phone: "07222-000007",
    summary: {
      en: "Solid waste management, drain cleaning, public toilets, vector control and Swachh Bharat Mission.",
      mr: "घनकचरा व्यवस्थापन, नाली सफाई, सार्वजनिक शौचालये, डास निर्मूलन व स्वच्छ भारत अभियान.",
      hi: "ठोस अपशिष्ट प्रबंधन, नाली सफाई, सार्वजनिक शौचालय, मच्छर नियंत्रण और स्वच्छ भारत मिशन।",
    },
    functions: [
      "Door-to-door segregated waste collection",
      "Scientific processing at the compost / MRF facility",
      "Drain and road sweeping",
      "Fogging and anti-larval measures",
      "Maintenance of public and community toilets",
    ],
    services: ["Garbage collection complaint", "Septic tank cleaning", "Dead animal removal", "Fogging request"],
  },
  {
    slug: "public-works",
    name: { en: "Public Works (Construction)", mr: "बांधकाम विभाग", hi: "लोक निर्माण विभाग" },
    icon: "hardhat",
    head: "Municipal Engineer",
    phone: "07222-000005",
    summary: {
      en: "Roads, drains, public buildings, gardens and all capital works of the Nagar Parishad.",
      mr: "रस्ते, नाल्या, सार्वजनिक इमारती, उद्याने व नगर परिषदेची सर्व भांडवली कामे.",
      hi: "सड़कें, नालियाँ, सार्वजनिक भवन, उद्यान और नगर परिषद के सभी पूंजीगत कार्य।",
    },
    functions: [
      "Construction and repair of roads and drains",
      "Preparation of estimates and tender documents",
      "Supervision and quality control of works",
      "Maintenance of Nagar Parishad buildings and gardens",
    ],
    services: ["Road digging permission", "Work completion certificate"],
  },
  {
    slug: "town-planning",
    name: { en: "Town Planning", mr: "नगररचना", hi: "नगर नियोजन" },
    icon: "map",
    head: "Town Planning Assistant",
    phone: "07222-000010",
    summary: {
      en: "Building permissions, layout approvals, occupancy certificates and Development Plan implementation.",
      mr: "बांधकाम परवानगी, अभिन्यास मंजुरी, भोगवटा प्रमाणपत्र व विकास आराखडा अंमलबजावणी.",
      hi: "भवन अनुमति, लेआउट स्वीकृति, अधिभोग प्रमाणपत्र और विकास योजना का क्रियान्वयन।",
    },
    functions: [
      "Scrutiny of building plans as per UDCPR",
      "Issue of building permission and commencement certificate",
      "Occupancy / completion certificates",
      "Zone certificates and Development Plan remarks",
      "Action against unauthorised construction",
    ],
    services: ["Building permission", "Occupancy certificate", "Zone certificate"],
  },
  {
    slug: "electricity",
    name: { en: "Street Lights & Electrical", mr: "विद्युत विभाग", hi: "विद्युत विभाग" },
    icon: "lightbulb",
    head: "Electrical Engineer",
    phone: "07222-000011",
    summary: {
      en: "Installation and maintenance of LED street lights, high-mast lamps and electrical installations.",
      mr: "एलईडी पथदिवे, हायमास्ट दिवे व विद्युत यंत्रणेची उभारणी व देखभाल.",
      hi: "एलईडी स्ट्रीट लाइट, हाई-मास्ट लैंप और विद्युत प्रतिष्ठानों की स्थापना एवं रखरखाव।",
    },
    functions: ["Street light maintenance", "New street light installation", "Energy audit of pumping stations"],
    services: ["Street light complaint"],
  },
  {
    slug: "birth-death",
    name: { en: "Birth & Death Registration", mr: "जन्म-मृत्यू नोंदणी", hi: "जन्म-मृत्यु पंजीकरण" },
    icon: "baby",
    head: "Registrar of Births & Deaths",
    phone: "07222-000012",
    summary: {
      en: "Registration of births, deaths and still-births within municipal limits and issue of certificates.",
      mr: "नगर परिषद हद्दीतील जन्म, मृत्यू व मृत जन्म नोंदणी व प्रमाणपत्रे.",
      hi: "नगर सीमा के भीतर जन्म, मृत्यु और मृत जन्म का पंजीकरण एवं प्रमाणपत्र।",
    },
    functions: [
      "Registration under the RBD Act, 1969",
      "Issue of birth and death certificates",
      "Delayed registration and name inclusion",
      "Upload of records on CRS portal",
    ],
    services: ["Birth certificate", "Death certificate", "Name inclusion in birth record"],
  },
  {
    slug: "fire",
    name: { en: "Fire & Emergency Services", mr: "अग्निशमन सेवा", hi: "अग्निशमन सेवा" },
    icon: "flame",
    head: "Fire Officer",
    phone: "101",
    summary: {
      en: "Fire fighting, rescue operations, fire safety inspections and fire NOC.",
      mr: "आग विझवणे, बचाव कार्य, अग्निसुरक्षा तपासणी व अग्निशमन ना-हरकत दाखला.",
      hi: "अग्निशमन, बचाव कार्य, अग्नि सुरक्षा निरीक्षण और फायर एनओसी।",
    },
    functions: ["24×7 fire response", "Fire NOC for buildings", "Awareness drills in schools"],
    services: ["Fire NOC"],
  },
  {
    slug: "accounts",
    name: { en: "Accounts & Audit", mr: "लेखा व लेखापरीक्षण", hi: "लेखा एवं लेखा परीक्षा" },
    icon: "wallet",
    head: "Accounts Officer",
    phone: "07222-000006",
    summary: {
      en: "Budget preparation, accrual-based accounting, payments to contractors and audit compliance.",
      mr: "अर्थसंकल्प, लेखे, कंत्राटदारांची देयके व लेखापरीक्षण अनुपालन.",
      hi: "बजट निर्माण, लेखांकन, ठेकेदारों को भुगतान और लेखा परीक्षा अनुपालन।",
    },
    functions: ["Annual budget", "Double-entry accrual accounting", "Payments & receipts", "Audit compliance"],
  },
  {
    slug: "women-child-welfare",
    name: { en: "Women, Child & Social Welfare", mr: "महिला, बालकल्याण व समाजकल्याण", hi: "महिला, बाल एवं समाज कल्याण" },
    icon: "heart",
    head: "Community Organiser (NULM)",
    phone: "07222-000013",
    summary: {
      en: "DAY-NULM, self-help groups, welfare of women, children, divyang and senior citizens.",
      mr: "दीनदयाळ अंत्योदय योजना, बचत गट, महिला, बालके, दिव्यांग व ज्येष्ठ नागरिक कल्याण.",
      hi: "दीनदयाल अंत्योदय योजना, स्वयं सहायता समूह, महिला, बाल, दिव्यांग एवं वरिष्ठ नागरिक कल्याण।",
    },
    functions: ["Formation of SHGs", "Skill training", "Divyang welfare fund (5%)", "Street vendor support"],
    services: ["SHG registration", "Divyang assistance"],
  },
  {
    slug: "education",
    name: { en: "Education", mr: "शिक्षण विभाग", hi: "शिक्षा विभाग" },
    icon: "graduation",
    head: "Administrative Officer (Education)",
    phone: "07222-000014",
    summary: {
      en: "Management of Nagar Parishad primary schools, libraries and education schemes.",
      mr: "नगर परिषद प्राथमिक शाळा, वाचनालय व शैक्षणिक योजनांचे व्यवस्थापन.",
      hi: "नगर परिषद प्राथमिक विद्यालयों, पुस्तकालयों और शिक्षा योजनाओं का प्रबंधन।",
    },
    functions: ["Running municipal schools", "Mid-day meal coordination", "Scholarships", "Public library"],
  },
];

export function getDepartment(slug: string): Department | undefined {
  return departments.find((d) => d.slug === slug);
}
