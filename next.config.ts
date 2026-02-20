import type { NextConfig } from "next";
import redirects from './redirects.json';

const nextConfig: NextConfig = {
  // Force restart 2026-02-12
  trailingSlash: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "avatar.vercel.sh",
      },
      {
        protocol: "https",
        hostname: "*.googleusercontent.com",
      },
    ],
  },
  async redirects() {
    return redirects;
  },
};

export default nextConfig;
