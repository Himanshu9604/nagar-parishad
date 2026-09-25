import type { LText } from "@/types";
import { chiefOfficer, president, vicePresident } from "./leadership";
import { departments } from "./departments";
import { wardMembers } from "./wardMembers";

/**
 * Standard administrative hierarchy of a Municipal Council (Nagar Parishad) in
 * Maharashtra, under the Maharashtra Municipal Councils, Nagar Panchayats and
 * Industrial Townships Act, 1965. Edit names / add nodes here.
 */
export type OrgKind = "state" | "district" | "elected" | "committee" | "member" | "executive" | "dept" | "staff";

export interface OrgNode {
  id: string;
  title: LText;
  /** Person holding the post (optional). */
  holder?: LText;
  note?: LText;
  kind: OrgKind;
  href?: string;
  children?: OrgNode[];
}

/** Government chain above the Nagar Parishad (top → down). */
export const governmentChain: OrgNode[] = [
  {
    id: "gom",
    kind: "state",
    title: { en: "Government of Maharashtra", mr: "महाराष्ट्र शासन", hi: "महाराष्ट्र शासन" },
    note: { en: "Urban Development Department (UDD), Mantralaya, Mumbai", mr: "नगर विकास विभाग, मंत्रालय, मुंबई", hi: "नगर विकास विभाग, मंत्रालय, मुंबई" },
  },
  {
    id: "dma",
    kind: "state",
    title: { en: "Commissioner & Director, Municipal Administration", mr: "आयुक्त तथा संचालक, नगरपरिषद प्रशासन", hi: "आयुक्त एवं संचालक, नगर परिषद प्रशासन" },
    note: { en: "Directorate of Municipal Administration (DMA), Mumbai", mr: "नगरपरिषद प्रशासन संचालनालय, मुंबई", hi: "नगर परिषद प्रशासन संचालनालय, मुंबई" },
  },
  {
    id: "divcom",
    kind: "district",
    title: { en: "Divisional Commissioner, Amravati Division", mr: "विभागीय आयुक्त, अमरावती विभाग", hi: "संभागीय आयुक्त, अमरावती संभाग" },
    note: { en: "with Regional Deputy Director, Municipal Administration", mr: "प्रादेशिक उपसंचालक, नगरपरिषद प्रशासन", hi: "क्षेत्रीय उपसंचालक, नगर परिषद प्रशासन" },
  },
  {
    id: "collector",
    kind: "district",
    title: { en: "District Collector, Amravati", mr: "जिल्हाधिकारी, अमरावती", hi: "ज़िलाधिकारी, अमरावती" },
    note: { en: "with District Administration Officer (Municipal Administration)", mr: "जिल्हा प्रशासन अधिकारी (नगरपरिषद प्रशासन)", hi: "ज़िला प्रशासन अधिकारी (नगर परिषद प्रशासन)" },
  },
];

const committees: OrgNode[] = [
  { en: "Standing Committee", mr: "स्थायी समिती", hi: "स्थायी समिति" },
  { en: "Public Works Committee", mr: "सार्वजनिक बांधकाम समिती", hi: "लोक निर्माण समिति" },
  { en: "Water Supply & Drainage Committee", mr: "पाणीपुरवठा व जलनिस्सारण समिती", hi: "जलापूर्ति एवं जल निकासी समिति" },
  { en: "Sanitation, Medical & Public Health Committee", mr: "स्वच्छता, वैद्यक व सार्वजनिक आरोग्य समिती", hi: "स्वच्छता, चिकित्सा एवं जन स्वास्थ्य समिति" },
  { en: "Education, Sports & Cultural Affairs Committee", mr: "शिक्षण, क्रीडा व सांस्कृतिक कार्य समिती", hi: "शिक्षा, खेल एवं सांस्कृतिक समिति" },
  { en: "Planning & Development Committee", mr: "नियोजन व विकास समिती", hi: "नियोजन एवं विकास समिति" },
  { en: "Women & Child Welfare Committee", mr: "महिला व बालकल्याण समिती", hi: "महिला एवं बाल कल्याण समिति" },
].map((title, i) => ({
  id: `committee-${i}`,
  kind: "committee" as const,
  title,
  // Water Supply committee chairperson as reported in the news (Apr 2026)
  ...(i === 2 ? { holder: { en: "Vilas Butle", mr: "विलास बुटले", hi: "विलास बुटले" } } : {}),
  note: i === 0
    ? { en: "Chaired by the President", mr: "अध्यक्ष: नगराध्यक्ष", hi: "अध्यक्ष: नगराध्यक्ष" }
    : { en: "Chaired by a Subject Committee Chairperson", mr: "सभापती: विषय समिती सभापती", hi: "सभापति: विषय समिति सभापति" },
}));

