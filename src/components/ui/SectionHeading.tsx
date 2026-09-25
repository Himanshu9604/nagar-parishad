import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { TKey } from "@/i18n/dictionaries";
import { T } from "@/i18n/T";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

interface SectionHeadingProps {
  eyebrowKey?: TKey;
  titleKey?: TKey;
  title?: React.ReactNode;
  subtitleKey?: TKey;
  align?: "left" | "center";
  tone?: "light" | "dark";
  action?: { href: string; labelKey?: TKey };
  className?: string;
}

export function SectionHeading({
  eyebrowKey,
  titleKey,
  title,
  subtitleKey,
  align = "left",
  tone = "light",
  action,
  className,
}: SectionHeadingProps) {
  const centered = align === "center";
  return (
    <Reveal
      className={cn(
        "mb-10 flex flex-col gap-4",
        centered ? "items-center text-center" : "sm:flex-row sm:items-end sm:justify-between",
        className,
      )}
    >
      <div className={cn("max-w-2xl", centered && "mx-auto")}>
        {eyebrowKey && (
          <span className="eyebrow">
            <span className="h-px w-6 bg-gold-500" aria-hidden="true" />
            <T k={eyebrowKey} />
          </span>
        )}
        <h2
          className={cn(
            "mt-2 text-balance text-3xl font-semibold sm:text-4xl",
            tone === "dark" && "!text-ivory",
          )}
        >
          {titleKey ? <T k={titleKey} /> : title}
        </h2>
        {subtitleKey && (
          <p className={cn("mt-3 leading-relaxed", tone === "dark" ? "text-ivory/75" : "text-navy-600")}>
            <T k={subtitleKey} />
          </p>
        )}
      </div>
      {action && (
        <Link
          href={action.href}
          className={cn(
            "group inline-flex shrink-0 items-center gap-2 text-sm font-semibold",
            tone === "dark" ? "text-gold-200 hover:text-gold-100" : "text-navy-700 hover:text-gold-600",
          )}
        >
          <T k={action.labelKey ?? "common.viewAll"} />
          <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" aria-hidden="true" />
        </Link>
      )}
    </Reveal>
  );
}
