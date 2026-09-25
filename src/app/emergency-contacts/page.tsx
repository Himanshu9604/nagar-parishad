import { PhoneCall } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { Icon } from "@/components/ui/Icon";
import { emergencyContacts } from "@/data/emergency";
import type { EmergencyContact } from "@/types";
import { L, T } from "@/i18n/T";
import { buildMetadata } from "@/lib/seo";
import { telHref } from "@/lib/utils";

export const metadata = buildMetadata({
  title: "Emergency & Important Contacts",
  description: "Emergency helpline numbers for Dhamangaon Railway — 112, police, fire, ambulance, women & child helplines, hospital and Nagar Parishad contacts.",
  path: "/emergency-contacts",
  keywords: ["emergency number", "police", "ambulance 108", "fire 101"],
});

function ContactTile({ c, highlight = false }: { c: EmergencyContact; highlight?: boolean }) {
  return (
    <a
      href={telHref(c.number)}
      className={
        highlight
          ? "group relative flex h-full flex-col overflow-hidden rounded-2xl bg-royal-gradient p-6 text-ivory shadow-royal-lg ring-1 ring-gold-300/30 transition hover:-translate-y-1"
          : "card-royal group flex h-full flex-col p-6 hover:-translate-y-1"
      }
    >
      <div className="flex items-start justify-between">
        <span
          className={
            highlight
              ? "grid h-12 w-12 place-items-center rounded-xl bg-gold-400 text-navy-950"
              : "grid h-12 w-12 place-items-center rounded-xl bg-navy-50 text-navy-700 transition group-hover:bg-navy-900 group-hover:text-gold-200"
          }
        >
          <Icon name={c.icon} className="h-6 w-6" />
        </span>
        <PhoneCall className={highlight ? "h-5 w-5 text-gold-200" : "h-5 w-5 text-navy-300 group-hover:text-gold-600"} aria-hidden="true" />
      </div>
      <p className={highlight ? "mt-5 text-sm text-ivory/80" : "mt-5 text-sm text-navy-600"}>
        <L text={c.name} />
      </p>
      <p className={highlight ? "mt-1 font-display text-4xl font-semibold text-gold-200" : "mt-1 font-display text-2xl font-semibold text-navy-900"}>
        {c.number}
      </p>
      {c.note && <p className={highlight ? "mt-1 text-xs text-ivory/60" : "mt-1 text-xs text-navy-500"}>{c.note}</p>}
      <span className={highlight ? "mt-auto pt-4 text-xs font-semibold text-gold-200" : "mt-auto pt-4 text-xs font-semibold text-gold-700"}>
        <T k="common.callNow" /> →
      </span>
    </a>
  );
}

export default function EmergencyPage() {
  const national = emergencyContacts.filter((c) => c.kind === "national");
  const local = emergencyContacts.filter((c) => c.kind === "local");
  const [top, ...rest] = national;

  return (
    <>
      <PageHero titleKey="pages.emergency.title" descKey="pages.emergency.desc" trail={[{ k: "nav.contact", href: "/contact" }]} />

      <section className="bg-pattern-light py-16 sm:py-20">
        <div className="container">
          <h2 className="mb-6 text-2xl font-semibold">National Helplines</h2>
          <Stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {top && (
              <StaggerItem className="sm:col-span-2 lg:row-span-2">
                <ContactTile c={top} highlight />
              </StaggerItem>
            )}
            {rest.map((c) => (
              <StaggerItem key={c.id}>
                <ContactTile c={c} />
              </StaggerItem>
            ))}
          </Stagger>

          <h2 className="mb-6 mt-16 text-2xl font-semibold">Local Contacts – Dhamangaon Railway</h2>
          <Stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {local.map((c) => (
              <StaggerItem key={c.id}>
                <ContactTile c={c} />
              </StaggerItem>
            ))}
          </Stagger>

          <Reveal className="mt-12 rounded-2xl border border-gold-200 bg-gold-50/70 p-5 text-sm text-navy-700">
            In any life-threatening emergency, dial <strong className="text-navy-950">112</strong> first. Local numbers
            are provided for convenience and are subject to change.
          </Reveal>
        </div>
      </section>
    </>
  );
}