/** Deliberative (elected) wing. */
export const electedWing: OrgNode = {
  id: "general-body",
  kind: "elected",
  title: { en: "General Body (Sarvasadharan Sabha)", mr: "सर्वसाधारण सभा", hi: "सामान्य सभा" },
  note: { en: "All elected members — highest decision-making body", mr: "सर्व निर्वाचित सदस्य — सर्वोच्च निर्णय घेणारी सभा", hi: "सभी निर्वाचित सदस्य — सर्वोच्च निर्णय लेने वाली सभा" },
  children: [
    {
      id: "president",
      kind: "elected",
      title: president.designation,
      holder: president.name,
      href: "/leadership",
      note: { en: "Directly elected; presides over the General Body", mr: "थेट निवडून आलेले; सर्वसाधारण सभेचे अध्यक्ष", hi: "प्रत्यक्ष निर्वाचित; सामान्य सभा के अध्यक्ष" },
      children: [
        { id: "vice-president", kind: "elected", title: vicePresident.designation, holder: vicePresident.name, href: "/leadership" },
        {
          id: "committees",
          kind: "committee",
          title: { en: "Committees", mr: "समित्या", hi: "समितियाँ" },
          children: committees,
        },
        {
          id: "ward-members",
          kind: "member",
          title: { en: `Ward Members (${wardMembers.length} Nagarsevak)`, mr: `नगरसेवक (${wardMembers.length})`, hi: `पार्षद (${wardMembers.length})` },
          href: "/ward-members",
          children: wardMembers.map((m) => ({
            id: `wm-${m.id}`,
            kind: "member" as const,
            title: {
              en: `Ward ${m.wardNo}${m.seat ? ` (Seat ${m.seat})` : ""} – ${m.area.en}`,
              mr: `प्रभाग ${m.wardNo}${m.seat ? ` (जागा ${m.seat})` : ""} – ${m.area.mr ?? m.area.en}`,
              hi: `वार्ड ${m.wardNo}${m.seat ? ` (सीट ${m.seat})` : ""} – ${m.area.hi ?? m.area.en}`,
            },
            holder: m.name,
            href: `/wards/${m.wardNo}`,
          })),
        },
      ],
    },
  ],
};

/** Executive (administrative) wing. */
export const executiveWing: OrgNode = {
  id: "chief-officer",
  kind: "executive",
  title: chiefOfficer.designation,
  holder: chiefOfficer.name,
  href: "/leadership",
  note: {
    en: "Appointed by the State Government; administrative head & secretary to the General Body",
    mr: "राज्य शासनाद्वारे नियुक्त; प्रशासकीय प्रमुख व सर्वसाधारण सभेचे सचिव",
    hi: "राज्य सरकार द्वारा नियुक्त; प्रशासनिक प्रमुख एवं सामान्य सभा के सचिव",
  },
  children: departments.map((d) => ({
    id: `dept-${d.slug}`,
    kind: "dept" as const,
    title: d.name,
    holder: { en: d.head },
    href: `/departments/${d.slug}`,
    children: [
      {
        id: `staff-${d.slug}`,
        kind: "staff" as const,
        title: { en: "Section staff, clerks & field workers", mr: "विभागीय कर्मचारी, लिपिक व क्षेत्रीय कर्मचारी", hi: "अनुभाग कर्मचारी, लिपिक एवं क्षेत्रीय कर्मचारी" },
      },
    ],
  })),
};

/** Standard governance / decision cycle of a Nagar Parishad. */
export const governanceCycle: { title: LText; text: LText }[] = [
  {
    title: { en: "Citizens", mr: "नागरिक", hi: "नागरिक" },
    text: { en: "Raise needs, complaints and suggestions", mr: "गरजा, तक्रारी व सूचना मांडतात", hi: "ज़रूरतें, शिकायतें एवं सुझाव रखते हैं" },
  },
  {
    title: { en: "Ward Member", mr: "नगरसेवक", hi: "पार्षद" },
    text: { en: "Takes up ward issues and proposals", mr: "प्रभागातील प्रश्न व प्रस्ताव मांडतात", hi: "वार्ड के मुद्दे एवं प्रस्ताव उठाते हैं" },
  },
  {
    title: { en: "Committees", mr: "समित्या", hi: "समितियाँ" },
    text: { en: "Examine proposals, estimates and budgets", mr: "प्रस्ताव, अंदाजपत्रके व अर्थसंकल्प तपासतात", hi: "प्रस्ताव, अनुमान एवं बजट की जाँच करती हैं" },
  },
  {
    title: { en: "General Body", mr: "सर्वसाधारण सभा", hi: "सामान्य सभा" },
    text: { en: "Passes resolutions under the President", mr: "नगराध्यक्षांच्या अध्यक्षतेखाली ठराव मंजूर करते", hi: "नगराध्यक्ष की अध्यक्षता में प्रस्ताव पारित करती है" },
  },
  {
    title: { en: "Chief Officer", mr: "मुख्याधिकारी", hi: "मुख्य अधिकारी" },
    text: { en: "Issues orders, sanctions & tenders", mr: "आदेश, मंजुरी व निविदा प्रक्रिया राबवतात", hi: "आदेश, स्वीकृति एवं निविदा जारी करते हैं" },
  },
  {
    title: { en: "Departments", mr: "विभाग", hi: "विभाग" },
    text: { en: "Execute works & deliver services back to citizens", mr: "कामे पूर्ण करून नागरिकांना सेवा देतात", hi: "कार्य पूरे कर नागरिकों को सेवाएँ देते हैं" },
  },
];
