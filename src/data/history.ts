import type { LText } from "@/types";

/**
 * History of Dhamangaon Railway & its Nagar Parishad.
 * Every entry carries a `source`. Entries without a reliable public source are
 * NOT invented — add them from council records (resolution books, gazette).
 */

export interface Source {
  label: string;
  url: string;
}

const WIKI_TOWN: Source = { label: "Wikipedia – Dattapur Dhamangaon", url: "https://en.wikipedia.org/wiki/Dattapur_Dhamangaon" };
const WIKI_ADSAD: Source = { label: "Wikipedia – Pratap Adsad", url: "https://en.wikipedia.org/wiki/Pratap_Adsad" };
const CENSUS: Source = { label: "Census 2011 (census2011.co.in)", url: "https://www.census2011.co.in/data/town/802693-dattapur-dhamangaon-maharashtra.html" };
const RESULT_2025: Source = { label: "Tarun Bharat, 21 Dec 2025", url: "https://www.tarunbharat.net/Encyc/2025/12/21/names-of-the-winning-candidates.html" };
const NEWS_2026: Source = {
  label: "Navbharat Live, 4 Apr 2026",
  url: "https://navbharatlive.com/maharashtra/amravati/dhamangaon-railway-vegetable-vendors-handcarts-auction-archana-rothe-2026-1649432.html",
};

export interface TimelineEvent {
  period: string;
  title: LText;
  text: LText;
  source?: Source;
}

