import React from "react";
import styles from "./IntroButton.module.css";
import Button from "../Button";
import Link from "../Link/Link";

export function IntroButtons({ introductionHref, demoHref }) {
  return (
    <div className={styles.buttonWrapper}>
      <Link to={introductionHref}>
        <Button>Go to chapters</Button>
      </Link>
      <Link className={styles.requestDemo} target="_blank" to={demoHref}>
        Request Demo
      </Link>
    </div>
  );
}
