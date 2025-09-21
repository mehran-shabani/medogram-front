/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: { unoptimized: true },
  compiler: {
    // Enable better styled-components SSR and displayNames
    styledComponents: true,
  },
};

module.exports = nextConfig;

