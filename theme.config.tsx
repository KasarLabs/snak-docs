import { DocsThemeConfig } from 'nextra-theme-docs';

const config: DocsThemeConfig = {
  logo: <span>Starknet Agent Kit</span>,
  project: {
    link: 'https://github.com/kasar-project/starknet-agent-kit',
  },
  docsRepositoryBase: 'https://github.com/kasar-project/sak-docs/tree/main',
  footer: {
    text: 'Starknet Agent Kit Documentation © 2024',
  },
  primaryHue: 210,
  darkMode: true,
  nextThemes: {
    defaultTheme: 'dark',
  },
  sidebar: {
    defaultMenuCollapseLevel: 1,
    autoCollapse: false
  },
  // Suppression de la navbar incorrecte
  navigation: false, // Désactive la navigation
  head: null,
  useNextSeoProps() {
    return {
      titleTemplate: '%s – Starknet Agent Kit'
    }
  }
};

export default config;