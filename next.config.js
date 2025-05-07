/** @type {import('next').NextConfig} */
const dayjs = require('dayjs')
const now = dayjs()
const buildVersion = now.format('YYYYMMDD.HHmm')

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.ctfassets.net'],
  },
  env: {
    BUILD_VERSION: buildVersion,
  },
}

module.exports = nextConfig
