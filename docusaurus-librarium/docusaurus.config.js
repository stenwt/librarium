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

const ignoredPrefixPattern = /^\d+[-_]\d+/;

const numberPrefixPattern = /^(?<numberPrefix>\d+\.?\d*)\s*[-_.]+\s*(?<suffix>[^-_.\s].*)$/;

const numberPrefixParser = (filename) => {
  if (ignoredPrefixPattern.test(filename)) {
    return { filename, numberPrefix: undefined };
  }
  const match = numberPrefixPattern.exec(filename);
  if (!match) {
    return { filename, numberPrefix: undefined };
  }

  return {
    filename: match.groups.suffix,
    numberPrefix: parseFloat(match.groups.numberPrefix),
  };
};

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

  onBrokenLinks: "log",
  onBrokenMarkdownLinks: "log",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  staticDirectories: ["static", "static/assets/docs/images"],
  headTags: [
    {
      tagName: "link",
      attributes: {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossorigin: "anonymous",
      },
    },
    // {
    //   tagName: "link",
    //   attributes: {
    //     rel: "preload",
    //     href: "https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap",
    //     as: "style",
    //     crossorigin: "anonymous",
    //   },
    // },
  ],
  stylesheets: [
    {
      href: "https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap",
    },
  ],
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
              return true;
            });
            const sidebarItems = await defaultSidebarItemsGenerator({
              ...args,
              docs: filteredDocs,
            });
            return sidebarItems;
          },
          numberPrefixParser: numberPrefixParser,

          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/spectrocloud/librarium",
          lastVersion: "current",
          versions: {
            current: {
              label: "Current",
              path: "/",
            },
          },
        },
        sitemap: {
          changefreq: "weekly",
          priority: 0.5,
          ignorePatterns: ["/tags/**"],
          filename: "sitemap.xml",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.scss"),
        },
      }),
    ],
  ],

  plugins: [
    "docusaurus-plugin-sass",
    process.env.NODE_ENV === "production" && "@docusaurus/plugin-debug",
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "api",
        path: "docs/api-content/api-docs",
        routeBasePath: "api",
        docItemComponent: "@theme/ApiItem",
        sidebarPath: require.resolve("./apisidebar.js"),
      },
    ],
    [
      "docusaurus-plugin-openapi-docs",
      {
        id: "apidocs",
        docsPluginId: "api",
        config: {
          palette: {
            proxy: "https://api.spectrocloud.com",
            specPath: "palette-api/result.json",
            outputDir: "docs/api-content/api-docs/v1",
            downloadUrl:
              "https://github.com/spectrocloud/librarium/blob/master/content/api/palette-apis.json",
            sidebarOptions: {
              groupPathsBy: "tag",
              categoryLinkSource: "tag",
            },
            template: "api.mustache", // Customize API MDX with mustache template
            hideSendButton: false,
          },
        },
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
    async function plugiParseApiDocs(context, options) {
      return {
        name: "plugin-api-docs",
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
    // [
    //   "@docusaurus/plugin-client-redirects",
    //   {
    //     redirects: [...redirects],
    //   },
    // ],
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
      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 6,
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
          { to: "/", label: "Docs", position: "left", activeBaseRegex: "^(?!/api/).*$" },
          { to: "/api/v1/introduction", label: "API", position: "left" },
          {
            type: "docsVersionDropdown",
            position: "right",
            dropdownItemsAfter: [],
            dropdownActiveClassDisabled: true,
          },
          {
            href: "https://github.com/facebook/docusaurus",
            position: "right",
            className: "header-github-link",
            "aria-label": "GitHub repository",
          },
        ],
        hideOnScroll: true,
      },
      algolia: {
        // The application ID provided by Algolia
        appId: "YIQEK8ZLC9",

        // Public API key: it is safe to commit it
        apiKey: "e588846e69b069e914de1aaea3c50975",

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
        magicComments: [
          {
            className: "theme-code-block-highlighted-line",
            line: "highlight-next-line",
            block: { start: "highlight-start", end: "highlight-end" },
          },
          {
            className: "code-block-error-line",
            line: "This will error",
          },
        ],
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
