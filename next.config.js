/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  env: {
    CONTENTFUL_SPACE_ID: "1rryfnptmjpp",
    CONTENTFULL_ACCESS_KEY: "OBcMhYNrm825ezVNSGvHEb-RB9jAkmoY74eYQhZXUz4",
  },

  //--- this we call to access the Images
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.ctfassets.net", // as we are getting data from contentful, so hostname will be contentful
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;
