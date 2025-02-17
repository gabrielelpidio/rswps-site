// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/preset-classic').ThemeConfig} */
const themeConfig = {
  liveCodeBlock: {
    playgroundPosition: 'bottom',
  },
  navbar: {
    title: 'react-square-web-payments-sdk',
    logo: {
      alt: 'react-square-web-payments-sdk',
      src: 'img/logo-black.svg',
      srcDark: 'img/logo-white.svg',
    },
    items: [
      {
        label: 'Docs',
        to: '/docs',
        position: 'left',
        activeBaseRegex: '/docs$',
      },
      {
        label: 'Migrating from v2 to v3',
        to: '/docs/migrating-from-v2-to-v3',
        position: 'left',
        activeBaseRegex: '/docs/migrating-from-v2-to-v3$',
      },
      {
        href: 'https://github.com/weareseeed/react-square-web-payments-sdk',
        'aria-label': 'GitHub',
        className: 'header-github-link',
        position: 'right',
      },
    ],
  },
  footer: {
    style: 'light',
    links: [
      {
        title: 'Docs',
        items: [
          {
            label: 'Getting Started',
            to: '/docs/installation',
          },
          {
            label: 'Credit Card',
            to: '/docs/card/usage',
          },
          {
            label: 'ACH',
            to: '/docs/ach/usage',
          },
          {
            label: 'Apple Pay',
            to: '/docs/apple-pay/usage',
          },
          {
            label: 'Google Pay',
            to: '/docs/google-pay/usage',
          },
          {
            label: 'Gift Card',
            to: '/docs/gift-card/usage',
          },
          {
            label: 'Afterpay/Clearpay',
            to: '/docs/afterpay/usage',
          },
        ],
      },
      {
        title: 'Company',
        items: [
          {
            label: 'GitHub',
            href: 'https://github.com/weareseeed',
          },
          {
            label: 'About',
            href: 'https://seeed.us/team/',
          },
        ],
      },
      {
        title: 'Community',
        items: [
          {
            label: 'Instagram',
            href: 'https://www.instagram.com/seeedsocial/',
          },
          {
            label: 'LinkedIn',
            href: 'https://www.linkedin.com/company/seeedus/',
          },
          {
            label: 'Twitter',
            href: 'https://twitter.com/seeedsocial',
          },
          {
            label: 'Facebook',
            href: 'https://www.facebook.com/seeedsocial',
          },
        ],
      },
    ],
    logo: {
      alt: 'react-square-web-payments-sdk logo',
      src: 'img/seeed-logo.svg',
      href: 'https://seeed.us',
      width: 48,
    },
    copyright: `Copyright © ${new Date().getFullYear()} Seeed, LLC — Florida, USA`,
  },
  prism: {
    // @ts-ignore - the types of the themes are ok
    theme: lightCodeTheme,
    // @ts-ignore - the types of the themes are ok
    darkTheme: darkCodeTheme,
  },
};

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'react-square-web-payments-sdk',
  tagline: 'Easily create PCI-compliant inputs to accept payments online with the Square Payments SDK',
  url: 'http://react-square-payments.weareseeed.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'weareseeed',
  projectName: 'rswps-site',
  deploymentBranch: 'gh-pages',
  trailingSlash: false,
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        blog: false,
        docs: {
          editUrl: 'https://github.com/weareseeed/rswps-site/tree/main/',
          sidebarPath: require.resolve('./sidebars.js'),
        },
        googleAnalytics: {
          trackingID: 'G-CL2JQ01S7Y',
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  plugins: [
    '@docusaurus/theme-live-codeblock',
    [
      '@docusaurus/plugin-ideal-image',
      {
        disableInDev: false,
      },
    ],
  ],

  themes: [
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      {
        // ... Your options.
        // `hashed` is recommended as long-term-cache of index file is possible.
        hashed: true,
        // For Docs using Chinese, The `language` is recommended to set to:
        // ```
        // language: ["en", "zh"],
        // ```
      },
    ],
  ],

  themeConfig,
};

module.exports = config;
