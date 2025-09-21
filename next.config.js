/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    // Enable better styled-components SSR and displayNames
    styledComponents: true,
  },
};

module.exports = nextConfig;

