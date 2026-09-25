import Link from "next/link";
import { ChevronRight, House } from "lucide-react";
import type { LText } from "@/types";
import type { TKey } from "@/i18n/dictionaries";
import { L, T } from "@/i18n/T";
import { siteConfig } from "@/data/site";

export interface Crumb {
  /** Dictionary key (preferred) … */
  k?: TKey;
  /** … or a localised text / plain string. */
  label?: LText | string;
  href?: string;
}

/** Accessible breadcrumb trail with schema.org BreadcrumbList JSON-LD. */
export function Breadcrumbs({ items, tone = "light" }: { items: Crumb[]; tone?: "light" | "dark" }) {
  const all: Crumb[] = [{ k: "nav.home", href: "/" }, ...items];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: all.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.label ? (typeof c.label === "string" ? c.label : c.label.en) : c.k,
      ...(c.href ? { item: `${siteConfig.url}${c.href}` } : {}),
    })),
  };

  const base = tone === "dark" ? "text-ivory/70" : "text-navy-500";
  const active = tone === "dark" ? "text-gold-200" : "text-navy-900";
  const hover = tone === "dark" ? "hover:text-gold-200" : "hover:text-gold-600";

  return (
    <nav aria-label="Breadcrumb">
      <ol className={`flex flex-wrap items-center gap-1.5 text-sm ${base}`}>
        {all.map((c, i) => {
          const last = i === all.length - 1;
          const content = c.k ? <T k={c.k} /> : <L text={c.label} />;
          return (
            <li key={i} className="flex items-center gap-1.5">
              {i > 0 && <ChevronRight className="h-3.5 w-3.5 opacity-60" aria-hidden="true" />}
              {last || !c.href ? (
                <span aria-current={last ? "page" : undefined} className={last ? `font-medium ${active}` : undefined}>
                  {content}
                </span>
              ) : (
                <Link href={c.href} className={`inline-flex items-center gap-1 transition ${hover}`}>
                  {i === 0 && <House className="h-3.5 w-3.5" aria-hidden="true" />}
                  {content}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </nav>
  );
}
