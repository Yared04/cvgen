/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}
require("dotenv").config();

const environment = process.env.NODE_ENV || "dev";

module.exports = nextConfig
