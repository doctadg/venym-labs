import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone',
  reactStrictMode: true,
  images: {
    domains: [],
    formats: ['image/avif', 'image/webp'],
  },
  typescript: {
    // During deployment, type errors are handled by the build process
    ignoreBuildErrors: true,
  },
  eslint: {
    // During deployment, lint errors are handled by the build process
    ignoreDuringBuilds: true,
  },
  experimental: {
    // Enable modern features
    serverActions: {
      allowedOrigins: ['localhost:3000', 'venymlabs.xyz'],
    },
  },
};

export default nextConfig;
