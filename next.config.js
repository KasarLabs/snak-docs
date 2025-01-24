const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
  defaultShowCopyCode: true,
  flexsearch: {
    codeblocks: true
  },
  staticImage: true
})

module.exports = withNextra({
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_VERSION: '1.0.0',
  }
})