import { ExternalLink, Info } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { TenderList } from "@/components/features/TenderList";
import { MAHATENDERS_URL, tenders } from "@/data/tenders";
import { T } from "@/i18n/T";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Tenders",
  description: "Current and archived tenders, quotations and e-tender notices of Nagar Parishad Dhamangaon Railway.",
  path: "/tenders",
  keywords: ["tender", "e-tender", "nivida", "quotation"],
});

export default function TendersPage() {
  return (
    <>
      <PageHero titleKey="pages.tenders.title" descKey="pages.tenders.desc" trail={[{ k: "nav.documents", href: "/notices" }]} />
      <section className="bg-pattern-light py-16 sm:py-20">
        <div className="container">
          <Reveal className="mb-8 flex flex-col gap-4 rounded-2xl border border-gold-200 bg-gold-50/70 p-5 sm:flex-row sm:items-center sm:justify-between">
            <p className="flex items-start gap-3 text-sm text-navy-700">
              <Info className="mt-0.5 h-5 w-5 shrink-0 text-gold-600" aria-hidden="true" />
              <T k="tender.portalNote" />
            </p>
            <a href={MAHATENDERS_URL} target="_blank" rel="noopener noreferrer" className="btn-primary shrink-0">
              mahatenders.gov.in
              <ExternalLink className="h-4 w-4" aria-hidden="true" />
            </a>
          </Reveal>
          <TenderList tenders={tenders} />
        </div>
      </section>
    </>
  );
}
