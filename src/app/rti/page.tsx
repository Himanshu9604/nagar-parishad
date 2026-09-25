import Link from "next/link";
import { Clock, ExternalLink, FileText, Gavel, IndianRupee, Scale, UserRound } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { DocumentCard } from "@/components/cards/DocumentCard";
import { forms } from "@/data/forms";
import { siteConfig } from "@/data/site";
import { buildMetadata } from "@/lib/seo";
import { telHref } from "@/lib/utils";

export const metadata = buildMetadata({
  title: "Right to Information (RTI)",
  description:
    "RTI at Nagar Parishad Dhamangaon Railway — Public Information Officer, First Appellate Authority, fees, timelines, online RTI and Section 4(1)(b) proactive disclosure.",
  path: "/rti",
  keywords: ["RTI", "mahiticha adhikar", "public information officer", "RTI Dhamangaon"],
});

/** ⚠ Officer names to be updated from the office order designating PIO / FAA. */
const officers = [
  {
    role: "Public Information Officer (PIO)",
    roleMr: "जन माहिती अधिकारी",
    designation: "Administrative Officer, Nagar Parishad",
    icon: UserRound,
  },
  {
    role: "Assistant Public Information Officer (APIO)",
    roleMr: "सहायक जन माहिती अधिकारी",
    designation: "Office Superintendent, Nagar Parishad",
    icon: UserRound,
  },
  {
    role: "First Appellate Authority (FAA)",
    roleMr: "प्रथम अपिलीय अधिकारी",
    designation: "Chief Officer, Nagar Parishad",
    icon: Gavel,
  },
];

const steps = [
  { title: "Write your application", text: "Apply in Marathi, Hindi or English on plain paper or in Form ‘A’, addressed to the Public Information Officer. State clearly what information you need. You do not have to give reasons." },
  { title: "Pay the fee", text: "Attach the ₹10 application fee (cash receipt, court-fee stamp, DD or postal order). BPL card holders are exempt — attach a copy of the BPL certificate." },
  { title: "Submit", text: "Submit at the inward counter and collect the acknowledgement, send by post, or file online on the RTI Online Maharashtra portal." },
  { title: "Receive information", text: "The PIO must reply within 30 days (48 hours if it concerns life or liberty). Additional charges for copies, if any, will be intimated to you." },
  { title: "Appeal if needed", text: "If there is no reply or you are not satisfied, file a First Appeal with the First Appellate Authority within 30 days. A Second Appeal lies with the State Information Commission within 90 days." },
];

const fees = [
  { item: "Application fee", fee: "₹ 10" },
  { item: "Photocopy (A4 / A3), per page", fee: "₹ 2" },
  { item: "Larger size paper", fee: "Actual cost" },
  { item: "Information on CD / DVD", fee: "₹ 50 per disc" },
  { item: "Inspection of records – first hour", fee: "Free" },
  { item: "Inspection – each subsequent 15 minutes", fee: "₹ 5" },
  { item: "Below Poverty Line applicants", fee: "Exempt" },
];

const disclosures = [
  "Organisation, functions and duties",
  "Powers and duties of officers and employees",
  "Decision-making procedure and channels of supervision",
  "Norms for discharge of functions",
  "Rules, regulations, instructions and manuals",
  "Categories of documents held",
  "Boards, councils and committees",
  "Directory of officers and employees",
  "Monthly remuneration of officers and employees",
  "Budget allocated to each agency",
  "Execution of subsidy programmes",
  "Concessions, permits and authorisations granted",
  "Information available in electronic form",
  "Facilities available to citizens for obtaining information",
  "Names and particulars of Public Information Officers",
];

