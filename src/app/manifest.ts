import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/site";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.name,
    short_name: "NP Dhamangaon",
    description: siteConfig.description,
    start_url: "/",
    display: "standalone",
    background_color: "#fbf8f1",
    theme_color: "#0f1d3d",
    lang: "en-IN",
    icons: [{ src: "/icon.svg", sizes: "any", type: "image/svg+xml" }],
  };
}
