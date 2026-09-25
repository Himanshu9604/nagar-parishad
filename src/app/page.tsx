import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ExternalLink, Landmark, Phone } from "lucide-react";
import { HeroSection } from "@/components/home/HeroSection";
import { NoticeTicker } from "@/components/home/NoticeTicker";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { Icon } from "@/components/ui/Icon";
import { ServiceCard } from "@/components/cards/ServiceCard";
import { DocumentCard } from "@/components/cards/DocumentCard";
import { SchemeCard } from "@/components/cards/SchemeCard";
import { Portrait } from "@/components/cards/PersonCard";
import { TenderList } from "@/components/features/TenderList";
import { services, featuredServiceSlugs } from "@/data/services";
import { notices } from "@/data/notices";
import { circulars } from "@/data/circulars";
import { schemes } from "@/data/schemes";
import { tenders } from "@/data/tenders";
import { gallery } from "@/data/gallery";
import { govLinks } from "@/data/links";
import { emergencyContacts } from "@/data/emergency";
import { chiefOfficer, president } from "@/data/leadership";
import { siteConfig, townStats } from "@/data/site";
import { L, T } from "@/i18n/T";
import { sortByDateDesc, telHref } from "@/lib/utils";

export const metadata: Metadata = {
  title: { absolute: `${siteConfig.name} | Official Website` },
  description: siteConfig.description,
  alternates: { canonical: "/" },
};

const featuredServices = featuredServiceSlugs
  .map((slug) => services.find((s) => s.slug === slug))
  .filter((s): s is (typeof services)[number] => Boolean(s));

