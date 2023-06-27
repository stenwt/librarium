import React from "react";
import styles from "./Button.module.css";

export default function Button(props) {
  return (
    <button className={props.primary ? styles.button : styles.primary}>
      {props.children}
    </button>
  );
}
