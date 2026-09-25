import Link from "next/link";
import { CircleCheck, ChevronDown, Clock, ExternalLink, FileCheck, IndianRupee, Phone } from "lucide-react";
import type { DocumentItem } from "@/types";
import type { TKey } from "@/i18n/dictionaries";
import { T } from "@/i18n/T";
import { telHref } from "@/lib/utils";
import { PageHero } from "./PageHero";
import { Reveal } from "./Reveal";
import { DocumentCard } from "@/components/cards/DocumentCard";

export interface ServiceDetailContent {
  titleKey: TKey;
  descKey: TKey;
  intro: string;
  highlights?: { label: string; value: string }[];
  steps: { title: string; text: string }[];
  documents: string[];
  fees?: { item: string; fee: string; timeline?: string }[];
  faqs?: { q: string; a: string }[];
  forms?: DocumentItem[];
  online?: { label: string; url: string }[];
  contact: { office: string; phone: string; hours?: string };
  extra?: React.ReactNode;
}

/** Shared template for detailed citizen-service pages. */
export function ServiceDetailLayout({ content }: { content: ServiceDetailContent }) {
  const c = content;
  return (
    <>
      <PageHero titleKey={c.titleKey} descKey={c.descKey} trail={[{ k: "nav.services", href: "/services" }]} />

      <section className="py-14 sm:py-16">
        <div className="container grid gap-8 lg:grid-cols-3">
          <div className="space-y-8 lg:col-span-2">
            <Reveal>
              <p className="text-lg leading-relaxed text-navy-700">{c.intro}</p>
              {c.highlights && (
                <dl className="mt-6 grid gap-4 sm:grid-cols-3">
                  {c.highlights.map((h) => (
                    <div key={h.label} className="card-royal p-5">
                      <dt className="text-xs font-semibold uppercase tracking-wider text-gold-700">{h.label}</dt>
                      <dd className="mt-1 font-display text-xl font-semibold text-navy-900">{h.value}</dd>
                    </div>
                  ))}
                </dl>
              )}
            </Reveal>

            {/* Procedure */}
            <Reveal className="card-royal p-6 sm:p-8">
              <h2 className="text-2xl font-semibold">
                <T k="common.procedure" />
              </h2>
              <ol className="relative mt-6 space-y-6 border-l-2 border-gold-200 pl-8">
                {c.steps.map((s, i) => (
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

            {/* Documents */}
            <Reveal className="card-royal p-6 sm:p-8">
              <h2 className="text-2xl font-semibold">
                <T k="common.requiredDocuments" />
              </h2>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {c.documents.map((d) => (
                  <li key={d} className="flex gap-3 rounded-xl bg-ivory-100 p-3 text-sm text-navy-700">
                    <FileCheck className="mt-0.5 h-4 w-4 shrink-0 text-gold-600" aria-hidden="true" />
                    {d}
                  </li>
                ))}
              </ul>
            </Reveal>

            {/* Fees */}
            {c.fees && (
              <Reveal className="card-royal overflow-hidden">
                <h2 className="px-6 pt-6 text-2xl font-semibold sm:px-8">
                  <T k="common.fees" /> & <T k="common.timeline" />
                </h2>
                <div className="mt-5 overflow-x-auto">
                  <table className="w-full min-w-[28rem] text-left text-sm">
                    <thead className="bg-navy-900 text-xs uppercase tracking-wider text-gold-100">
                      <tr>
                        <th scope="col" className="px-6 py-3 font-semibold sm:px-8">Service</th>
                        <th scope="col" className="px-6 py-3 font-semibold"><T k="common.fees" /></th>
                        <th scope="col" className="px-6 py-3 font-semibold"><T k="common.timeline" /></th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-navy-100">
                      {c.fees.map((f) => (
                        <tr key={f.item} className="hover:bg-ivory-100">
                          <td className="px-6 py-3.5 text-navy-800 sm:px-8">{f.item}</td>
                          <td className="whitespace-nowrap px-6 py-3.5 font-semibold text-navy-900">{f.fee}</td>
                          <td className="whitespace-nowrap px-6 py-3.5 text-navy-600">{f.timeline ?? "—"}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="px-6 py-4 text-xs text-navy-500 sm:px-8">
                  Fees are indicative and subject to revision as per Government / General Body resolutions.
                </p>
              </Reveal>
            )}

            {c.extra}

            {/* FAQs */}
            {c.faqs && (
              <Reveal>
                <h2 className="mb-4 text-2xl font-semibold">Frequently Asked Questions</h2>
                <div className="space-y-3">
                  {c.faqs.map((f) => (
                    <details key={f.q} className="card-royal group p-5 [&_summary::-webkit-details-marker]:hidden">
                      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-navy-900">
                        {f.q}
                        <ChevronDown className="h-4 w-4 shrink-0 text-gold-600 transition group-open:rotate-180" aria-hidden="true" />
                      </summary>
                      <p className="mt-3 text-sm leading-relaxed text-navy-600">{f.a}</p>
                    </details>
                  ))}
                </div>
              </Reveal>
            )}
          </div>

          {/* Sidebar */}
          <aside className="space-y-6 lg:sticky lg:top-28 lg:self-start">
            {c.online && (
              <Reveal className="relative overflow-hidden rounded-2xl bg-royal-gradient p-6 text-ivory shadow-royal-lg">
                <div className="bg-pattern-royal absolute inset-0 opacity-40" aria-hidden="true" />
                <div className="relative">
                  <h2 className="font-display text-xl font-semibold !text-ivory">
                    <T k="common.applyOnline" />
                  </h2>
                  <div className="mt-4 space-y-2">
                    {c.online.map((o) => (
                      <a
                        key={o.url}
                        href={o.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between gap-3 rounded-xl bg-white/10 px-4 py-3 text-sm font-medium transition hover:bg-white/15"
                      >
                        {o.label}
                        <ExternalLink className="h-4 w-4 text-gold-200" aria-hidden="true" />
                      </a>
                    ))}
                  </div>
                </div>
              </Reveal>
            )}

            <Reveal className="card-royal p-6">
              <h2 className="font-display text-lg font-semibold">
                <T k="nav.contact" />
              </h2>
              <ul className="mt-4 space-y-3 text-sm text-navy-700">
                <li className="flex gap-3">
                  <CircleCheck className="h-4 w-4 shrink-0 text-gold-600" aria-hidden="true" />
                  {c.contact.office}
                </li>
                <li className="flex gap-3">
                  <Phone className="h-4 w-4 shrink-0 text-gold-600" aria-hidden="true" />
                  <a href={telHref(c.contact.phone)} className="hover:text-gold-600">
                    {c.contact.phone}
                  </a>
                </li>
                <li className="flex gap-3">
                  <Clock className="h-4 w-4 shrink-0 text-gold-600" aria-hidden="true" />
                  {c.contact.hours ?? <T k="common.officeHoursValue" />}
                </li>
                <li className="flex gap-3">
                  <IndianRupee className="h-4 w-4 shrink-0 text-gold-600" aria-hidden="true" />
                  Cash, UPI & Demand Draft accepted at the office counter
                </li>
              </ul>
            </Reveal>

            {c.forms && c.forms.length > 0 && (
              <Reveal className="space-y-4">
                <h2 className="font-display text-lg font-semibold">
                  <T k="nav.downloads" />
                </h2>
                {c.forms.map((f) => (
                  <DocumentCard key={f.id} doc={f} compact />
                ))}
                <Link href="/downloads" className="inline-flex text-sm font-semibold text-navy-700 hover:text-gold-600">
                  <T k="common.viewAll" /> →
                </Link>
              </Reveal>
            )}
          </aside>
        </div>
      </section>
    </>
  );
}
