// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "rxOfclock",
  tagline: "A useless tool for converting sheets to any text you want",
  url: "https://rxofclock-docs.vercel.app",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "rexcape", // Usually your GitHub org/user name.
  projectName: "rxofclock-docs", // Usually your repo name.

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "rxOfclock",
        items: [
          {
            type: "doc",
            docId: "index",
            position: "left",
            label: "文档",
          },
          {
            href: "https://rxofclock.vercel.app",
            label: "App",
            position: "right",
          },
          {
            href: "https://github.com/rexcape/rxofclock",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "文档",
            items: [
              {
                label: "介绍",
                to: "/",
              },
            ],
          },
          {
            title: "更多",
            items: [
              {
                label: "App",
                href: "https://rxofclock.vercel.app",
              },
              {
                label: "GitHub",
                href: "https://github.com/rexcape/rxofclock",
              },
            ],
          },
        ],
        copyright: `Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
  i18n: {
    defaultLocale: "zh-CN",
    locales: ["zh-CN"],
  },
};

module.exports = config;
