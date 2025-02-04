import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['avatars.githubusercontent.com'],
    unoptimized: true,
  },
  reactStrictMode: true,
  trailingSlash: true,
  output: 'export',
};

export default nextConfig;
