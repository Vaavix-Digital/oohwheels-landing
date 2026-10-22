import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  async redirects() {
    return [
      {
        source: "/reviews",
        destination: "/testimonials",
        permanent: true,
      },
      {
        source: "/tips",
        destination: "/test-tips",
        permanent: true,
      },
      {
        source: "/stories",
        destination: "/success-stories",
        permanent: true,
      },
      {
        source: "/guide",
        destination: "/app-guide",
        permanent: true,
      },
      {
        source: "/about",
        destination: "/about-us",
        permanent: true,
      },
      {
        source: "/support",
        destination: "/help",
        permanent: true,
      },
      {
        source: "/privacy-policy",
        destination: "/privacy",
        permanent: true,
      },
      {
        source: "/terms-of-service",
        destination: "/terms",
        permanent: true,
      },
      {
        source: "/tos",
        destination: "/terms",
        permanent: true,
      },
      {
        source: "/how",
        destination: "/features#how",
        permanent: false,
      },
      {
        source: "/how-it-works",
        destination: "/features#how",
        permanent: false,
      },
      {
        source: "/scenes",
        destination: "/features#scenes",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
