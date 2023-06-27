import React from "react";
import { IntroButtons } from "@site/src/components/Intro/IntroButton";
// @ts-ignore
import hero from "@site/static/assets/hero.png";
// @ts-ignore
import Image from "@theme/IdealImage";
import styles from "./MainHeader.module.css";

function MainHeader({ children, introductionHref, demoHref }) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.leftSection}>
        {children}
        <IntroButtons introductionHref={introductionHref} demoHref={demoHref} />
      </div>
      <div className={styles.rightSection}>
        <Image img={hero} alt={"product"} />
      </div>
    </div>
  );
}

export default MainHeader;
