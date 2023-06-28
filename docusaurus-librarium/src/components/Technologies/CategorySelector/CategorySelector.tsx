/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from "react";
import styles from "./CategorySelector.module.css";

export default function CategorySelector({ categories, selected = "all", selectCategory }) {
  return (
    <div className={styles.wrapper}>
      {categories.map((category, index) => (
        // eslint-disable-next-line jsx-a11y/click-events-have-key-events
        <div
          className={`${styles.selectorCard} ${selected === category ? styles.isSelected : ""}`}
          key={index}
          onClick={() => {
            selectCategory(category);
          }}
        >
          {category.split("_").join(" ")}
        </div>
      ))}
    </div>
  );
}
