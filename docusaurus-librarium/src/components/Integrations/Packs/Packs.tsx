import React from "react";
import Integrations from "@site/src/components/Technologies";
import { usePluginData } from "@docusaurus/useGlobalData";

export default function Packs() {
  // @ts-ignore
  const { packs } = usePluginData("plugin-mdx-frontmatter");

  return <Integrations data={packs} />;
}
