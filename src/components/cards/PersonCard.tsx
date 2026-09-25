import Image from "next/image";
import { BadgeCheck, ExternalLink, GraduationCap, Mail, Phone, Quote } from "lucide-react";
import type { Person } from "@/types";
import { L } from "@/i18n/T";
import { cn, telHref } from "@/lib/utils";

/** Portrait frame with a gold ring. Falls back to initials when no photo is set. */
export function Portrait({ person, size = "md" }: { person: Person; size?: "sm" | "md" | "lg" }) {
  const dims = { sm: "h-16 w-16", md: "h-28 w-28", lg: "h-40 w-40 sm:h-48 sm:w-48" }[size];
  return (
    <div className={cn("relative shrink-0 rounded-full bg-gradient-to-br from-gold-200 via-gold-400 to-gold-700 p-[3px] shadow-gold", dims)}>
      <div className="relative h-full w-full overflow-hidden rounded-full bg-navy-900">
        {person.photo ? (
          <Image
            src={person.photo}
            alt={person.name.en}
            fill
            sizes="200px"
            className="object-cover"
          />
        ) : (
          <span className="grid h-full w-full place-items-center font-display text-2xl text-gold-200">
            {person.designation.en.charAt(0)}
          </span>
        )}
      </div>
    </div>
  );
}

/** Large message card for the President / Chief Officer. */
export function LeaderMessageCard({ person, reverse = false }: { person: Person; reverse?: boolean }) {
  return (
    <article
      className={cn(
        "card-royal flex flex-col items-center gap-8 p-6 sm:p-10 lg:flex-row lg:items-start",
        reverse && "lg:flex-row-reverse",
      )}
    >
      <div className="flex flex-col items-center text-center">
        <Portrait person={person} size="lg" />
        <h3 className="mt-5 text-xl font-semibold">
          <L text={person.name} />
        </h3>
        <p className="mt-1 text-sm font-semibold uppercase tracking-[0.14em] text-gold-600">
          <L text={person.designation} />
        </p>
        {(person.party || person.since) && (
          <p className="mt-2 text-xs text-navy-500">
            {[person.party, person.since && `since ${person.since}`].filter(Boolean).join(" · ")}
          </p>
        )}
        {(person.qualification || person.qualificationNote) && (
          <p className="mt-2 flex max-w-xs items-start gap-1.5 text-left text-xs text-navy-500">
            <GraduationCap className="mt-0.5 h-3.5 w-3.5 shrink-0 text-gold-600" aria-hidden="true" />
            <L text={person.qualification ?? person.qualificationNote} />
          </p>
        )}
        <div className="mt-4 flex flex-col gap-1.5 text-sm text-navy-600">
          {person.phone && (
            <a href={telHref(person.phone)} className="inline-flex items-center justify-center gap-2 hover:text-gold-600">
              <Phone className="h-3.5 w-3.5" aria-hidden="true" /> {person.phone}
            </a>
          )}
          {person.email && (
            <a href={`mailto:${person.email}`} className="inline-flex items-center justify-center gap-2 break-all hover:text-gold-600">
              <Mail className="h-3.5 w-3.5" aria-hidden="true" /> {person.email}
            </a>
          )}
        </div>
      </div>
      {!person.message && person.profile && (
        <div className="flex-1">
          <p className="text-lg leading-relaxed text-navy-700">
            <L text={person.profile} />
          </p>
          {person.source && <SourceLink source={person.source} />}
        </div>
      )}
      {person.message && (
        <blockquote className="relative flex-1">
          <Quote className="h-10 w-10 text-gold-300" aria-hidden="true" />
          <p className="mt-3 font-display text-lg leading-relaxed text-navy-800 sm:text-xl">
            <L text={person.message} />
          </p>
          <footer className="mt-6 flex items-center gap-3">
            <span className="h-px w-10 bg-gold-500" aria-hidden="true" />
            <cite className="not-italic text-sm font-semibold text-navy-700">
              <L text={person.name} />
            </cite>
          </footer>
        </blockquote>
      )}
    </article>
  );
}

/** "Verified from" link shown under verified facts. */
export function SourceLink({ source }: { source: NonNullable<Person["source"]> }) {
  return (
    <a
      href={source.url}
      target="_blank"
      rel="noopener noreferrer"
      className="mt-4 inline-flex items-center gap-1.5 text-xs text-navy-500 hover:text-gold-700"
    >
      <BadgeCheck className="h-3.5 w-3.5 text-emerald-600" aria-hidden="true" />
      Source: {source.label}
      <ExternalLink className="h-3 w-3" aria-hidden="true" />
    </a>
  );
}

/** Compact officer card. */
export function OfficerCard({ person }: { person: Person }) {
  return (
    <article className="card-royal flex items-center gap-4 p-5">
      <Portrait person={person} size="sm" />
      <div className="min-w-0">
        <h3 className="truncate font-sans text-sm font-semibold text-navy-900">
          <L text={person.name} />
        </h3>
        <p className="text-xs font-medium uppercase tracking-wide text-gold-600">
          <L text={person.designation} />
        </p>
        {(person.qualification || person.qualificationNote) && (
          <p className="mt-1 flex items-start gap-1 text-[0.7rem] text-navy-400">
            <GraduationCap className="mt-0.5 h-3 w-3 shrink-0 text-gold-500" aria-hidden="true" />
            <L text={person.qualification ?? person.qualificationNote} />
          </p>
        )}
        {person.phone && (
          <a href={telHref(person.phone)} className="mt-1 inline-flex items-center gap-1.5 text-xs text-navy-600 hover:text-gold-600">
            <Phone className="h-3 w-3" aria-hidden="true" /> {person.phone}
          </a>
        )}
      </div>
    </article>
  );
}