export const timeline: TimelineEvent[] = [
  {
    period: "15th century",
    title: { en: "Early settlement", mr: "प्राचीन वस्ती", hi: "प्राचीन बस्ती" },
    text: {
      en: "According to local accounts, the earliest traces of settlement date to the late 15th century, when the place served as a halt for travellers on the route to Umbravati (today's Amravati).",
      mr: "स्थानिक माहितीनुसार वस्तीच्या सर्वात जुन्या खुणा १५व्या शतकाच्या उत्तरार्धातील असून उंबरावती (आजचे अमरावती) कडे जाणाऱ्या प्रवाशांसाठी हे विश्रांतीचे ठिकाण होते.",
      hi: "स्थानीय विवरणों के अनुसार बस्ती के सबसे पुराने निशान 15वीं सदी के उत्तरार्ध के हैं, जब यह उंबरावती (आज का अमरावती) जाने वाले यात्रियों का पड़ाव था।",
    },
    source: WIKI_TOWN,
  },
  {
    period: "1890 – 1940",
    title: { en: "A railway town takes shape", mr: "रेल्वे शहराची निर्मिती", hi: "रेलवे नगर का निर्माण" },
    text: {
      en: "The modern town grew as families from surrounding villages settled near the railway line. The station on the Howrah–Nagpur–Mumbai trunk route made Dhamangaon a trading centre for cotton and farm produce — and gave the town its name “Railway”.",
      mr: "आसपासच्या गावांतील कुटुंबे रेल्वे मार्गाजवळ स्थायिक झाल्याने आधुनिक शहर वाढले. हावडा–नागपूर–मुंबई मुख्य मार्गावरील स्थानकामुळे धामणगाव कापूस व शेतमालाचे व्यापारी केंद्र बनले — आणि शहराला “रेल्वे” हे नाव मिळाले.",
      hi: "आसपास के गाँवों के परिवार रेल लाइन के पास बसने लगे और आधुनिक नगर बना। हावड़ा–नागपुर–मुंबई मुख्य मार्ग के स्टेशन से धामणगांव कपास और कृषि उपज का व्यापार केंद्र बना — और नगर को “रेलवे” नाम मिला।",
    },
    source: WIKI_TOWN,
  },
  {
    period: "Municipal Council",
    title: { en: "Class ‘B’ Municipal Council, 17 wards", mr: "‘ब’ वर्ग नगर परिषद, १७ प्रभाग", hi: "‘ब’ श्रेणी नगर परिषद, 17 वार्ड" },
    text: {
      en: "Dattapur-Dhamangaon is governed as a Class ‘B’ Municipal Council divided into 17 wards, with general elections every five years. (Year of constitution to be added from council records.)",
      mr: "दत्तापूर-धामणगाव ही १७ प्रभागांत विभागलेली ‘ब’ वर्ग नगर परिषद असून दर पाच वर्षांनी निवडणूक होते. (स्थापना वर्ष नगर परिषद अभिलेखातून जोडावे.)",
      hi: "दत्तापुर-धामणगांव 17 वार्डों वाली ‘ब’ श्रेणी नगर परिषद है, जिसके चुनाव हर पाँच वर्ष में होते हैं। (स्थापना वर्ष परिषद अभिलेखों से जोड़ें।)",
    },
    source: WIKI_TOWN,
  },
  {
    period: "2011",
    title: { en: "Census 2011", mr: "जनगणना २०११", hi: "जनगणना 2011" },
    text: {
      en: "The Census recorded 21,059 residents (10,613 male, 10,446 female) in 4,779 households, with an effective literacy rate of 92.09%.",
      mr: "जनगणनेत ४,७७९ कुटुंबांतील २१,०५९ रहिवासी (१०,६१३ पुरुष, १०,४४६ स्त्रिया) नोंदले गेले; प्रभावी साक्षरता ९२.०९%.",
      hi: "जनगणना में 4,779 परिवारों में 21,059 निवासी (10,613 पुरुष, 10,446 महिलाएँ) दर्ज हुए; प्रभावी साक्षरता 92.09%।",
    },
    source: CENSUS,
  },
  {
    period: "Dec 2016",
    title: { en: "Pratap Adsad elected President", mr: "प्रताप अडसड नगराध्यक्ष", hi: "प्रताप अडसड नगराध्यक्ष निर्वाचित" },
    text: {
      en: "Pratap Adsad (BJP) took office as President of the Nagar Parishad on 28 December 2016.",
      mr: "प्रताप अडसड (भाजप) यांनी २८ डिसेंबर २०१६ रोजी नगराध्यक्षपदाचा कार्यभार स्वीकारला.",
      hi: "प्रताप अडसड (भाजपा) ने 28 दिसंबर 2016 को नगराध्यक्ष का पदभार संभाला।",
    },
    source: WIKI_ADSAD,
  },
  {
    period: "Oct 2019",
    title: { en: "Former President becomes MLA", mr: "माजी नगराध्यक्ष आमदार", hi: "पूर्व नगराध्यक्ष विधायक बने" },
    text: {
      en: "Pratap Adsad was elected MLA from the Dhamangaon Railway Assembly constituency on 24 October 2019; his term as President is recorded until 28 December 2019.",
      mr: "प्रताप अडसड २४ ऑक्टोबर २०१९ रोजी धामणगाव रेल्वे विधानसभा मतदारसंघातून आमदार म्हणून निवडून आले; नगराध्यक्षपदाचा कार्यकाळ २८ डिसेंबर २०१९ पर्यंत नोंदवला आहे.",
      hi: "प्रताप अडसड 24 अक्टूबर 2019 को धामणगांव रेलवे विधानसभा क्षेत्र से विधायक चुने गए; नगराध्यक्ष का कार्यकाल 28 दिसंबर 2019 तक दर्ज है।",
    },
    source: WIKI_ADSAD,
  },
  {
    period: "Dec 2025",
    title: { en: "New council elected", mr: "नवीन नगर परिषद निवडून", hi: "नई परिषद निर्वाचित" },
    text: {
      en: "In the Maharashtra municipal council elections, Dr. Archanatai Adsad-Rothe (BJP) was elected President of Nagar Parishad Dhamangaon Railway.",
      mr: "महाराष्ट्र नगरपरिषद निवडणुकीत डॉ. अर्चनाताई अडसड-रोठे (भाजप) नगर परिषद धामणगाव रेल्वेच्या नगराध्यक्षपदी निवडून आल्या.",
      hi: "महाराष्ट्र नगर परिषद चुनाव में डॉ. अर्चनाताई अडसड-रोठे (भाजपा) नगर परिषद धामणगांव रेलवे की नगराध्यक्ष चुनी गईं।",
    },
    source: RESULT_2025,
  },
  {
    period: "Apr 2026",
    title: { en: "Morning vegetable market for farmers", mr: "शेतकऱ्यांसाठी सकाळचा भाजी बाजार", hi: "किसानों के लिए सुबह की सब्ज़ी मंडी" },
    text: {
      en: "The Nagar Parishad distributed 40 authorised handcarts to vegetable growers and traders and moved the vegetable auction from 3–4 AM to the morning, so that farmers from nearby villages can take part.",
      mr: "नगर परिषदेने भाजीपाला उत्पादक व व्यापाऱ्यांना ४० अधिकृत हातगाड्या दिल्या आणि लिलाव पहाटे ३–४ ऐवजी सकाळी घेण्याची व्यवस्था केली.",
      hi: "नगर परिषद ने सब्ज़ी उत्पादकों और व्यापारियों को 40 अधिकृत ठेले दिए और नीलामी रात 3–4 बजे की बजाय सुबह कराने की व्यवस्था की।",
    },
    source: NEWS_2026,
  },
];

