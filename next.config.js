/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    emotion: true,
  },
  pageExtensions: ['page.tsx', 'page.ts'],
};

module.exports = nextConfig;
