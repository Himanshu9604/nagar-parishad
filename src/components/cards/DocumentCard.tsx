import { CalendarDays, Download, Eye, FileText, Hash } from "lucide-react";
import type { DocumentItem } from "@/types";
import type { TKey } from "@/i18n/dictionaries";
import { L, LDate, T } from "@/i18n/T";
import { cn } from "@/lib/utils";

/** PDF / document card with "View" (new tab) and "Download" actions. */
export function DocumentCard({ doc, compact = false }: { doc: DocumentItem; compact?: boolean }) {
  const fileName = doc.file.split("/").pop();
  return (
    <article
      className={cn(
        "card-royal group flex h-full flex-col p-5",
        doc.important && "ring-1 ring-gold-300/60",
      )}
    >
      <div className="flex items-start gap-4">
        <div className="relative grid h-12 w-11 shrink-0 place-items-center rounded-lg bg-gradient-to-b from-navy-800 to-navy-950 text-gold-200 shadow-royal">
          <FileText className="h-5 w-5" aria-hidden="true" />
          <span className="absolute -bottom-1.5 rounded bg-gold-400 px-1 text-[0.55rem] font-bold tracking-wide text-navy-950">
            PDF
          </span>
        </div>
        <div className="min-w-0 flex-1">
          <div className="mb-1.5 flex flex-wrap items-center gap-2">
            <span className="rounded-full bg-navy-50 px-2.5 py-0.5 text-[0.7rem] font-semibold uppercase tracking-wide text-navy-600">
              <T k={`categories.${doc.category}` as TKey} />
            </span>
            {doc.isNew && (
              <span className="rounded-full bg-gradient-to-r from-gold-300 to-gold-500 px-2 py-0.5 text-[0.65rem] font-bold uppercase text-navy-950">
                <T k="common.new" />
              </span>
            )}
          </div>
          <h3 className="font-sans text-[0.95rem] font-semibold leading-snug text-navy-900 transition group-hover:text-navy-700">
            <L text={doc.title} />
          </h3>
          {!compact && doc.summary && (
            <p className="mt-1.5 line-clamp-2 text-sm text-navy-600">
              <L text={doc.summary} />
            </p>
          )}
        </div>
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-navy-500">
        <span className="inline-flex items-center gap-1.5">
          <CalendarDays className="h-3.5 w-3.5" aria-hidden="true" />
          <LDate date={doc.date} />
        </span>
        {doc.referenceNo && (
          <span className="inline-flex items-center gap-1.5">
            <Hash className="h-3.5 w-3.5" aria-hidden="true" />
            {doc.referenceNo}
          </span>
        )}
        {doc.fileSize && <span>{doc.fileSize}</span>}
      </div>

      <div className="mt-auto flex gap-2 pt-4">
        <a
          href={doc.file}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-full border border-navy-100 bg-white px-3 py-2 text-xs font-semibold text-navy-700 transition hover:border-gold-400 hover:text-navy-950"
        >
          <Eye className="h-3.5 w-3.5" aria-hidden="true" />
          <T k="common.view" />
        </a>
        <a
          href={doc.file}
          download={fileName}
          className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-full bg-navy-900 px-3 py-2 text-xs font-semibold text-ivory transition hover:bg-navy-700"
        >
          <Download className="h-3.5 w-3.5" aria-hidden="true" />
          <T k="common.download" />
        </a>
      </div>
    </article>
  );
}
