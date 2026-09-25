import { PageHero } from "@/components/ui/PageHero";
import { Stagger, StaggerItem } from "@/components/ui/Reveal";
import { DepartmentCard } from "@/components/cards/DepartmentCard";
import { departments } from "@/data/departments";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Departments",
  description: "Departments of Nagar Parishad Dhamangaon Railway — administration, tax, water supply, sanitation, public works, town planning and more.",
  path: "/departments",
});

export default function DepartmentsPage() {
  return (
    <>
      <PageHero titleKey="pages.departments.title" descKey="pages.departments.desc" trail={[{ k: "nav.about", href: "/about" }]} />
      <section className="bg-pattern-light py-16 sm:py-20">
        <div className="container">
          <Stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {departments.map((d) => (
              <StaggerItem key={d.slug}>
                <DepartmentCard dept={d} />
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>
    </>
  );
}
