import type { NextConfig } from "next";

/**
 * Fully static site: `next build` writes plain HTML/CSS/JS to /out,
 * which can be hosted on any static web server (NIC, Apache, Nginx, S3, etc.).
 */
const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    // Static export has no image optimisation server; images are pre-sized SVG/WebP in /public.
    unoptimized: true,
  },
  poweredByHeader: false,
  reactStrictMode: true,
};

export default nextConfig;
