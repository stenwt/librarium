// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/oceanicNext");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");
const redirects = require("./redirects");

function generateIntegrationData(allContent) {
  const packsData = allContent["docusaurus-plugin-content-docs"].default.loadedVersions[0].docs
    .filter((doc) => {
      return doc.frontMatter.type === "appTier";
    })
    .map((doc) => {
      return { fields: { ...doc.frontMatter, slug: doc.slug, id: doc.id } };
    });
  return packsData;
}

function generatePacksData(allContent) {
  const packsData = allContent["docusaurus-plugin-content-docs"].default.loadedVersions[0].docs
    .filter((doc) => {
      return doc.frontMatter.type === "integration";
    })
    .map((doc) => {
      return { fields: { ...doc.frontMatter, slug: doc.slug, id: doc.id } };
    });
  return packsData;
}

// function getLatestUpdates(allContent) {
//   const latestUpdates = allContent["docusaurus-plugin-content-docs"].default.loadedVersions[0].docs
//     .sort((doc1, doc2) => {
//       return doc1.lastUpdatedAt - doc2.lastUpdatedAt;
//     })
//     .slice(0, 2);

//   return latestUpdates;
// }

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
    locales: ["en"],
  },
  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: "docs/docs-content",
          routeBasePath: "/",
          showLastUpdateTime: true,

          sidebarPath: require.resolve("./sidebars.js"),
          async sidebarItemsGenerator({ defaultSidebarItemsGenerator, ...args }) {
            const { docs } = args;
            const filteredDocs = docs.filter((doc) => {
              return !doc.frontMatter.hiddenFromNav;
            });
            const sidebarItems = await defaultSidebarItemsGenerator({
              ...args,
              docs: filteredDocs,
            });
            return sidebarItems;
          },

          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  plugins: [
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "api",
        path: "docs/api-content",
        routeBasePath: "api",
      },
    ],
    async function pluginMdxFrontMatter(context, options) {
      return {
        name: "plugin-mdx-frontmatter",
        async contentLoaded({ allContent, actions }) {
          const { setGlobalData } = actions;
          const integrationsData = generateIntegrationData(allContent);
          const packsData = generatePacksData(allContent);
          setGlobalData({ integrations: integrationsData, packs: packsData });
        },
      };
    },
    [
      // @ts-ignore
      () => ({
        name: "plugin-enable-source-map",
        configureWebpack() {
          return {
            devtool: "source-map",
          };
        },
      }),
      { id: "source-map" },
    ],
    [
      "@docusaurus/plugin-ideal-image",
      {
        quality: 100,
        max: 1035,
        min: 640,
        steps: 2,
        disableInDev: false,
      },
    ],
    [require.resolve("docusaurus-plugin-image-zoom"), { id: "docusaurus-plugin-image-zoom" }],
    [
      "@docusaurus/plugin-client-redirects",
      {
        redirects: [...redirects],
      },
    ],
    [
      "docusaurus-plugin-openapi-docs",
      {
        id: "apidocs",
        docsPluginId: "classic",
        config: {
          palette: {
            specPath: "palette-api/palette-api.json",
            outputDir: "docs/api-content",
            sidebarOptions: {
              groupPathsBy: "tag",
            },
          },
        },
      },
    ],
  ],

  themes: ["docusaurus-theme-openapi-docs"],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      docs: {
        sidebar: {
          hideable: true,
        },
      },
      // Replace with your project's social card
      image: "img/logo_landscape_for_white.png",
      navbar: {
        title: "",
        logo: {
          alt: "Spectro cloud docs",
          src: "img/logo_landscape_for_white.png",
        },
        items: [
          { to: "/", label: "Docs", position: "right" },
          { to: "/api/introduction", label: "API", position: "right" },
        ],
      },
      algolia: {
        // The application ID provided by Algolia
        appId: "YIQEK8ZLC9",

        // Public API key: it is safe to commit it
        apiKey: "994024f3176ed622d498fa2b3db874d9",

        indexName: "prod",

        // Optional: see doc section below
        contextualSearch: true,

        // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
        externalUrlRegex: "external\\.com|domain\\.com",

        // Optional: Replace parts of the item URLs from Algolia. Useful when using the same search index for multiple deployments using a different baseUrl. You can use regexp or string in the `from` param. For example: localhost:3000 vs myCompany.com/docs
        replaceSearchResultPathname: {
          from: "/docs/", // or as RegExp: /\/docs\//
          to: "/",
        },

        // Optional: Algolia search parameters
        searchParameters: {},

        // Optional: path for search page that enabled by default (`false` to disable it)
        searchPagePath: "search",
      },
      sidebar: {
        hideable: true,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ["bash", "json", "powershell", "hcl"],
      },
      zoom: {
        selector: ".markdown :not(em) > img",
        background: {
          light: "rgb(255, 255, 255)",
          dark: "rgb(50, 50, 50)",
        },
        config: {
          // options you can specify via https://github.com/francoischalifour/medium-zoom#usage
        },
      },
    }),
};

module.exports = config;
