import MDXComponents from "@theme-original/MDXComponents";
import customMdxComponents from "@site/src/components/mdx/index";
import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";
import { IntroButtons } from "@site/src/components/Deprecated/Intro/IntroButton";
import Tooltip from "@site/src/components/Tooltip/Tooltip";
import PointsOfInterest from "@site/src/components/PointOfInterest/index";
import YouTube from "@site/src/components/Youtube/Youtube";
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  ...MDXComponents,
  ...customMdxComponents,
  Tabs,
  TabItem,
  IntroButtons,
  Tooltip,
  PointsOfInterest,
  YouTube,
};