export interface PastPresident {
  name: LText;
  from: string;
  to?: string;
  party?: string;
  current?: boolean;
  source?: Source;
}

/**
 * Roll of Presidents (Nagaradhyaksha), newest first.
 * ⚠ Only entries verifiable from public sources are listed. Add earlier
 *   Presidents (with dates) from the Nagar Parishad's official records.
 */
export const pastPresidents: PastPresident[] = [
  {
    name: { en: "Dr. Archanatai Adsad-Rothe", mr: "डॉ. अर्चनाताई अडसड-रोठे", hi: "डॉ. अर्चनाताई अडसड-रोठे" },
    from: "Dec 2025",
    party: "BJP",
    current: true,
    source: RESULT_2025,
  },
  {
    name: { en: "Pratap Adsad", mr: "प्रताप अडसड", hi: "प्रताप अडसड" },
    from: "28 Dec 2016",
    to: "28 Dec 2019",
    party: "BJP",
    source: WIKI_ADSAD,
  },

  /*
   * ── ADD EARLIER PRESIDENTS BELOW (newest first) ─────────────────────────
   * Copy this block for each President from the Nagar Parishad's records
   * (General Body resolution book / Collector's notification):
   *
   * {
   *   name: { en: "Full Name", mr: "पूर्ण नाव", hi: "पूरा नाम" },
   *   from: "DD Mon YYYY",
   *   to: "DD Mon YYYY",
   *   party: "Party (optional)",
   *   source: { label: "NP resolution no. __ dated __", url: "/documents/..." },
   * },
   *
   * For periods under an appointed Administrator (Prashasak), you may add:
   * { name: { en: "Administrator (Chief Officer)", mr: "प्रशासक (मुख्याधिकारी)" }, from: "…", to: "…" },
   */
];

/** Census 2011 town profile (Dattapur Dhamangaon M Cl). */
export const census2011 = {
  population: { total: 21059, male: 10613, female: 10446 },
  households: 4779,
  children0to6: 1909,
  sexRatio: 984,
  childSexRatio: 834,
  literacy: { total: 92.09, male: 95.03, female: 89.15 },
  scPercent: 14.54,
  stPercent: 4.32,
  workers: { total: 7174, male: 5690, female: 1484 },
  religion: [
    { name: { en: "Hindu", mr: "हिंदू", hi: "हिंदू" }, percent: 78.27 },
    { name: { en: "Muslim", mr: "मुस्लिम", hi: "मुस्लिम" }, percent: 9.88 },
    { name: { en: "Buddhist", mr: "बौद्ध", hi: "बौद्ध" }, percent: 9.46 },
    { name: { en: "Jain", mr: "जैन", hi: "जैन" }, percent: 1.66 },
    { name: { en: "Others", mr: "इतर", hi: "अन्य" }, percent: 0.73 },
  ],
  source: CENSUS,
};

