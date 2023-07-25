import React from "react";
import Video from "./Video/index";
import { Header1 } from "./HeadTags/HeadTags";

const customMdxComponents = {
  img: (props) => {
    return <img alt="MDXimage" {...props} />;
  },
  video: Video,
};

export default customMdxComponents;
