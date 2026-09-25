import type { Person } from "@/types";

/**
 * President, Vice-President, Chief Officer and elected councillors.
 *
 * ✅ Verified from public news reports (see `source`):
 *    President, Vice-President, Water Supply Committee chairperson and seven councillors.
 * ⚠ NOT YET VERIFIED: Chief Officer's name, ward numbers of councillors, direct phone numbers.
 *    Replace the placeholders with information from the Nagar Parishad office.
 *
 * Put photos in /public/images/people/ and set `photo: "/images/people/<file>"`.
 */

const EDUCATION_NOT_AVAILABLE_PERSON = {
  en: "Education / qualification details are not publicly available.",
  mr: "शैक्षणिक तपशील सार्वजनिकरित्या उपलब्ध नाहीत.",
  hi: "शैक्षणिक विवरण सार्वजनिक रूप से उपलब्ध नहीं है.",
};

const NEWS_APR_2026 = {
  label: "Navbharat Live, 4 Apr 2026",
  url: "https://navbharatlive.com/maharashtra/amravati/dhamangaon-railway-vegetable-vendors-handcarts-auction-archana-rothe-2026-1649432.html",
};

const RESULT_DEC_2025 = {
  label: "Tarun Bharat – municipal council results, 21 Dec 2025",
  url: "https://www.tarunbharat.net/Encyc/2025/12/21/names-of-the-winning-candidates.html",
};

export const president: Person = {
  id: "president",
  name: {
    en: "Dr. Archanatai Adsad-Rothe",
    mr: "डॉ. अर्चनाताई अडसड-रोठे",
    hi: "डॉ. अर्चनाताई अडसड-रोठे",
  },
  designation: { en: "President (Nagaradhyaksha)", mr: "नगराध्यक्ष", hi: "नगराध्यक्ष" },
  photo: "/images/people/president.svg",
  party: "BJP",
  since: "December 2025",
  phone: "07222-237050",
  // ⚠ Local news reports consistently address her as "Dr." (डॉ.), which implies a
  // doctoral / medical qualification, but no report specifies the degree or
  // subject, and Nagar Parishad candidate affidavits (unlike MLA/MP affidavits
  // on myneta.info) are not published online. Do not guess the degree — replace
  // `qualificationNote` with a real `qualification` once the Nagar Parishad or
  // her own affidavit confirms it.
  qualificationNote: {
    en: "Addressed as \u201cDr.\u201d in local news reports; the specific degree has not been verified from any public source.",
    mr: "स्थानिक वृत्तांमध्ये \u201cडॉ.\u201d असा उल्लेख आढळतो; नेमकी पदवी कोणत्याही सार्वजनिक स्रोतातून सत्यापित झालेली नाही.",
    hi: "स्थानीय समाचारों में \u201cडॉ.\u201d के रूप में उल्लेख मिलता है; सटीक उपाधि किसी सार्वजनिक स्रोत से सत्यापित नहीं हुई है.",
  },
  profile: {
    en: "Directly elected President of Nagar Parishad Dhamangaon Railway in the Maharashtra municipal council elections declared in December 2025 (Bharatiya Janata Party).",
    mr: "डिसेंबर २०२५ मध्ये जाहीर झालेल्या नगरपरिषद निवडणुकीत नगर परिषद धामणगाव रेल्वेच्या थेट निवडून आलेल्या नगराध्यक्ष (भारतीय जनता पक्ष).",
    hi: "दिसंबर 2025 में घोषित नगर परिषद चुनाव में नगर परिषद धामणगांव रेलवे की प्रत्यक्ष निर्वाचित नगराध्यक्ष (भारतीय जनता पार्टी)।",
  },
  source: RESULT_DEC_2025,
};

