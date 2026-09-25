import { PageHero } from "@/components/ui/PageHero";
import { Stagger, StaggerItem } from "@/components/ui/Reveal";
import { SchemeCard } from "@/components/cards/SchemeCard";
import { schemes } from "@/data/schemes";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Government Schemes",
  description: "Central, State and local welfare schemes implemented by Nagar Parishad Dhamangaon Railway — PMAY-U, SBM-U, AMRUT, PM SVANidhi, DAY-NULM and more.",
  path: "/schemes",
  keywords: ["PMAY", "PM SVANidhi", "Swachh Bharat", "yojana"],
});

export default function SchemesPage() {
  return (
    <>
      <PageHero titleKey="pages.schemes.title" descKey="pages.schemes.desc" />
      <section className="bg-pattern-light py-16 sm:py-20">
        <div className="container">
          <Stagger className="grid gap-6 lg:grid-cols-2">
            {schemes.map((s) => (
              <StaggerItem key={s.id}>
                <SchemeCard scheme={s} detailed />
              </StaggerItem>
            ))}
          </Stagger>
          <p className="mt-10 text-center text-sm text-navy-500">
            Eligibility and benefits are summarised for guidance. Refer to the official scheme guidelines or contact
            the Nagar Parishad office for current norms.
          </p>
        </div>
      </section>
    </>
  );
}
