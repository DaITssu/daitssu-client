/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    emotion: true,
  },
  pageExtensions: ['page.tsx', 'page.ts'],
};

if (process.env.NEXT_PUBLIC_NODE_ENV === 'prod') {
  nextConfig.compiler = {
    removeConsole: true,
  };
}
module.exports = nextConfig;
