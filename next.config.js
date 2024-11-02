// import type { NextConfig } from "next";

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    nextScriptWorkers: true,
  },
  images: {
    deviceSizes: [
      100, 200, 320, 375, 425, 640, 750, 768, 828, 1024, 1080, 1200, 1920, 2048,
      3840,
    ],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'media.graphcms.com/**',
      },
      {
        protocol: 'https',
        hostname: 's3.us-west-2.amazonaws.com/**',
      },
      {
        protocol: 'https',
        hostname: 'www.notion.so/**',
      },
      {
        protocol: 'https',
        hostname: 'media.graphassets.com',
      },
    ],
  },
};

module.exports = nextConfig;