/**
 * MLAs – No. 36 Dhamangaon Railway Assembly constituency (Wardha Lok Sabha seat).
 * Before the 2008 delimitation the seat was known as Chandur constituency.
 * Rows with `name: null` are not listed in the public source — fill from ECI records.
 */
const WIKI_AC: Source = {
  label: "Wikipedia – Dhamangaon Railway Assembly constituency",
  url: "https://en.wikipedia.org/wiki/Dhamangaon_Railway_Assembly_constituency",
};

export interface Mla {
  year: number;
  name: LText | null;
  party?: string;
  preDelimitation?: boolean;
}

export const mlas: Mla[] = [
  { year: 2024, name: { en: "Pratap Arunbhau Adsad", mr: "प्रताप अरुणभाऊ अडसड", hi: "प्रताप अरुणभाऊ अडसड" }, party: "BJP" },
  { year: 2019, name: { en: "Pratap Arunbhau Adsad", mr: "प्रताप अरुणभाऊ अडसड", hi: "प्रताप अरुणभाऊ अडसड" }, party: "BJP" },
  { year: 2014, name: { en: "Virendra Walmikrao Jagtap", mr: "विरेंद्र वाल्मिकराव जगताप", hi: "वीरेंद्र वाल्मिकराव जगताप" }, party: "INC" },
  { year: 2009, name: { en: "Virendra Walmikrao Jagtap", mr: "विरेंद्र वाल्मिकराव जगताप", hi: "वीरेंद्र वाल्मिकराव जगताप" }, party: "INC" },
  { year: 2004, name: { en: "Virendra Jagtap", mr: "विरेंद्र जगताप", hi: "वीरेंद्र जगताप" }, party: "INC", preDelimitation: true },
  { year: 1999, name: { en: "Arun Adsad", mr: "अरुण अडसड", hi: "अरुण अडसड" }, party: "BJP", preDelimitation: true },
  { year: 1995, name: { en: "Pandurang Vithusa Dhole", mr: "पांडुरंग विठुसा ढोले", hi: "पांडुरंग विठुसा ढोले" }, party: "Janata Dal", preDelimitation: true },
  { year: 1990, name: { en: "Arun Adsad", mr: "अरुण अडसड", hi: "अरुण अडसड" }, party: "BJP", preDelimitation: true },
  { year: 1985, name: null, party: "INC", preDelimitation: true },
  { year: 1980, name: { en: "Yashwant Gangaram Sherekar", mr: "यशवंत गंगाराम शेरेकर", hi: "यशवंत गंगाराम शेरेकर" }, preDelimitation: true },
  { year: 1978, name: { en: "Sudhakar Ramchandra Savalakhe", mr: "सुधाकर रामचंद्र सावळाखे", hi: "सुधाकर रामचंद्र सावलाखे" }, party: "INC (I)", preDelimitation: true },
  { year: 1972, name: { en: "Sharad Motirao Tasare", mr: "शरद मोतीराव तसरे", hi: "शरद मोतीराव तसरे" }, preDelimitation: true },
  { year: 1967, name: null, preDelimitation: true },
  { year: 1962, name: { en: "Bhaurao Gulabrao Jadhao", mr: "भाऊराव गुलाबराव जाधव", hi: "भाऊराव गुलाबराव जाधव" }, preDelimitation: true },
  { year: 1957, name: null, preDelimitation: true },
  { year: 1952, name: { en: "Pundalik Balkrishna Chore", mr: "पुंडलिक बाळकृष्ण चोरे", hi: "पुंडलिक बालकृष्ण चोरे" }, party: "INC", preDelimitation: true },
];

export const mlaSource = WIKI_AC;

/** 2024 result summary (same source). */
export const mla2024Result = {
  winner: { name: "Pratap Arunbhau Adsad", party: "BJP", votes: 110641, share: 49.71 },
  runnerUp: { name: "Virendra Walmikrao Jagtap", party: "INC", votes: 94413, share: 42.42 },
  margin: 16228,
};
