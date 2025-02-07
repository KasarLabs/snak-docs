import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { BsTelegram, BsTwitter, BsGithub } from "react-icons/bs";
import Link from "next/link";
import { useTheme } from "next-themes";

const Footer = () => {
  const { resolvedTheme } = useTheme();
  const isDarkTheme = resolvedTheme === "dark";

  return (
    <footer
      className={`w-full border-t ${isDarkTheme ? "border-neutral-800" : "border-neutral-200"}`}
    >
      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Logo & Terms */}
          <div className="flex flex-col space-y-4">
            <div className="w-32 sm:w-40">
              <div className="relative w-full h-10">
                <Image
                  src={
                    isDarkTheme
                      ? "https://raw.githubusercontent.com/KasarLabs/brand/refs/heads/main/kasar/logo/KasarBlackLogo.png"
                      : "https://raw.githubusercontent.com/KasarLabs/brand/refs/heads/main/kasar/logo/KasarWhiteLogo.png"
                  }
                  alt="kasarlabs"
                  className="object-contain"
                  width={160}
                  height={40}
                  priority
                />
              </div>
            </div>
            <div className="flex flex-wrap gap-2 text-sm text-neutral-600 dark:text-neutral-400">
              <FooterLink href="/terms" text="Terms" />
              <span className="hidden sm:inline">•</span>
              <FooterLink href="/conditions" text="Conditions" />
              <span className="hidden sm:inline">•</span>
              <FooterLink href="/legal" text="Legal" />
            </div>
          </div>

          {/* Resources */}
          <div className="sm:mt-0">
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <FooterListItem href="https://www.starknet.io" text="Starknet" />
              <FooterListItem
                href="https://docs.starknet.io"
                text="Documentation"
              />
            </ul>
          </div>

          {/* Social Links */}
          <div className="sm:mt-0">
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <SocialLink
                href="https://twitter.com/kasarlabs"
                icon={<BsTwitter />}
              />
              <SocialLink
                href="https://t.me/+jZZuOamlUM5lNWNk"
                icon={<BsTelegram />}
              />
              <SocialLink
                href="https://github.com/kasarlabs"
                icon={<BsGithub />}
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

const FooterLink = ({ href, text }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-black dark:hover:text-white transition-colors"
  >
    {text}
  </a>
);

const FooterListItem = ({ href, text }) => (
  <li>
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors"
    >
      {text}
    </a>
  </li>
);

const SocialLink = ({ href, icon }) => (
  <Link
    href={href}
    target="_blank"
    className="text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors"
  >
    <div className="w-6 h-6 sm:w-7 sm:h-7">{icon}</div>
  </Link>
);

const config = {
  logo: (
    <div className="flex items-center space-x-2">
      <Image
        src="/starknet.png"
        alt="Logo"
        width={32}
        height={32}
        className="w-8 h-8"
      />
      <span className="font-semibold text-base md:text-lg">
        Starknet Agent Kit
      </span>
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
      titleTemplate:
        asPath !== "/"
          ? "%s – Starknet Agent Kit"
          : "Starknet Agent Kit Documentation",
    };
  },
  head: () => (
    <>
      <link rel="icon" href="/favicon.ico" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="Starknet Agent Kit Documentation" />
      <meta
        property="og:description"
        content="Documentation for Starknet Agent Kit"
      />
    </>
  ),
  primaryHue: {
    dark: 204,
    light: 212,
  },
  sidebar: {
    defaultMenuCollapseLevel: 1,
    toggleButton: true,
  },
  footer: {
    component: <Footer />,
  },
  search: {
    placeholder: "Search documentation...",
  },
};

export default config;
