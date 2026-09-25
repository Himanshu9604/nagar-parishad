import Link from "next/link";
import { ArrowRight, Eye, Target, TrainFront, Trees, Users } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { townStats } from "@/data/site";
import { L, T } from "@/i18n/T";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "About Nagar Parishad",
  description: "History, profile, vision, mission and administrative structure of Nagar Parishad Dhamangaon Railway, Dist. Amravati.",
  path: "/about",
});

const highlights = [
  {
    icon: TrainFront,
    title: { en: "Railway heritage", mr: "रेल्वे वारसा", hi: "रेलवे धरोहर" },
    text: {
      en: "The town grew around its station on the historic Mumbai–Howrah trunk route, giving it the suffix “Railway” and a strong trading tradition.",
      mr: "मुंबई–हावडा या ऐतिहासिक मुख्य रेल्वे मार्गावरील स्थानकाभोवती शहराचा विकास झाला, म्हणूनच “रेल्वे” हे नाव आणि व्यापाराची परंपरा.",
      hi: "ऐतिहासिक मुंबई–हावड़ा मुख्य मार्ग के स्टेशन के आसपास नगर का विकास हुआ, इसलिए नाम में “रेलवे” और व्यापार की परंपरा।",
    },
  },
  {
    icon: Trees,
    title: { en: "Agrarian hinterland", mr: "कृषिप्रधान परिसर", hi: "कृषि प्रधान क्षेत्र" },
    text: {
      en: "A market centre for cotton, soybean, tur and oranges from the surrounding villages of Vidarbha.",
      mr: "आसपासच्या विदर्भातील गावांतील कापूस, सोयाबीन, तूर व संत्र्यांसाठी बाजारपेठ.",
      hi: "आसपास के विदर्भ गाँवों के कपास, सोयाबीन, तूर और संतरों का बाज़ार केंद्र।",
    },
  },
  {
    icon: Users,
    title: { en: "People first", mr: "नागरिक प्रथम", hi: "नागरिक प्रथम" },
    text: {
      en: "An elected General Body and a professional administration working together for time-bound public services.",
      mr: "कालबद्ध लोकसेवांसाठी निर्वाचित सर्वसाधारण सभा व व्यावसायिक प्रशासन एकत्र कार्यरत.",
      hi: "समयबद्ध लोक सेवाओं के लिए निर्वाचित सामान्य सभा और पेशेवर प्रशासन साथ मिलकर कार्यरत।",
    },
  },
];

const structure = [
  { en: "General Body (All elected members)", mr: "सर्वसाधारण सभा (सर्व निर्वाचित सदस्य)", hi: "सामान्य सभा (सभी निर्वाचित सदस्य)" },
  { en: "President (Nagaradhyaksha)", mr: "नगराध्यक्ष", hi: "नगराध्यक्ष" },
  { en: "Standing Committee & Subject Committees", mr: "स्थायी समिती व विषय समित्या", hi: "स्थायी समिति एवं विषय समितियाँ" },
  { en: "Chief Officer (Administrative Head)", mr: "मुख्याधिकारी (प्रशासकीय प्रमुख)", hi: "मुख्य अधिकारी (प्रशासनिक प्रमुख)" },
  { en: "Departments & Field Staff", mr: "विभाग व क्षेत्रीय कर्मचारी", hi: "विभाग एवं क्षेत्रीय कर्मचारी" },
];

