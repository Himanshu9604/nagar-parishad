import { Megaphone } from "lucide-react";
import { notices } from "@/data/notices";
import { L, T } from "@/i18n/T";
import { sortByDateDesc } from "@/lib/utils";

/** Scrolling announcement strip (CSS marquee, pauses on hover, static under reduced motion). */
export function NoticeTicker() {
  const items = sortByDateDesc(notices).slice(0, 6);
  const loop = [...items, ...items];
  return (
    <div className="border-b border-gold-200/60 bg-gradient-to-r from-gold-50 via-ivory to-gold-50">
      <div className="container flex items-center gap-4 py-2.5">
        <span className="inline-flex shrink-0 items-center gap-2 rounded-full bg-navy-900 px-3 py-1 text-xs font-semibold text-gold-200">
          <Megaphone className="h-3.5 w-3.5" aria-hidden="true" />
          <T k="home.latestNotices" />
        </span>
        <div className="group relative flex-1 overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_4%,black_96%,transparent)]">
          <ul className="flex w-max animate-marquee gap-10 group-hover:[animation-play-state:paused]">
            {loop.map((n, i) => (
              <li key={`${n.id}-${i}`} aria-hidden={i >= items.length ? true : undefined}>
                <a
                  href={n.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  tabIndex={i >= items.length ? -1 : undefined}
                  className="inline-flex items-center gap-2 whitespace-nowrap text-sm text-navy-800 hover:text-gold-700"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-gold-500" aria-hidden="true" />
                  <L text={n.title} />
                  {n.isNew && (
                    <span className="rounded bg-saffron px-1.5 text-[0.6rem] font-bold uppercase text-white">
                      <T k="common.new" />
                    </span>
                  )}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
