const createNextIntlPlugin = require('next-intl/plugin');

const withNextIntl = createNextIntlPlugin()

const nextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api.mpakravan.com',
      },
    ],
  },
}

module.exports = withNextIntl(nextConfig)
