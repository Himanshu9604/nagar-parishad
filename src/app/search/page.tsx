import { Suspense } from "react";
import { PageHero } from "@/components/ui/PageHero";
import { SearchClient } from "@/components/features/SearchClient";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Search",
  description: "Search services, notices, circulars, forms, tenders, schemes and departments of Nagar Parishad Dhamangaon Railway.",
  path: "/search",
});

export default function SearchPage() {
  return (
    <>
      <PageHero titleKey="pages.search.title" descKey="pages.search.desc" />
      <section className="bg-pattern-light py-14 sm:py-16">
        <div className="container">
          {/* useSearchParams() needs a Suspense boundary for static export */}
          <Suspense fallback={<div className="mx-auto h-16 max-w-3xl animate-pulse rounded-full bg-white shadow-royal" />}>
            <SearchClient />
          </Suspense>
        </div>
      </section>
    </>
  );
}
