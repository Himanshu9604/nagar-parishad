import Link from "next/link";
import { Clock, ExternalLink, Mail, MapPin, Phone } from "lucide-react";
import { footerQuickLinks, footerServiceLinks } from "@/data/navigation";
import { siteConfig } from "@/data/site";
import { govLinks } from "@/data/links";
import type { TKey } from "@/i18n/dictionaries";
import { LDate, T } from "@/i18n/T";
import { telHref } from "@/lib/utils";
import { Seal } from "@/components/ui/Seal";

const footerGovLinks = govLinks.filter((l) =>
  ["https://www.maharashtra.gov.in", "https://aaplesarkar.mahaonline.gov.in", "https://amravati.gov.in", "https://www.india.gov.in"].includes(l.url),
);

function FooterHeading({ k }: { k: TKey }) {
  return (
    <h2 className="mb-5 font-display text-lg font-semibold !text-ivory">
      <T k={k} />
      <span className="mt-2 block h-0.5 w-10 rounded-full bg-gold-400" aria-hidden="true" />
    </h2>
  );
}

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative mt-auto overflow-hidden bg-royal-gradient text-ivory/80">
      <div className="gold-divider" aria-hidden="true" />
      <div className="bg-pattern-royal absolute inset-0 opacity-40" aria-hidden="true" />

      <div className="container relative grid gap-12 py-14 sm:grid-cols-2 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <div className="flex items-center gap-3">
            <Seal className="h-14 w-14" />
            <div>
              <p className="font-display text-lg font-semibold text-ivory">
                <T k="site.name" />
              </p>
              <p className="text-xs uppercase tracking-[0.16em] text-gold-200">
                <T k="site.tagline" />
              </p>
            </div>
          </div>
          <p className="mt-5 text-sm leading-relaxed">
            <T k="footer.about" />
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {footerGovLinks.map((l) => (
              <a
                key={l.url}
                href={l.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 rounded-full border border-white/15 px-3 py-1 text-xs transition hover:border-gold-300 hover:text-gold-100"
              >
                {l.title}
                <ExternalLink className="h-3 w-3" aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>

        <div className="lg:col-span-2">
          <FooterHeading k="footer.quickLinks" />
          <ul className="space-y-2.5 text-sm">
            {footerQuickLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="transition hover:text-gold-200">
                  <T k={`nav.${l.key}` as TKey} />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-3">
          <FooterHeading k="footer.services" />
          <ul className="space-y-2.5 text-sm">
            {footerServiceLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="transition hover:text-gold-200">
                  <T k={`nav.${l.key}` as TKey} />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-3">
          <FooterHeading k="footer.reachUs" />
          <ul className="space-y-4 text-sm">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold-300" aria-hidden="true" />
              <address className="not-italic leading-relaxed">
                {siteConfig.address.line1}
                <br />
                {siteConfig.address.line2}
                <br />
                {siteConfig.address.city}
              </address>
            </li>
            <li className="flex gap-3">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold-300" aria-hidden="true" />
              <a href={telHref(siteConfig.phone)} className="hover:text-gold-200">
                {siteConfig.phone}
              </a>
            </li>
            <li className="flex gap-3">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold-300" aria-hidden="true" />
              <a href={`mailto:${siteConfig.email}`} className="break-all hover:text-gold-200">
                {siteConfig.email}
              </a>
            </li>
            <li className="flex gap-3">
              <Clock className="mt-0.5 h-4 w-4 shrink-0 text-gold-300" aria-hidden="true" />
              <span>
                <T k="common.officeHoursValue" />
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="relative border-t border-white/10">
        <div className="container flex flex-col gap-3 py-6 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} <T k="footer.rights" />
          </p>
          <p className="flex flex-wrap items-center gap-x-4 gap-y-1">
            <span>
              <T k="common.lastUpdated" />: <LDate date={siteConfig.lastUpdated} />
            </span>
            <Link href="/site-map" className="hover:text-gold-200">
              <T k="nav.sitemap" />
            </Link>
            <Link href="/contact" className="hover:text-gold-200">
              <T k="nav.contact" />
            </Link>
            <Link href="/website-policies" className="hover:text-gold-200">
              <T k="nav.websitePolicies" />
            </Link>
          </p>
        </div>
        <p className="container pb-6 text-[0.7rem] text-ivory/55">
          <T k="footer.disclaimer" /> <T k="footer.visitors" />
        </p>
      </div>
    </footer>
  );
}
