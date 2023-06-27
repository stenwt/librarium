import React from "react";
import styles from "./QuickSetup.module.css";
import Link from "../Link";
import IconMapper from "./IconMapper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function QuickSetup({ title, options = [] }) {
  return (
    <div className={styles.wrapper}>
      <h3>{title}</h3>
      <div className={styles.cards}>
        {options.map((option) => (
          <Link key={option.title} to={option.href}>
            <div className={styles.card}>
              <div className={styles.icon}>
                <IconMapper type={option.icon} />
              </div>
              <div>
                <h4>{option.title}</h4>
                <div className={styles.description}>{option.description}</div>
              </div>
            </div>
            <div className={styles.learnMore}>
              <div>Learn More</div>
              <FontAwesomeIcon icon={"arrow-right"} />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default QuickSetup;
