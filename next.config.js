/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  output: 'export',
  assetPrefix: './',
  distDir: 'docs/',
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.jsx'
})

module.exports = withNextra(nextConfig)