export default function RtiPage() {
  const rtiForm = forms.find((f) => f.id === "f-rti");
  return (
    <>
      <PageHero titleKey="pages.rti.title" descKey="pages.rti.desc" trail={[{ k: "nav.services", href: "/services" }]} />

      <section className="bg-pattern-light py-14 sm:py-16">
        <div className="container">
          <Stagger className="grid gap-5 md:grid-cols-3">
            {officers.map((o) => (
              <StaggerItem key={o.role}>
                <article className="card-royal h-full p-6">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-navy-900 text-gold-200">
                    <o.icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h2 className="mt-4 font-sans text-base font-semibold text-navy-900">{o.role}</h2>
                  <p className="text-xs font-medium text-gold-700">{o.roleMr}</p>
                  <p className="mt-3 text-sm text-navy-600">{o.designation}</p>
                  <p className="mt-1 text-xs italic text-navy-400">Name as per current office order</p>
                  <a href={telHref(siteConfig.phone)} className="mt-3 inline-block text-sm font-semibold text-navy-700 hover:text-gold-600">
                    {siteConfig.phone}
                  </a>
                </article>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="py-14 sm:py-16">
        <div className="container grid gap-8 lg:grid-cols-3">
          <div className="space-y-8 lg:col-span-2">
            <Reveal className="card-royal p-6 sm:p-8">
              <h2 className="text-2xl font-semibold">How to file an RTI application</h2>
              <ol className="relative mt-6 space-y-6 border-l-2 border-gold-200 pl-8">
                {steps.map((s, i) => (
                  <li key={s.title} className="relative">
                    <span className="absolute -left-[3.2rem] grid h-9 w-9 place-items-center rounded-full bg-gradient-to-b from-navy-800 to-navy-950 text-sm font-bold text-gold-200 ring-4 ring-ivory">
                      {i + 1}
                    </span>
                    <h3 className="font-sans text-base font-semibold text-navy-900">{s.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-navy-600">{s.text}</p>
                  </li>
                ))}
              </ol>
            </Reveal>

            <Reveal className="card-royal p-6 sm:p-8">
              <h2 className="text-2xl font-semibold">Proactive disclosure – Section 4(1)(b)</h2>
              <p className="mt-2 text-sm text-navy-600">
                The Nagar Parishad publishes the following information suo motu. Copies are available for inspection at
                the office and will be uploaded under{" "}
                <Link href="/downloads" className="font-semibold underline decoration-gold-400 underline-offset-2">
                  Download Forms
                </Link>
                .
              </p>
              <ol className="mt-5 grid gap-2 sm:grid-cols-2">
                {disclosures.map((d, i) => (
                  <li key={d} className="flex gap-3 rounded-xl bg-ivory-100 px-4 py-3 text-sm text-navy-700">
                    <span className="font-display font-semibold text-gold-600">{String(i + 1).padStart(2, "0")}</span>
                    {d}
                  </li>
                ))}
              </ol>
            </Reveal>
          </div>

          <aside className="space-y-6 lg:sticky lg:top-28 lg:self-start">
            <Reveal className="relative overflow-hidden rounded-2xl bg-royal-gradient p-6 text-ivory shadow-royal-lg">
              <div className="bg-pattern-royal absolute inset-0 opacity-40" aria-hidden="true" />
              <div className="relative">
                <h2 className="font-display text-xl font-semibold !text-ivory">File RTI online</h2>
                <p className="mt-2 text-sm text-ivory/75">Apply and pay online through the Government of Maharashtra portal.</p>
                <a href="https://rtionline.maharashtra.gov.in" target="_blank" rel="noopener noreferrer" className="btn-gold mt-4 w-full">
                  rtionline.maharashtra.gov.in
                  <ExternalLink className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            </Reveal>

            <Reveal className="card-royal overflow-hidden">
              <h2 className="flex items-center gap-2 px-6 pt-6 font-display text-lg font-semibold">
                <IndianRupee className="h-5 w-5 text-gold-600" aria-hidden="true" />
                Fees
              </h2>
              <ul className="mt-3 divide-y divide-navy-100 text-sm">
                {fees.map((f) => (
                  <li key={f.item} className="flex justify-between gap-3 px-6 py-2.5">
                    <span className="text-navy-700">{f.item}</span>
                    <span className="shrink-0 font-semibold text-navy-900">{f.fee}</span>
                  </li>
                ))}
              </ul>
              <p className="px-6 py-3 text-[0.7rem] text-navy-400">As per the Maharashtra Right to Information Rules — verify current rates.</p>
            </Reveal>

            <Reveal className="card-royal p-6">
              <h2 className="flex items-center gap-2 font-display text-lg font-semibold">
                <Clock className="h-5 w-5 text-gold-600" aria-hidden="true" />
                Time limits
              </h2>
              <ul className="mt-3 space-y-2 text-sm text-navy-700">
                <li>Reply by PIO: <strong>30 days</strong></li>
                <li>Life or liberty matters: <strong>48 hours</strong></li>
                <li>First Appeal: <strong>within 30 days</strong></li>
                <li className="flex items-start gap-1.5">
                  <Scale className="mt-0.5 h-4 w-4 shrink-0 text-gold-600" aria-hidden="true" />
                  <span>
                    Second Appeal to the State Information Commission (Amravati Bench): <strong>within 90 days</strong>
                  </span>
                </li>
              </ul>
            </Reveal>

            {rtiForm && (
              <Reveal className="space-y-3">
                <h2 className="flex items-center gap-2 font-display text-lg font-semibold">
                  <FileText className="h-5 w-5 text-gold-600" aria-hidden="true" />
                  Application form
                </h2>
                <DocumentCard doc={rtiForm} compact />
              </Reveal>
            )}
          </aside>
        </div>
      </section>
    </>
  );
}
