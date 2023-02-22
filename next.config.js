/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['gateway.ipfscdn.io'],
  },
  experimental: {
    appDir: true,
  },
}

module.exports = nextConfig
