import React from 'react';
import { useRouter } from 'next/router';
import { useConfig } from 'nextra-theme-docs';

const config = {
  logo: <span>Starknet Agent Kit</span>,
  project: {
    link: 'https://github.com/yourusername/yourproject'
  },
  docsRepositoryBase: 'https://github.com/yourusername/yourproject/tree/main',
  useNextSeoProps() {
    const { asPath } = useRouter();
    return {
      titleTemplate: asPath !== '/' ? '%s – YourProject' : 'YourProject Documentation'
    };
  },
  head: () => {
    const { asPath } = useRouter();
    return (
      <>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="YourProject Documentation" />
        <meta property="og:description" content="Documentation for YourProject" />
      </>
    );
  },
  primaryHue: {
    dark: 204,
    light: 212
  },
  sidebar: {
    defaultMenuCollapseLevel: 1,
    toggleButton: true
  },
  feedback: {
    content: null
  },
  footer: {
    text: (
      <div className="flex w-full items-center justify-center">
        <div>
          MIT {new Date().getFullYear()} © Your Company.
        </div>
      </div>
    )
  }
};

export default config;