export const vicePresident: Person = {
  id: "vice-president",
  name: { en: "Girish Mundada", mr: "गिरीश मुंदडा", hi: "गिरीश मुंदडा" },
  designation: { en: "Vice-President (Upadhyaksha)", mr: "उपाध्यक्ष", hi: "उपाध्यक्ष" },
  photo: "/images/people/vice-president.svg",
  qualificationNote: EDUCATION_NOT_AVAILABLE_PERSON,
  source: NEWS_APR_2026,
};

export const chiefOfficer: Person = {
  // ⚠ Name not found in any public source — obtain from the Nagar Parishad office.
  id: "chief-officer",
  name: { en: "Chief Officer (name to be updated)", mr: "मुख्याधिकारी (नाव अद्ययावत करणे)", hi: "मुख्य अधिकारी (नाम अद्यतन करें)" },
  designation: {
    en: "Chief Officer (Mukhyadhikari)",
    mr: "मुख्याधिकारी",
    hi: "मुख्य अधिकारी",
  },
  photo: "/images/people/chief-officer.svg",
  phone: "07222-237050",
  qualificationNote: EDUCATION_NOT_AVAILABLE_PERSON,
  profile: {
    en: "The Chief Officer is appointed by the Government of Maharashtra (Maharashtra Chief Officer Services) and is the administrative head of the Nagar Parishad and secretary to the General Body.",
    mr: "मुख्याधिकारी महाराष्ट्र शासनाद्वारे (महाराष्ट्र मुख्याधिकारी सेवा) नियुक्त असून नगर परिषदेचे प्रशासकीय प्रमुख व सर्वसाधारण सभेचे सचिव असतात.",
    hi: "मुख्य अधिकारी महाराष्ट्र शासन (महाराष्ट्र मुख्य अधिकारी सेवा) द्वारा नियुक्त होते हैं तथा नगर परिषद के प्रशासनिक प्रमुख एवं सामान्य सभा के सचिव होते हैं।",
  },
};

/**
 * The confirmed elected councillors that used to live here (ward not yet
 * known) have been moved into the verified, ward-wise `wardMembers` array in
 * `src/data/wardMembers.ts` — all 20 seats, sourced from the State Election
 * Commission's official winning-candidate data. Kept as an empty array so
 * `app/leadership/page.tsx` does not need to change its import.
 */
export const electedCouncillors: Person[] = [];

/** Key officers shown on the leadership page. ⚠ Names to be updated. */
export const officers: Person[] = [
  {
    id: "ao",
    name: { en: "Administrative Officer (Name)", mr: "प्रशासकीय अधिकारी (नाव)" },
    designation: { en: "Administrative Officer", mr: "प्रशासकीय अधिकारी", hi: "प्रशासनिक अधिकारी" },
  },
  {
    id: "engineer",
    name: { en: "Municipal Engineer (Name)", mr: "नगर अभियंता (नाव)" },
    designation: { en: "Municipal Engineer", mr: "नगर अभियंता", hi: "नगर अभियंता" },
  },
  {
    id: "accounts",
    name: { en: "Accounts Officer (Name)", mr: "लेखापाल (नाव)" },
    designation: { en: "Accounts Officer", mr: "लेखा अधिकारी", hi: "लेखा अधिकारी" },
  },
  {
    id: "sanitary",
    name: { en: "Sanitary Inspector (Name)", mr: "स्वच्छता निरीक्षक (नाव)" },
    designation: { en: "Sanitary Inspector", mr: "स्वच्छता निरीक्षक", hi: "स्वच्छता निरीक्षक" },
  },
];

/** Area MLA (not part of the Nagar Parishad; shown for reference). */
export const localMla = {
  name: { en: "Pratap Adsad", mr: "प्रताप अडसड", hi: "प्रताप अडसड" },
  designation: { en: "MLA, Dhamangaon Railway Assembly Constituency", mr: "आमदार, धामणगाव रेल्वे विधानसभा मतदारसंघ", hi: "विधायक, धामणगांव रेलवे विधानसभा क्षेत्र" },
};
