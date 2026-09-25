import { Check, ExternalLink } from "lucide-react";
import type { Scheme } from "@/types";
import { L, T } from "@/i18n/T";
import { cn } from "@/lib/utils";
import { Icon } from "@/components/ui/Icon";

const LEVEL_STYLE: Record<Scheme["level"], string> = {
  central: "bg-saffron/10 text-[#b3620f]",
  state: "bg-navy-50 text-navy-700",
  local: "bg-emerald-50 text-emerald-700",
};

const LEVEL_LABEL: Record<Scheme["level"], { en: string; mr: string; hi: string }> = {
  central: { en: "Central Govt.", mr: "केंद्र शासन", hi: "केंद्र सरकार" },
  state: { en: "Maharashtra Govt.", mr: "महाराष्ट्र शासन", hi: "महाराष्ट्र शासन" },
  local: { en: "Nagar Parishad", mr: "नगर परिषद", hi: "नगर परिषद" },
};

export function SchemeCard({ scheme, detailed = false }: { scheme: Scheme; detailed?: boolean }) {
  return (
    <article id={scheme.id} className="card-royal flex h-full scroll-mt-28 flex-col p-6">
      <div className="flex items-start justify-between gap-3">
        <span className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-gold-200 to-gold-500 text-navy-950 shadow-gold">
          <Icon name={scheme.icon} className="h-6 w-6" />
        </span>
        <span className={cn("rounded-full px-2.5 py-1 text-[0.7rem] font-semibold", LEVEL_STYLE[scheme.level])}>
          <L text={LEVEL_LABEL[scheme.level]} />
        </span>
      </div>
      <h3 className="mt-5 font-sans text-lg font-semibold leading-snug text-navy-900">
        <L text={scheme.name} />
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-navy-600">
        <L text={scheme.summary} />
      </p>

      {detailed && (
        <div className="mt-5 grid gap-5 border-t border-navy-100 pt-5 text-sm sm:grid-cols-2">
          <div>
            <h4 className="mb-2 font-sans text-xs font-bold uppercase tracking-wider text-gold-700">
              <T k="common.eligibility" />
            </h4>
            <ul className="space-y-1.5 text-navy-700">
              {scheme.eligibility.map((e) => (
                <li key={e} className="flex gap-2">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold-600" aria-hidden="true" />
                  {e}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="mb-2 font-sans text-xs font-bold uppercase tracking-wider text-gold-700">
              <T k="common.benefits" />
            </h4>
            <ul className="space-y-1.5 text-navy-700">
              {scheme.benefits.map((b) => (
                <li key={b} className="flex gap-2">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold-600" aria-hidden="true" />
                  {b}
                </li>
              ))}
            </ul>
          </div>
          {scheme.documents && (
            <div className="sm:col-span-2">
              <h4 className="mb-2 font-sans text-xs font-bold uppercase tracking-wider text-gold-700">
                <T k="common.requiredDocuments" />
              </h4>
              <div className="flex flex-wrap gap-2">
                {scheme.documents.map((d) => (
                  <span key={d} className="rounded-full bg-ivory-200 px-3 py-1 text-xs text-navy-700">
                    {d}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {scheme.url && (
        <a
          href={scheme.url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto inline-flex items-center gap-1.5 pt-5 text-sm font-semibold text-navy-700 hover:text-gold-600"
        >
          <T k="common.officialWebsite" />
          <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
          <span className="sr-only">
            (<T k="common.externalNote" />)
          </span>
        </a>
      )}
    </article>
  );
}
