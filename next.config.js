/** @type {import('next').NextConfig} */

const hostnames = [
  "images.unsplash.com",
  "media.licdn.com",
  "hydeparkwinterwonderland.com",
  "wembleypark.com",
];

const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: hostnames.map((hostname) => ({
      protocol: "https",
      hostname,
    })),
  },
};
require("dotenv").config();

const environment = process.env.NODE_ENV || "dev";

module.exports = nextConfig;
