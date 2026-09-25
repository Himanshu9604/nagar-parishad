import { ShieldCheck } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceCard } from "@/components/cards/ServiceCard";
import { services } from "@/data/services";
import { L } from "@/i18n/T";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Citizen Services",
  description: "All civic services of Nagar Parishad Dhamangaon Railway — certificates, property tax, water connection, building permission, trade licence, grievances and RTI.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <PageHero titleKey="pages.services.title" descKey="pages.services.desc" />

      <section className="bg-pattern-light py-16 sm:py-20">
        <div className="container">
          <Stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {services.map((s) => (
              <StaggerItem key={s.slug}>
                <ServiceCard service={s} detailed />
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="pb-20">
        <div className="container">
          <SectionHeading title="Citizen Charter – Right to Public Services" align="center" />
          <Reveal className="card-royal overflow-hidden">
            <div className="flex items-start gap-3 border-b border-navy-100 bg-gold-50/60 p-5 text-sm text-navy-700">
              <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-gold-600" aria-hidden="true" />
              Under the Maharashtra Right to Public Services Act, 2015, every eligible applicant is entitled to receive
              notified services within the stipulated time. If a service is not delivered in time, citizens may file an
              appeal with the First Appellate Authority.
            </div>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[40rem] text-left text-sm">
                <thead className="bg-navy-900 text-xs uppercase tracking-wider text-gold-100">
                  <tr>
                    <th scope="col" className="px-5 py-3.5 font-semibold">#</th>
                    <th scope="col" className="px-5 py-3.5 font-semibold">Service</th>
                    <th scope="col" className="px-5 py-3.5 font-semibold">Department</th>
                    <th scope="col" className="px-5 py-3.5 font-semibold">Timeline</th>
                    <th scope="col" className="px-5 py-3.5 font-semibold">Fee</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-navy-100">
                  {services.map((s, i) => (
                    <tr key={s.slug} className="hover:bg-ivory-100">
                      <td className="px-5 py-3.5 text-navy-500">{i + 1}</td>
                      <td className="px-5 py-3.5 font-medium text-navy-900">
                        <L text={s.title} />
                      </td>
                      <td className="px-5 py-3.5 text-navy-600">{s.department}</td>
                      <td className="whitespace-nowrap px-5 py-3.5 text-navy-700">{s.timeline ?? "—"}</td>
                      <td className="whitespace-nowrap px-5 py-3.5 text-navy-700">{s.fee ?? "As applicable"}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
