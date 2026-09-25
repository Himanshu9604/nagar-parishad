import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { Stagger, StaggerItem } from "@/components/ui/Reveal";
import { mainNav } from "@/data/navigation";
import { departments } from "@/data/departments";
import type { TKey } from "@/i18n/dictionaries";
import { L, T } from "@/i18n/T";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Sitemap",
  description: "All pages of the Nagar Parishad Dhamangaon Railway website at a glance.",
  path: "/site-map",
});

const extra = [
  { key: "emergency", href: "/emergency-contacts" },
  { key: "search", href: "/search" },
  { key: "websitePolicies", href: "/website-policies" },
];

export default function SiteMapPage() {
  return (
    <>
      <PageHero titleKey="pages.sitemap.title" descKey="pages.sitemap.desc" />
      <section className="bg-pattern-light py-16 sm:py-20">
        <div className="container">
          <Stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {mainNav.map((item) => (
              <StaggerItem key={item.key}>
                <div className="card-royal h-full p-6">
                  <h2 className="font-display text-xl font-semibold">
                    <Link href={item.href} className="hover:text-gold-600">
                      <T k={`nav.${item.key}` as TKey} />
                    </Link>
                  </h2>
                  <div className="mb-3 mt-2 h-0.5 w-10 rounded-full bg-gold-400" aria-hidden="true" />
                  <ul className="space-y-1.5 text-sm">
                    {(item.children ?? []).map((c) => (
                      <li key={c.href}>
                        <Link href={c.href} className="inline-flex items-center gap-1.5 text-navy-700 hover:text-gold-600">
                          <ChevronRight className="h-3.5 w-3.5 text-gold-500" aria-hidden="true" />
                          <T k={`nav.${c.key}` as TKey} />
                        </Link>
                      </li>
                    ))}
                    {item.key === "about" &&
                      departments.map((d) => (
                        <li key={d.slug} className="pl-5">
                          <Link href={`/departments/${d.slug}`} className="text-navy-500 hover:text-gold-600">
                            <L text={d.name} />
                          </Link>
                        </li>
                      ))}
                    {item.key === "contact" &&
                      extra.map((c) => (
                        <li key={c.href}>
                          <Link href={c.href} className="inline-flex items-center gap-1.5 text-navy-700 hover:text-gold-600">
                            <ChevronRight className="h-3.5 w-3.5 text-gold-500" aria-hidden="true" />
                            <T k={`nav.${c.key}` as TKey} />
                          </Link>
                        </li>
                      ))}
                  </ul>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
          <p className="mt-8 text-center text-sm text-navy-500">
            XML sitemap for search engines:{" "}
            <a href="/sitemap.xml" className="font-semibold text-navy-700 underline decoration-gold-400 underline-offset-4">
              /sitemap.xml
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
