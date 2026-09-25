import type { DocumentItem } from "@/types";

/**
 * Notices & announcements.
 * To publish a new notice:
 *   1. Copy the PDF into /public/documents/notices/
 *   2. Add an entry at the TOP of this list (newest first is not required — lists are sorted by date).
 */
export const notices: DocumentItem[] = [
  {
    id: "n-2026-014",
    title: {
      en: "Property tax: 5% rebate on full payment before 30 September",
      mr: "मालमत्ता कर: ३० सप्टेंबरपूर्वी पूर्ण भरणा केल्यास ५% सवलत",
      hi: "संपत्ति कर: 30 सितंबर से पहले पूर्ण भुगतान पर 5% छूट",
    },
    summary: { en: "Citizens paying the full current-year property tax before the due date will receive a 5% rebate." },
    category: "tax",
    date: "2026-09-10",
    file: "/documents/notices/property-tax-rebate-2026.pdf",
    fileSize: "1 page",
    referenceNo: "NPD/TAX/2026/214",
    isNew: true,
    important: true,
  },
  {
    id: "n-2026-013",
    title: {
      en: "Water supply shutdown on 28 September for pipeline maintenance",
      mr: "पाईपलाईन दुरुस्तीसाठी २८ सप्टेंबर रोजी पाणीपुरवठा बंद",
      hi: "पाइपलाइन रखरखाव हेतु 28 सितंबर को जलापूर्ति बंद",
    },
    summary: { en: "Supply will remain suspended in Wards 3, 7 and 11 from 8:00 AM to 6:00 PM." },
    category: "water",
    date: "2026-09-20",
    file: "/documents/notices/water-shutdown-sept-2026.pdf",
    fileSize: "1 page",
    referenceNo: "NPD/WS/2026/118",
    isNew: true,
  },
  {
    id: "n-2026-012",
    title: {
      en: "Swachh Survekshan 2026 – citizen feedback drive",
      mr: "स्वच्छ सर्वेक्षण २०२६ – नागरिक अभिप्राय मोहीम",
      hi: "स्वच्छ सर्वेक्षण 2026 – नागरिक प्रतिक्रिया अभियान",
    },
    summary: { en: "All citizens are requested to participate and give feedback for Swachh Survekshan 2026." },
    category: "health",
    date: "2026-09-05",
    file: "/documents/notices/swachh-survekshan-2026.pdf",
    fileSize: "1 page",
    referenceNo: "NPD/SBM/2026/77",
    isNew: true,
  },
  {
    id: "n-2026-011",
    title: {
      en: "Notice for General Body Meeting – October 2026",
      mr: "सर्वसाधारण सभा सूचना – ऑक्टोबर २०२६",
      hi: "सामान्य सभा बैठक सूचना – अक्टूबर 2026",
    },
    category: "meeting",
    date: "2026-09-18",
    file: "/documents/notices/general-body-meeting-oct-2026.pdf",
    fileSize: "2 pages",
    referenceNo: "NPD/GA/2026/301",
  },
  {
    id: "n-2026-010",
    title: {
      en: "Anti-dengue fogging schedule – monsoon 2026",
      mr: "डेंग्यू प्रतिबंधक धूर फवारणी वेळापत्रक – पावसाळा २०२६",
      hi: "डेंगू रोधी फॉगिंग समय-सारिणी – मानसून 2026",
    },
    category: "health",
    date: "2026-08-12",
    file: "/documents/notices/fogging-schedule-2026.pdf",
    fileSize: "1 page",
    referenceNo: "NPD/HS/2026/64",
  },
  {
    id: "n-2026-009",
    title: {
      en: "Recruitment of contractual data entry operators",
      mr: "कंत्राटी डेटा एंट्री ऑपरेटर भरती",
      hi: "संविदा डेटा एंट्री ऑपरेटर भर्ती",
    },
    category: "recruitment",
    date: "2026-08-01",
    file: "/documents/notices/recruitment-deo-2026.pdf",
    fileSize: "3 pages",
    referenceNo: "NPD/EST/2026/55",
  },
  {
    id: "n-2026-008",
    title: {
      en: "Draft ward-wise voter list – objections and suggestions",
      mr: "प्रारूप प्रभागनिहाय मतदार यादी – हरकती व सूचना",
      hi: "प्रारूप वार्डवार मतदाता सूची – आपत्तियाँ एवं सुझाव",
    },
    category: "election",
    date: "2026-07-22",
    file: "/documents/notices/draft-voter-list-2026.pdf",
    fileSize: "1 page",
    referenceNo: "NPD/ELE/2026/12",
  },
  {
    id: "n-2026-007",
    title: {
      en: "Removal of encroachments on Main Road and Station Road",
      mr: "मुख्य रस्ता व स्टेशन रोडवरील अतिक्रमण हटविणे",
      hi: "मुख्य मार्ग और स्टेशन रोड पर अतिक्रमण हटाना",
    },
    category: "planning",
    date: "2026-07-10",
    file: "/documents/notices/encroachment-removal-2026.pdf",
    fileSize: "1 page",
    referenceNo: "NPD/TP/2026/41",
  },
  {
    id: "n-2026-006",
    title: {
      en: "Annual Budget 2026-27 approved by General Body",
      mr: "वार्षिक अर्थसंकल्प २०२६-२७ सर्वसाधारण सभेत मंजूर",
      hi: "वार्षिक बजट 2026-27 सामान्य सभा द्वारा स्वीकृत",
    },
    category: "finance",
    date: "2026-03-28",
    file: "/documents/notices/budget-2026-27.pdf",
    fileSize: "4 pages",
    referenceNo: "NPD/ACC/2026/09",
  },
];
