import { PageHero } from "@/components/ui/PageHero";
import { DocumentExplorer } from "@/components/features/DocumentExplorer";
import { circulars } from "@/data/circulars";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Circulars",
  description: "Government Resolutions (GR) and circulars applicable to Nagar Parishad Dhamangaon Railway.",
  path: "/circulars",
  keywords: ["GR", "shasan nirnay", "circular"],
});

export default function CircularsPage() {
  return (
    <>
      <PageHero titleKey="pages.circulars.title" descKey="pages.circulars.desc" trail={[{ k: "nav.documents", href: "/notices" }]} />
      <section className="bg-pattern-light py-16 sm:py-20">
        <div className="container">
          <DocumentExplorer documents={circulars} />
        </div>
      </section>
    </>
  );
}
