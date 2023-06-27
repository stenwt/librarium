import React from "react";
import styles from "./CategorySelector.module.css";

export default function CategorySelector({
  categories,
  selected = "all",
  selectCategory
}) {
  return (
    <div className={styles.wrapper}>
      {categories.map((category, index) => (
        <div
          className={`${styles.selectorCard} ${
            selected === category ? styles.isSelected : ""
          }`}
          key={index}
          onClick={() => selectCategory(category)}
        >
          {category.split("_").join(" ")}
        </div>
      ))}
    </div>
  );
}
