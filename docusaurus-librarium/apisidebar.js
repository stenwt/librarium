const paletteAPIVersions = [
  {
    version: "1.0.0",
    label: "V1",
    baseUrl: "/api/introduction",
  },
];

const {
  versionSelector,
  versionCrumb,
} = require("docusaurus-plugin-openapi-docs/lib/sidebars/utils");

module.exports = {
  apiSidebar: [
    {
      type: "html",
      defaultStyle: true,
      value: versionSelector(paletteAPIVersions),
      className: "version-button",
    },
    {
      type: "html",
      defaultStyle: true,
      value: versionCrumb(`v1`),
      className: "version-text",
    },
    {
      type: "doc",
      id: "v1/introduction",
      label: "Introduction",
    },
    {
      type: "doc",
      id: "v1/samples",
      label: "Example Usage",
    },
    {
      type: "doc",
      id: "v1/postman-collection",
      label: "Postman collection",
    },
    {
      type: "category",
      label: "Palette API V1",
      link: {
        type: "generated-index",
        title: "Palette API V1",
      },
      items: (() => {
        try {
          return require("./docs/api-content/api-docs/v1/sidebar.js");
        } catch (error) {
          return [];
        }
      })(),
    },
  ],
};
