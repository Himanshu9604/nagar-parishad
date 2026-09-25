import { Info } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { WardMembersGrid } from "@/components/features/WardMembersGrid";
import { wardMembers } from "@/data/wardMembers";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Elected Ward Members",
  description: "Ward-wise list of elected councillors (Nagarsevak) of Nagar Parishad Dhamangaon Railway with areas and contact numbers.",
  path: "/ward-members",
  keywords: ["nagarsevak", "councillor", "ward member Dhamangaon"],
});

export default function WardMembersPage() {
  return (
    <>
      <PageHero titleKey="pages.wardMembers.title" descKey="pages.wardMembers.desc" trail={[{ k: "nav.about", href: "/about" }]} />
      <section className="bg-pattern-light py-16 sm:py-20">
        <div className="container">
          <WardMembersGrid members={wardMembers} />
          <p className="mx-auto mt-12 flex max-w-2xl items-start gap-2 rounded-xl bg-gold-50 p-4 text-sm text-navy-700 ring-1 ring-gold-200">
            <Info className="mt-0.5 h-4 w-4 shrink-0 text-gold-600" aria-hidden="true" />
            Ward boundaries, reservations and member details are as per the latest State Election Commission
            notification. For corrections, please contact the General Administration department.
          </p>
        </div>
      </section>
    </>
  );
}
