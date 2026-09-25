import Link from "next/link";
import { ArrowRight, Phone, UserRound } from "lucide-react";
import type { Department } from "@/types";
import { L, T } from "@/i18n/T";
import { Icon } from "@/components/ui/Icon";

export function DepartmentCard({ dept }: { dept: Department }) {
  return (
    <Link href={`/departments/${dept.slug}`} className="card-royal group flex h-full flex-col p-6 hover:-translate-y-1">
      <div className="flex items-center gap-4">
        <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gold-50 text-gold-700 ring-1 ring-gold-200 transition group-hover:bg-navy-900 group-hover:text-gold-200 group-hover:ring-navy-900">
          <Icon name={dept.icon} className="h-6 w-6" />
        </span>
        <h3 className="font-sans text-base font-semibold leading-snug text-navy-900">
          <L text={dept.name} />
        </h3>
      </div>
      <p className="mt-4 text-sm leading-relaxed text-navy-600">
        <L text={dept.summary} />
      </p>
      <div className="mt-auto space-y-1.5 border-t border-navy-100 pt-4 text-xs text-navy-600">
        <p className="flex items-center gap-2">
          <UserRound className="h-3.5 w-3.5 text-gold-600" aria-hidden="true" />
          {dept.head}
        </p>
        {dept.phone && (
          <p className="flex items-center gap-2">
            <Phone className="h-3.5 w-3.5 text-gold-600" aria-hidden="true" />
            {dept.phone}
          </p>
        )}
      </div>
      <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-navy-700 group-hover:text-gold-600">
        <T k="common.readMore" />
        <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" aria-hidden="true" />
      </span>
    </Link>
  );
}
