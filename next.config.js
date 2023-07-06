/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    emotion: true,
  },
  pageExtensions: ['page.tsx', 'page.ts'],
  images: {
    domains: ['api.realworld.io'],
  },
};

module.exports = nextConfig;