const latestDocs = sortByDateDesc([...notices, ...circulars]).slice(0, 6);
const quickEmergency = emergencyContacts.filter((e) => ["erss", "police", "fire", "ambulance"].includes(e.id));

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <NoticeTicker />

      {/* ── Citizen services ───────────────────────────── */}
      <section className="bg-pattern-light py-20 sm:py-24" aria-labelledby="services-heading">
        <div className="container">
          <SectionHeading
            eyebrowKey="nav.services"
            titleKey="home.quickServices"
            subtitleKey="home.quickServicesSub"
            action={{ href: "/services", labelKey: "nav.allServices" }}
          />
          <Stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {featuredServices.map((s) => (
              <StaggerItem key={s.slug}>
                <ServiceCard service={s} />
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* ── Leadership ─────────────────────────────────── */}
      <section className="relative overflow-hidden bg-ivory-200/60 py-20 sm:py-24">
        <div className="container">
          <SectionHeading eyebrowKey="home.leadershipTitle" titleKey="nav.leadership" subtitleKey="home.leadershipSub" align="center" />
          <div className="grid gap-6 lg:grid-cols-2">
            {[president, chiefOfficer].map((p, i) => (
              <Reveal key={p.id} delay={i * 0.1}>
                <article className="card-royal flex h-full flex-col gap-6 p-7 sm:flex-row sm:items-start">
                  <Portrait person={p} size="md" />
                  <div className="flex-1">
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold-600">
                      <L text={p.designation} />
                    </p>
                    <h3 className="mt-1 text-xl font-semibold">
                      <L text={p.name} />
                    </h3>
                    <p className="mt-3 line-clamp-4 text-sm leading-relaxed text-navy-600">
                      <L text={p.message ?? p.profile} />
                    </p>
                    <Link href="/leadership" className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-navy-700 hover:text-gold-600">
                      <T k="common.readMore" />
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </Link>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Notices & circulars ─────────────────────────── */}
      <section className="py-20 sm:py-24" aria-labelledby="notices-heading">
        <div className="container">
          <SectionHeading
            eyebrowKey="nav.documents"
            titleKey="home.latestNotices"
            subtitleKey="home.latestNoticesSub"
            action={{ href: "/notices" }}
          />
          <Stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {latestDocs.map((d) => (
              <StaggerItem key={d.id}>
                <DocumentCard doc={d} compact />
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* ── About + stats ───────────────────────────────── */}
      <section className="relative overflow-hidden bg-royal-gradient py-20 text-ivory sm:py-24">
        <div className="bg-pattern-royal absolute inset-0 opacity-40" aria-hidden="true" />
        <div className="container relative grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <span className="eyebrow !text-gold-300">
              <span className="h-px w-6 bg-gold-400" aria-hidden="true" />
              <T k="nav.aboutParishad" />
            </span>
            <h2 className="mt-3 text-balance text-3xl font-semibold !text-ivory sm:text-4xl">
              <T k="home.aboutTitle" />
            </h2>
            <p className="mt-5 leading-relaxed text-ivory/80">
              <T k="home.aboutText" />
            </p>
            <p className="mt-3 text-sm leading-relaxed text-gold-100/80">
              <T k="history.teaser" />
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/about" className="btn-gold">
                <T k="common.readMore" />
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link href="/history" className="btn-ghost-light">
                <T k="nav.history" />
              </Link>
              <Link href="/wards" className="btn-ghost-light">
                <T k="nav.wards" />
              </Link>
              <Link href="/organisation-structure" className="btn-ghost-light">
                <T k="nav.orgStructure" />
              </Link>
            </div>
          </Reveal>
          <Stagger className="grid grid-cols-2 gap-4">
            {townStats.map((s) => (
              <StaggerItem key={s.value}>
                <div className="card-glass h-full p-6 text-center">
                  <p className="font-display text-3xl font-semibold text-gold-200 sm:text-4xl">{s.value}</p>
                  <p className="mt-2 text-sm text-ivory/75">
                    <L text={s.label} />
                  </p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* ── Schemes ─────────────────────────────────────── */}
      <section className="bg-pattern-light py-20 sm:py-24">
        <div className="container">
          <SectionHeading eyebrowKey="nav.schemes" titleKey="home.schemesTitle" subtitleKey="home.schemesSub" action={{ href: "/schemes" }} />
          <Stagger className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {schemes.slice(0, 4).map((s) => (
              <StaggerItem key={s.id}>
                <SchemeCard scheme={s} />
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* ── Tenders ─────────────────────────────────────── */}
      <section className="bg-ivory-200/60 py-20 sm:py-24">
        <div className="container">
          <SectionHeading eyebrowKey="nav.tenders" titleKey="home.tendersTitle" subtitleKey="home.tendersSub" action={{ href: "/tenders" }} />
          <Reveal>
            <TenderList tenders={tenders} limit={3} />
          </Reveal>
        </div>
      </section>

      {/* ── Gallery ─────────────────────────────────────── */}
      <section className="py-20 sm:py-24">
        <div className="container">
          <SectionHeading eyebrowKey="nav.gallery" titleKey="home.galleryTitle" subtitleKey="home.gallerySub" action={{ href: "/gallery" }} />
          <Stagger className="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:grid-rows-2">
            {gallery.slice(0, 5).map((g, i) => (
              <StaggerItem key={g.id} className={i === 0 ? "col-span-2 row-span-2" : ""}>
                <Link
                  href="/gallery"
                  className={`group relative block overflow-hidden rounded-2xl shadow-royal ring-1 ring-navy-100 ${
                    i === 0 ? "aspect-[4/3] lg:aspect-auto lg:h-full" : "aspect-[4/3]"
                  }`}
                >
                  <Image
                    src={g.src}
                    alt={g.alt.en}
                    fill
                    sizes={i === 0 ? "(min-width:1024px) 50vw, 100vw" : "(min-width:1024px) 25vw, 50vw"}
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                  <span className="absolute inset-0 bg-gradient-to-t from-navy-950/80 to-transparent opacity-80" />
                  <span className="absolute bottom-3 left-4 right-4 text-sm font-semibold text-ivory">
                    <L text={g.alt} />
                  </span>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* ── Important links + emergency ─────────────────── */}
      <section className="border-t border-navy-100 bg-white py-20">
        <div className="container grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <SectionHeading titleKey="home.linksTitle" action={{ href: "/important-links" }} className="!mb-6" />
            <Stagger className="grid gap-3 sm:grid-cols-2">
              {govLinks.slice(0, 8).map((g) => (
                <StaggerItem key={g.url}>
                  <a
                    href={g.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-3 rounded-xl border border-navy-100 bg-ivory-50 p-4 transition hover:border-gold-300 hover:bg-white hover:shadow-royal"
                  >
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-navy-900 text-gold-200">
                      <Landmark className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block truncate text-sm font-semibold text-navy-900">{g.title}</span>
                      <span className="block truncate text-xs text-navy-500">{g.url.replace(/^https?:\/\//, "")}</span>
                    </span>
                    <ExternalLink className="h-4 w-4 shrink-0 text-navy-300 group-hover:text-gold-600" aria-hidden="true" />
                  </a>
                </StaggerItem>
              ))}
            </Stagger>
          </div>

          <Reveal className="relative overflow-hidden rounded-3xl bg-royal-gradient p-7 text-ivory shadow-royal-lg">
            <div className="bg-pattern-royal absolute inset-0 opacity-40" aria-hidden="true" />
            <div className="relative">
              <h2 className="font-display text-2xl font-semibold !text-ivory">
                <T k="home.emergencyTitle" />
              </h2>
              <div className="gold-divider my-5 opacity-60" aria-hidden="true" />
              <ul className="space-y-3">
                {quickEmergency.map((e) => (
                  <li key={e.id}>
                    <a
                      href={telHref(e.number)}
                      className="flex items-center gap-3 rounded-xl bg-white/5 p-3 transition hover:bg-white/10"
                    >
                      <span className="grid h-10 w-10 place-items-center rounded-full bg-gold-400/15 text-gold-200">
                        <Icon name={e.icon} className="h-5 w-5" />
                      </span>
                      <span className="flex-1 text-sm">
                        <L text={e.name} />
                      </span>
                      <span className="font-display text-xl font-semibold text-gold-200">{e.number}</span>
                    </a>
                  </li>
                ))}
              </ul>
              <Link href="/emergency-contacts" className="btn-gold mt-6 w-full">
                <Phone className="h-4 w-4" aria-hidden="true" />
                <T k="nav.emergency" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