export default function AboutPage() {
  return (
    <>
      <PageHero titleKey="pages.about.title" descKey="pages.about.desc" />

      <section className="py-16 sm:py-20">
        <div className="container grid gap-12 lg:grid-cols-12">
          <Reveal className="prose-royal lg:col-span-7">
            <span className="eyebrow">
              <span className="h-px w-6 bg-gold-500" aria-hidden="true" />
              <T k="nav.aboutParishad" />
            </span>
            <h2 className="!mt-3 text-3xl font-semibold sm:text-4xl">
              <T k="home.aboutTitle" />
            </h2>
            <p className="mt-5">
              <T k="home.aboutText" />
            </p>
            <p>
              Nagar Parishad Dhamangaon Railway is a Municipal Council constituted under the Maharashtra Municipal
              Councils, Nagar Panchayats and Industrial Townships Act, 1965. The council is governed by an elected
              General Body headed by the President, while the Chief Officer, appointed by the Government of
              Maharashtra, leads the administration.
            </p>
            <p>
              The Nagar Parishad provides essential urban services — safe drinking water, solid waste management,
              roads and drains, street lighting, fire services, primary education, public health, birth and death
              registration and regulation of building construction — and implements Central and State government
              missions for housing, sanitation, livelihoods and urban infrastructure.
            </p>
            <p className="text-sm italic text-navy-500">
              {/* VERIFY: add accurate historical details (year of establishment, area, population) from council records. */}
              Historical facts and figures on this page should be verified against official council records.
            </p>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-5">
            <div className="card-royal overflow-hidden">
              <div className="bg-royal-gradient p-6 text-ivory">
                <h3 className="font-display text-xl font-semibold !text-ivory">
                  <T k="home.statsTitle" />
                </h3>
              </div>
              <dl className="grid grid-cols-2 divide-x divide-y divide-navy-100">
                {townStats.map((s) => (
                  <div key={s.value} className="p-6">
                    <dt className="text-xs uppercase tracking-wide text-navy-500">
                      <L text={s.label} />
                    </dt>
                    <dd className="mt-1 font-display text-2xl font-semibold text-navy-900">{s.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-ivory-200/60 py-16 sm:py-20">
        <div className="container">
          <Stagger className="grid gap-5 md:grid-cols-3">
            {highlights.map((h) => (
              <StaggerItem key={h.title.en}>
                <article className="card-royal h-full p-7">
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-navy-900 text-gold-200">
                    <h.icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 text-xl font-semibold">
                    <L text={h.title} />
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-navy-600">
                    <L text={h.text} />
                  </p>
                </article>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="container grid gap-6 md:grid-cols-2">
          <Reveal className="card-royal p-8">
            <Eye className="h-8 w-8 text-gold-500" aria-hidden="true" />
            <h2 className="mt-4 text-2xl font-semibold">Vision</h2>
            <p className="mt-3 leading-relaxed text-navy-600">
              A clean, green, safe and self-reliant Dhamangaon Railway where every citizen enjoys reliable civic
              amenities and transparent, responsive governance.
            </p>
          </Reveal>
          <Reveal delay={0.1} className="card-royal p-8">
            <Target className="h-8 w-8 text-gold-500" aria-hidden="true" />
            <h2 className="mt-4 text-2xl font-semibold">Mission</h2>
            <ul className="mt-3 list-disc space-y-1.5 pl-5 text-navy-600 marker:text-gold-500">
              <li>24×7 safe drinking water to every household</li>
              <li>Garbage-free town through segregation and scientific processing</li>
              <li>Time-bound, online and paperless citizen services</li>
              <li>Inclusive development for women, youth, divyang and senior citizens</li>
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="bg-pattern-light pb-20">
        <div className="container">
          <SectionHeading title="Administrative Structure" align="center" />
          <ol className="mx-auto max-w-xl space-y-3">
            {structure.map((s, i) => (
              <Reveal as="li" key={s.en} delay={i * 0.06}>
                <div
                  className="card-royal flex items-center gap-4 p-4"
                  style={{ marginLeft: `${Math.min(i, 3) * 0.75}rem` }}
                >
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-gradient-to-b from-gold-300 to-gold-500 font-display font-semibold text-navy-950">
                    {i + 1}
                  </span>
                  <span className="font-medium text-navy-800">
                    <L text={s} />
                  </span>
                </div>
              </Reveal>
            ))}
          </ol>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Link href="/organisation-structure" className="btn-primary">
              <T k="nav.orgStructure" /> <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <Link href="/history" className="btn-outline">
              <T k="nav.history" />
            </Link>
            <Link href="/leadership" className="btn-outline">
              <T k="nav.leadership" />
            </Link>
            <Link href="/wards" className="btn-outline">
              <T k="nav.wards" />
            </Link>
            <Link href="/departments" className="btn-outline">
              <T k="nav.departments" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
