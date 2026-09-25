import type { Tender } from "@/types";

/**
 * Tenders & quotations. Tender PDFs live in /public/documents/tenders/.
 * ⚠ SAMPLE DATA — replace with actual tender notices.
 */
export const MAHATENDERS_URL = "https://mahatenders.gov.in";

export const tenders: Tender[] = [
  {
    id: "t-2026-09",
    tenderNo: "NPD/PWD/ET/09/2026-27",
    title: {
      en: "Construction of cement concrete road and RCC drain in Ward No. 4",
      mr: "प्रभाग क्र. ४ मध्ये सिमेंट काँक्रीट रस्ता व आरसीसी नाली बांधकाम",
      hi: "वार्ड क्र. 4 में सीमेंट कंक्रीट सड़क एवं आरसीसी नाली निर्माण",
    },
    department: "Public Works",
    estimatedCost: "₹ 48,60,000",
    emd: "₹ 48,600",
    publishDate: "2026-09-15",
    closingDate: "2026-10-06",
    openingDate: "2026-10-08",
    status: "open",
    file: "/documents/tenders/cc-road-ward-4.pdf",
    portalUrl: MAHATENDERS_URL,
  },
  {
    id: "t-2026-08",
    tenderNo: "NPD/WS/ET/08/2026-27",
    title: {
      en: "Supply of liquid chlorine and alum for water treatment plant (annual rate contract)",
      mr: "जलशुद्धीकरण केंद्रासाठी द्रव क्लोरीन व तुरटी पुरवठा (वार्षिक दरकरार)",
      hi: "जल शोधन संयंत्र हेतु तरल क्लोरीन एवं फिटकरी आपूर्ति (वार्षिक दर अनुबंध)",
    },
    department: "Water Supply",
    estimatedCost: "₹ 12,50,000",
    emd: "₹ 12,500",
    publishDate: "2026-09-08",
    closingDate: "2026-09-29",
    status: "open",
    file: "/documents/tenders/chlorine-alum-supply.pdf",
    portalUrl: MAHATENDERS_URL,
  },
  {
    id: "t-2026-07",
    tenderNo: "NPD/EL/ET/07/2026-27",
    title: {
      en: "Replacement of conventional street lights with LED fittings – Phase II",
      mr: "पारंपरिक पथदिव्यांच्या जागी एलईडी दिवे बसविणे – टप्पा २",
      hi: "पारंपरिक स्ट्रीट लाइट के स्थान पर एलईडी फिटिंग – चरण 2",
    },
    department: "Electrical",
    estimatedCost: "₹ 27,40,000",
    emd: "₹ 27,400",
    publishDate: "2026-08-20",
    closingDate: "2026-09-10",
    status: "closed",
    file: "/documents/tenders/led-streetlights-phase-2.pdf",
    portalUrl: MAHATENDERS_URL,
  },
  {
    id: "t-2026-06",
    tenderNo: "NPD/HS/ET/06/2026-27",
    title: {
      en: "Door-to-door collection and transportation of segregated solid waste (3 years)",
      mr: "वर्गीकृत घनकचरा घरोघरी संकलन व वाहतूक (३ वर्षे)",
      hi: "पृथक ठोस अपशिष्ट का घर-घर संग्रह एवं परिवहन (3 वर्ष)",
    },
    department: "Health & Sanitation",
    estimatedCost: "₹ 1,86,00,000",
    emd: "₹ 1,86,000",
    publishDate: "2026-07-01",
    closingDate: "2026-07-25",
    status: "awarded",
    file: "/documents/tenders/swm-collection.pdf",
    portalUrl: MAHATENDERS_URL,
  },
  {
    id: "t-2026-05",
    tenderNo: "NPD/PWD/Q/05/2026-27",
    title: {
      en: "Quotation for painting and minor repairs of Nagar Parishad school buildings",
      mr: "नगर परिषद शाळा इमारतींचे रंगकाम व किरकोळ दुरुस्तीसाठी दरपत्रक",
      hi: "नगर परिषद विद्यालय भवनों की पुताई एवं छोटी मरम्मत हेतु कोटेशन",
    },
    department: "Public Works",
    estimatedCost: "₹ 2,95,000",
    publishDate: "2026-06-10",
    closingDate: "2026-06-20",
    status: "cancelled",
    file: "/documents/tenders/school-painting-quotation.pdf",
  },
];
