import MDXComponents from "@theme-original/MDXComponents";
import customMdxComponents from "@site/src/components/mdx/index";
import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

export default {
  ...MDXComponents,
  ...customMdxComponents,
  Tabs,
  TabItem
};
