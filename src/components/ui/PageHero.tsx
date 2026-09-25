import type { TKey } from "@/i18n/dictionaries";
import { T } from "@/i18n/T";
import { Breadcrumbs, type Crumb } from "./Breadcrumbs";
import { Reveal } from "./Reveal";

interface PageHeroProps {
  titleKey: TKey;
  descKey?: TKey;
  /** Breadcrumb trail after "Home". The current page is added automatically from `titleKey`. */
  trail?: Crumb[];
  children?: React.ReactNode;
}

/** Royal navy banner shown at the top of every inner page. */
export function PageHero({ titleKey, descKey, trail = [], children }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-royal-gradient text-ivory">
      <div className="bg-pattern-royal absolute inset-0 opacity-60" aria-hidden="true" />
      <div
        className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-gold-400/10 blur-3xl"
        aria-hidden="true"
      />
      <div className="container relative py-12 sm:py-16">
        <Breadcrumbs tone="dark" items={[...trail, { k: titleKey }]} />
        <Reveal>
          <h1 className="mt-5 max-w-3xl text-balance text-3xl font-semibold !text-ivory sm:text-4xl lg:text-5xl">
            <T k={titleKey} />
          </h1>
          <div className="mt-4 h-[3px] w-24 rounded-full bg-gradient-to-r from-gold-300 to-gold-600" aria-hidden="true" />
          {descKey && (
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-ivory/80 sm:text-lg">
              <T k={descKey} />
            </p>
          )}
          {children}
        </Reveal>
      </div>
      <div className="gold-divider absolute bottom-0 left-0" aria-hidden="true" />
    </section>
  );
}
