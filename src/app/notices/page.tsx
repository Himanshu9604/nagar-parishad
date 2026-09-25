import { PageHero } from "@/components/ui/PageHero";
import { DocumentExplorer } from "@/components/features/DocumentExplorer";
import { notices } from "@/data/notices";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Notices & Announcements",
  description: "Public notices, orders and announcements issued by Nagar Parishad Dhamangaon Railway — tax, water supply, health, meetings, recruitment and elections.",
  path: "/notices",
});

export default function NoticesPage() {
  return (
    <>
      <PageHero titleKey="pages.notices.title" descKey="pages.notices.desc" trail={[{ k: "nav.documents" }]} />
      <section className="bg-pattern-light py-16 sm:py-20">
        <div className="container">
          <DocumentExplorer documents={notices} />
        </div>
      </section>
    </>
  );
}
