// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");
const redirects = require("./redirects");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Spectro Cloud",
  tagline: "Spectro Cloud",
  favicon: "img/favicon.png",

  // Set the production url of your site here
  url: "https://docs.spectrocloud.com/",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "Spectro Cloud", // Usually your GitHub org/user name.
  projectName: "Spectro Cloud docs", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"]
  },
  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/"
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css")
        }
      })
    ]
  ],

  plugins: [
    [
      // @ts-ignore
      () => ({
        configureWebpack() {
          return {
            devtool: "source-map"
          };
        }
      }),
      { id: "source-map" }
    ],
    [
      "@docusaurus/plugin-ideal-image",
      {
        quality: 100,
        max: 1035,
        min: 640,
        steps: 2,
        disableInDev: false
      }
    ],
    [
      require.resolve("docusaurus-plugin-image-zoom"),
      { id: "docusaurus-plugin-image-zoom" }
    ],
    [
      "@docusaurus/plugin-client-redirects",
      {
        redirects: [...redirects]
      }
    ]
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/logo_landscape_for_white.png",
      navbar: {
        title: "",
        logo: {
          alt: "Spectro cloud docs",
          src: "img/logo_landscape_for_white.png"
        },
        items: [
          { to: "/introduction", label: "Docs", position: "right" },
          { to: "/api/introduction", label: "API", position: "right" },
          {
            to: "https://console.spectrocloud.com/",
            label: "Back to Spectro Cloud",
            position: "right"
          }
        ]
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme
      },
      zoom: {
        selector: ".markdown :not(em) > img",
        background: {
          light: "rgb(255, 255, 255)",
          dark: "rgb(50, 50, 50)"
        },
        config: {
          // options you can specify via https://github.com/francoischalifour/medium-zoom#usage
        }
      }
    })
};

module.exports = config;
