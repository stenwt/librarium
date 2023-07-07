import React from "react";
import Integrations from "@site/src/components/Technologies";
import { usePluginData } from "@docusaurus/useGlobalData";

export default function AppTiers() {
  // @ts-ignore
  const { integrations } = usePluginData("plugin-mdx-frontmatter");
  return <Integrations data={integrations} />;
}
