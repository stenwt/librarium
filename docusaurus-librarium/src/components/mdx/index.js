import React from "react";
import Video from "./Video/index";
import { Header1, Header2, Header3, generateHeadingId } from "./HeadTags/HeadTags";
import AnchorTag from "./Anchor";

const customMdxComponents = {
  a: AnchorTag,
  img: (props) => {
    return <img alt="MDXimage" {...props} />;
  },
  video: Video,
};

export default customMdxComponents;
