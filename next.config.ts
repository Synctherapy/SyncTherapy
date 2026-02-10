import type { NextConfig } from "next";
import redirects from './redirects.json';

const nextConfig: NextConfig = {
  trailingSlash: true,
  async redirects() {
    return redirects;
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
      },
    ],
  },
};

export default nextConfig;
