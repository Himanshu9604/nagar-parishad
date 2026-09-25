import Link from "next/link";
import { ArrowUpRight, Clock, IndianRupee } from "lucide-react";
import type { Service } from "@/types";
import { L, T } from "@/i18n/T";
import { Icon } from "@/components/ui/Icon";

/** Service tile. Links to the detail page, the online portal, or /services. */
export function ServiceCard({ service, detailed = false }: { service: Service; detailed?: boolean }) {
  const href = service.href ?? service.onlineUrl ?? "/services";
  const external = !service.href && !!service.onlineUrl;

  const body = (
    <>
      <div className="flex items-start justify-between gap-3">
        <span className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-navy-800 to-navy-950 text-gold-200 shadow-royal transition duration-300 group-hover:from-gold-400 group-hover:to-gold-600 group-hover:text-navy-950">
          <Icon name={service.icon} className="h-6 w-6" />
        </span>
        <ArrowUpRight
          className="h-5 w-5 text-navy-300 transition duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-gold-600"
          aria-hidden="true"
        />
      </div>
      <h3 className="mt-5 font-sans text-base font-semibold text-navy-900">
        <L text={service.title} />
      </h3>
      <p className="mt-1.5 text-sm leading-relaxed text-navy-600">
        <L text={service.summary} />
      </p>
      {detailed && (service.timeline || service.fee) && (
        <dl className="mt-4 flex flex-wrap gap-x-4 gap-y-1.5 border-t border-navy-100 pt-3 text-xs text-navy-600">
          {service.timeline && (
            <div className="inline-flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5 text-gold-600" aria-hidden="true" />
              <dt className="sr-only">
                <T k="common.timeline" />
              </dt>
              <dd>{service.timeline}</dd>
            </div>
          )}
          {service.fee && (
            <div className="inline-flex items-center gap-1.5">
              <IndianRupee className="h-3.5 w-3.5 text-gold-600" aria-hidden="true" />
              <dt className="sr-only">
                <T k="common.fees" />
              </dt>
              <dd>{service.fee.replace("₹ ", "")}</dd>
            </div>
          )}
        </dl>
      )}
    </>
  );

  const className = "card-royal group flex h-full flex-col p-6 hover:-translate-y-1";

  return external ? (
    <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
      {body}
    </a>
  ) : (
    <Link href={href} className={className}>
      {body}
    </Link>
  );
}
