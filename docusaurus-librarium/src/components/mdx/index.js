import React from "react";
import Video from "./Video/index";
import {
  Header1,
  Header2,
  Header3,
  generateHeadingId
} from "./HeadTags/HeadTags";
import AnchorTag from "./Anchor";

const customMdxComponents = {
  h1: Header1,
  h2: Header2,
  h3: Header3,
  h4: (props) => (
    <h4 id={generateHeadingId(props.children)} {...props}>
      {props.children}
    </h4>
  ),
  h5: (props) => (
    <h5 id={generateHeadingId(props.children)} {...props}>
      {" "}
      {props.children}
    </h5>
  ),
  h6: (props) => (
    <h6 id={generateHeadingId(props.children)} {...props}>
      {props.children}
    </h6>
  ),
  a: AnchorTag,
  img: (props) => {
    return <img alt="MDXimage" {...props} />;
  },
  video: Video
};

export default customMdxComponents;
