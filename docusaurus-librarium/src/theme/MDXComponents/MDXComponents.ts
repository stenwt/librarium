import MDXComponents from "@theme-original/MDXComponents";
import customMdxComponents from "@site/src/components/mdx/index";
import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";
import Intro, { IntroButtons } from "@site/src/components/Intro/IntroButton";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  ...MDXComponents,
  ...customMdxComponents,
  Tabs,
  TabItem,
  Intro,
  IntroButtons,
};
