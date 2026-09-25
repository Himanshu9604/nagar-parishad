import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Check, Mail, Phone, UserRound } from "lucide-react";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Reveal } from "@/components/ui/Reveal";
import { Icon } from "@/components/ui/Icon";
import { departments, getDepartment } from "@/data/departments";
import { L, T } from "@/i18n/T";
import { buildMetadata } from "@/lib/seo";
import { telHref } from "@/lib/utils";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return departments.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const dept = getDepartment(slug);
  if (!dept) return {};
  return buildMetadata({
    title: `${dept.name.en} Department`,
    description: dept.summary.en,
    path: `/departments/${dept.slug}`,
  });
}

export default async function DepartmentPage({ params }: Props) {
  const { slug } = await params;
  const dept = getDepartment(slug);
  if (!dept) notFound();

  const others = departments.filter((d) => d.slug !== dept.slug).slice(0, 6);

  return (
    <>
      <section className="relative overflow-hidden bg-royal-gradient text-ivory">
        <div className="bg-pattern-royal absolute inset-0 opacity-60" aria-hidden="true" />
        <div className="container relative py-12 sm:py-16">
          <Breadcrumbs
            tone="dark"
            items={[
              { k: "nav.departments", href: "/departments" },
              { label: dept.name },
            ]}
          />
          <Reveal className="mt-6 flex flex-col gap-5 sm:flex-row sm:items-center">
            <span className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-gold-200 to-gold-500 text-navy-950 shadow-gold">
              <Icon name={dept.icon} className="h-8 w-8" />
            </span>
            <div>
              <h1 className="text-3xl font-semibold !text-ivory sm:text-4xl">
                <L text={dept.name} />
              </h1>
              <p className="mt-2 max-w-2xl text-ivory/80">
                <L text={dept.summary} />
              </p>
            </div>
          </Reveal>
        </div>
        <div className="gold-divider absolute bottom-0 left-0" aria-hidden="true" />
      </section>

      <section className="py-16">
        <div className="container grid gap-8 lg:grid-cols-3">
          <div className="space-y-8 lg:col-span-2">
            <Reveal className="card-royal p-7">
              <h2 className="text-2xl font-semibold">
                <T k="common.functions" />
              </h2>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {dept.functions.map((f) => (
                  <li key={f} className="flex gap-3 rounded-xl bg-ivory-100 p-3 text-sm text-navy-700">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold-600" aria-hidden="true" />
                    {f}
                  </li>
                ))}
              </ul>
            </Reveal>

            {dept.services && dept.services.length > 0 && (
              <Reveal className="card-royal p-7">
                <h2 className="text-2xl font-semibold">
                  <T k="nav.services" />
                </h2>
                <div className="mt-5 flex flex-wrap gap-2">
                  {dept.services.map((s) => (
                    <span key={s} className="rounded-full bg-navy-50 px-4 py-2 text-sm font-medium text-navy-700 ring-1 ring-navy-100">
                      {s}
                    </span>
                  ))}
                </div>
                <Link href="/services" className="mt-6 inline-flex text-sm font-semibold text-navy-700 hover:text-gold-600">
                  <T k="nav.allServices" /> →
                </Link>
              </Reveal>
            )}
          </div>

          <aside className="space-y-6">
            <Reveal className="card-royal overflow-hidden">
              <div className="bg-navy-900 px-6 py-4 font-display text-lg font-semibold text-ivory">
                <T k="nav.contact" />
              </div>
              <ul className="space-y-4 p-6 text-sm text-navy-700">
                <li className="flex gap-3">
                  <UserRound className="h-4 w-4 text-gold-600" aria-hidden="true" />
                  <span>
                    <span className="block text-xs text-navy-500">
                      <T k="common.head" />
                    </span>
                    {dept.head}
                  </span>
                </li>
                {dept.phone && (
                  <li className="flex gap-3">
                    <Phone className="h-4 w-4 text-gold-600" aria-hidden="true" />
                    <a href={telHref(dept.phone)} className="hover:text-gold-600">
                      {dept.phone}
                    </a>
                  </li>
                )}
                {dept.email && (
                  <li className="flex gap-3">
                    <Mail className="h-4 w-4 text-gold-600" aria-hidden="true" />
                    <a href={`mailto:${dept.email}`} className="break-all hover:text-gold-600">
                      {dept.email}
                    </a>
                  </li>
                )}
              </ul>
            </Reveal>

            <Reveal className="card-royal p-6">
              <h2 className="font-display text-lg font-semibold">
                <T k="nav.departments" />
              </h2>
              <ul className="mt-4 space-y-1">
                {others.map((o) => (
                  <li key={o.slug}>
                    <Link
                      href={`/departments/${o.slug}`}
                      className="flex items-center gap-3 rounded-lg px-2 py-2 text-sm text-navy-700 transition hover:bg-ivory-200 hover:text-navy-950"
                    >
                      <Icon name={o.icon} className="h-4 w-4 text-gold-600" />
                      <L text={o.name} />
                    </Link>
                  </li>
                ))}
              </ul>
              <Link href="/departments" className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-navy-700 hover:text-gold-600">
                <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                <T k="common.viewAll" />
              </Link>
            </Reveal>
          </aside>
        </div>
      </section>
    </>
  );
}
