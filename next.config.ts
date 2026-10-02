import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export — produces a fully static site in ./out
  // Servable from any static file server (nginx, python -m http.server, caddy, etc.)
  output: "export",
  // Disable image optimization — static export needs raw <img> URLs
  images: {
    unoptimized: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
  trailingSlash: true,
};

export default nextConfig;
