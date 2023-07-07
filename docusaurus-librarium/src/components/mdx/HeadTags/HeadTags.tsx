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
    <h1 className={styles.header}>
      <div id={generateHeadingId(props.children)}> {props.children}</div>
      <a href={generatePermalinkAnchor(props.children)}>#</a>
    </h1>
  );
};

export const Header2 = (props) => {
  return (
    <h2 className={styles.header}>
      <div id={generateHeadingId(props.children)}> {props.children}</div>
      <a href={generatePermalinkAnchor(props.children)}>#</a>
    </h2>
  );
};

export const Header3 = (props) => {
  return (
    <h3 className={styles.header}>
      <div id={generateHeadingId(props.children)}> {props.children}</div>
      <a href={generatePermalinkAnchor(props.children)}>#</a>
    </h3>
  );
};
