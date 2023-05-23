/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  // To add next's Image component
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "images.ctfassets.net",
      },
    ],
    minimumCacheTTL: 1500000,
  },
};

module.exports = nextConfig;
