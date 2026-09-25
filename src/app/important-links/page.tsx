import { ExternalLink, Globe } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { govLinks } from "@/data/links";
import type { GovLink } from "@/types";
import { L, T } from "@/i18n/T";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Important Government Links",
  description: "Useful links to Central, State and District government portals for citizens of Dhamangaon Railway.",
  path: "/important-links",
});

const GROUPS: { key: GovLink["group"]; label: { en: string; mr: string; hi: string } }[] = [
  { key: "central", label: { en: "Government of India", mr: "भारत सरकार", hi: "भारत सरकार" } },
  { key: "state", label: { en: "Government of Maharashtra", mr: "महाराष्ट्र शासन", hi: "महाराष्ट्र शासन" } },
  { key: "district", label: { en: "District Administration", mr: "जिल्हा प्रशासन", hi: "ज़िला प्रशासन" } },
  { key: "citizen", label: { en: "Citizen Schemes & Services", mr: "नागरिक योजना व सेवा", hi: "नागरिक योजनाएँ एवं सेवाएँ" } },
];

export default function ImportantLinksPage() {
  return (
    <>
      <PageHero titleKey="pages.links.title" descKey="pages.links.desc" trail={[{ k: "nav.documents", href: "/notices" }]} />
      <section className="bg-pattern-light py-16 sm:py-20">
        <div className="container space-y-14">
          {GROUPS.map((g) => {
            const links = govLinks.filter((l) => l.group === g.key);
            if (links.length === 0) return null;
            return (
              <div key={g.key}>
                <Reveal>
                  <h2 className="mb-6 flex items-center gap-3 text-2xl font-semibold">
                    <span className="h-6 w-1 rounded-full bg-gold-500" aria-hidden="true" />
                    <L text={g.label} />
                  </h2>
                </Reveal>
                <Stagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {links.map((l) => (
                    <StaggerItem key={l.url}>
                      <a
                        href={l.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="card-royal group flex h-full flex-col p-6 hover:-translate-y-1"
                      >
                        <div className="flex items-start justify-between gap-3">
                          <span className="grid h-11 w-11 place-items-center rounded-xl bg-navy-900 text-gold-200 transition group-hover:bg-gold-400 group-hover:text-navy-950">
                            <Globe className="h-5 w-5" aria-hidden="true" />
                          </span>
                          <ExternalLink className="h-4 w-4 text-navy-300 group-hover:text-gold-600" aria-hidden="true" />
                        </div>
                        <h3 className="mt-4 font-sans text-base font-semibold text-navy-900">
                          <L text={{ en: l.title, mr: l.titleMr, hi: l.titleMr }} />
                        </h3>
                        <p className="mt-1.5 text-sm text-navy-600">{l.description}</p>
                        <p className="mt-auto pt-4 text-xs font-medium text-gold-700">{l.url.replace(/^https?:\/\//, "")}</p>
                        <span className="sr-only">
                          (<T k="common.externalNote" />)
                        </span>
                      </a>
                    </StaggerItem>
                  ))}
                </Stagger>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
