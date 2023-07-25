import React from "react";
import DocusaurusLink from "@docusaurus/Link";
import isAbsoluteUrl from "./isAbsoluteUrl";

const Link = ({ to, ...props }) => {
  if (!to) {
    return <a>{props.children}</a>;
  }
  return isAbsoluteUrl(to) ? (
    <a href={to} {...props}>
      {props.children}
    </a>
  ) : (
    <DocusaurusLink to={to} {...props} />
  );
};

export default Link;
