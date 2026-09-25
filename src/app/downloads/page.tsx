import { PageHero } from "@/components/ui/PageHero";
import { DocumentExplorer } from "@/components/features/DocumentExplorer";
import { forms } from "@/data/forms";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Download Forms",
  description: "Download application forms for birth & death certificates, water connection, property mutation, trade licence, building permission, RTI and grievances.",
  path: "/downloads",
  keywords: ["forms", "application form", "arj namuna"],
});

export default function DownloadsPage() {
  return (
    <>
      <PageHero titleKey="pages.downloads.title" descKey="pages.downloads.desc" trail={[{ k: "nav.documents", href: "/notices" }]} />
      <section className="bg-pattern-light py-16 sm:py-20">
        <div className="container">
          <DocumentExplorer documents={forms} showYear={false} />
        </div>
      </section>
    </>
  );
}
