import React from "react";
import styles from "./HeadTags.module.css";

function generatePermalinkAnchor(children) {
  const headingId = generateHeadingId(children);
  return `#${headingId}`;
}

export function generateHeadingId(children) {
  let title = children;

  if (Array.isArray(children)) {
    title = children.reduce((accumulator, child) => {
      if (typeof child === "string") {
        return `${accumulator} ${child}`;
      }
      if (child?.props?.children) {
        return `${accumulator} ${generateHeadingId(child.props.children)}`;
      }

      return accumulator;
    }, "");
  }

  return title?.replace?.(/\s+/g, "")?.toLowerCase?.();
}

export const Header1 = (props) => {
  return (
    <h1 className={styles.header} id={generateHeadingId(props.children)}>
      {props.children}
      <a href={generatePermalinkAnchor(props.children)}>#</a>
    </h1>
  );
};
