import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { BsTelegram, BsTwitter, BsGithub } from "react-icons/bs";
import Link from "next/link";
import { useTheme } from "next-themes";

const Footer = () => {
  const { theme, resolvedTheme } = useTheme();
  // Use resolvedTheme instead of theme to get the actual current theme
  const isDarkTheme = resolvedTheme === "dark";

  return (
    <footer
      className={`w-full border-t ${isDarkTheme ? "border-neutral-800 light" : "border-neutral-800 light"}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Column 1 - KasarLabs Logo and Terms */}
          <div className="flex flex-col space-y-4">
            <div className="w-[125px] sm:w-[140px]">
              <div className="relative w-full h-10">
                <Image
                  src={
                    isDarkTheme
                      ? "https://raw.githubusercontent.com/KasarLabs/brand/refs/heads/main/kasar/logo/KasarBlackLogo.png"
                      : "https://raw.githubusercontent.com/KasarLabs/brand/refs/heads/main/kasar/logo/KasarWhiteLogo.png"
                  }
                  fill
                  alt="kasarlabs"
                  style={{ objectFit: "contain" }}
                />
              </div>
            </div>
            <div className="text-sm flex flex-wrap gap-2 dark:text-neutral-400 text-neutral-600">
              <a
                href="https://pay.kasar.io/pages/terms-and-conditions"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-black dark:hover:text-white cursor-pointer transition-colors"
              >
                Terms
              </a>
              <span className="hidden sm:inline">•</span>
              <a
                href="https://pay.kasar.io/pages/general-conditions-of-sale"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-black dark:hover:text-white cursor-pointer transition-colors"
              >
                Conditions
              </a>
              <span className="hidden sm:inline">•</span>
              <a
                href="https://pay.kasar.io/pages/legal-information"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-black dark:hover:text-white cursor-pointer transition-colors"
              >
                Legal
              </a>
            </div>
            <p className="text-xs md:text-sm dark:text-neutral-400 text-neutral-600">
              © {new Date().getFullYear()} KasarLabs. All rights reserved.
            </p>
          </div>

          {/* Column 2 - Resources */}
          <div className="sm:mt-0">
            <h3 className="font-semibold mb-3 md:mb-4 text-base md:text-lg text-black dark:text-white">
              Resources
            </h3>
            <ul className="space-y-2 md:space-y-3">
              <li>
                <a
                  href="https://www.starknet.io"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white text-sm md:text-base transition-colors"
                >
                  Starknet
                </a>
              </li>
              <li>
                <a
                  href="https://docs.starknet.io"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white text-sm md:text-base transition-colors"
                >
                  Documentation
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3 - Contact Us */}
          <div className="sm:mt-0">
            <h3 className="font-semibold mb-3 md:mb-4 text-base md:text-lg text-black dark:text-white">
              Contact us
            </h3>
            <div className="flex space-x-4 md:space-x-6">
              <Link
                href="https://twitter.com/kasarlabs"
                target="_blank"
                className="text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors"
              >
                <BsTwitter className="w-6 h-6 sm:w-7 sm:h-7" />
              </Link>
              <Link
                href="https://t.me/+jZZuOamlUM5lNWNk"
                target="_blank"
                className="text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors"
              >
                <BsTelegram className="w-6 h-6 sm:w-7 sm:h-7" />
              </Link>
              <Link
                href="https://github.com/kasarlabs"
                target="_blank"
                className="text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors"
              >
                <BsGithub className="w-6 h-6 sm:w-7 sm:h-7" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

const config = {
  logo: (
    <div className="flex items-center space-x-2">
      <Image src="/starknet.png" alt="Logo" width={32} height={32} />
      <span className="font-semibold text-lg">Starknet Agent Kit</span>
    </div>
  ),
  project: {
    link: "https://github.com/kasarlabs/starknet-agent-kit",
  },
  docsRepositoryBase:
    "https://github.com/kasarlabs/starknet-agent-kit/tree/main",
  useNextSeoProps() {
    const { asPath } = useRouter();
    return {
      titleTemplate: asPath !== "/" ? "%s – Starknet" : "Docs",
    };
  },
  head: () => {
    const { asPath } = useRouter();
    return (
      <>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="Starknet Agent Kit Documentation" />
        <meta
          property="og:description"
          content="Documentation for Starknet Agent Kit"
        />
      </>
    );
  },
  primaryHue: {
    dark: 204,
    light: 212,
  },
  sidebar: {
    defaultMenuCollapseLevel: 1,
    toggleButton: true,
  },
  feedback: {
    content: null,
  },
  footer: {
    component: <Footer />,
  },
};

export default config;
