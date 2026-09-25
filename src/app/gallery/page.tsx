import { PageHero } from "@/components/ui/PageHero";
import { GalleryGrid } from "@/components/features/GalleryGrid";
import { gallery } from "@/data/gallery";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Photo Gallery",
  description: "Photographs of development works, cleanliness drives, events, festivals and heritage of Dhamangaon Railway.",
  path: "/gallery",
});

export default function GalleryPage() {
  return (
    <>
      <PageHero titleKey="pages.gallery.title" descKey="pages.gallery.desc" />
      <section className="bg-pattern-light py-16 sm:py-20">
        <div className="container">
          <GalleryGrid items={gallery} />
        </div>
      </section>
    </>
  );
}
