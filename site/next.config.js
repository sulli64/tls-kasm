/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'tls-Kasm Test',
    description: 'A curated TLS XSS supported workspace.',
    icon: '/img/logo.svg',
    listUrl: 'https://tls-kasm.sulli64.github.com/',
    contactUrl: 'https://tls-kasm.sulli64.github.com/support',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
