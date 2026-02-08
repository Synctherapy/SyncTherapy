import type { NextConfig } from "next";
import redirects from './redirects.json';

const nextConfig: NextConfig = {
  trailingSlash: true,
  async redirects() {
    return redirects;
  },
};

export default nextConfig;
