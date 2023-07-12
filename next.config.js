/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  compiler: {
    emotion: true,
  },
  pageExtensions: ['page.tsx', 'page.ts'],
};

module.exports = nextConfig;
