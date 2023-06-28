import React, { useState, useMemo } from "react";
import Fuse from "fuse.js";
import Link from "@site/src/components/Link";
import styles from "./Technologies.module.css";
import Search from "./Search";
import CategorySelector from "./CategorySelector";

const searchOptions = {
  threshold: 0.5,
  keys: ["fields.title"],
};

export default function Technologies({ data }) {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchValue, setSearchValue] = useState("");

  let categories = useMemo(() => {
    return data.reduce((accumulator, technology) => {
      accumulator.add(...(technology.fields.category || []));
      return accumulator;
    }, new Set(["all"]));
  }, [data]);

  let technologies = useMemo(() => {
    let technologies = [...data].sort((pack1, pack2) => {
      const category1 = pack1.fields.category[0];
      const category2 = pack2.fields.category[0];

      if (category1 < category2) {
        return -1;
      }

      if (category1 > category2) {
        return 1;
      }

      return 0;
    });

    if (searchValue) {
      const fuse = new Fuse(technologies, searchOptions);
      technologies = fuse.search(searchValue).map(({ item }) => item);
    }

    if (selectedCategory !== "all") {
      technologies =
        technologies.filter(({ fields }) => fields.category.includes(selectedCategory)) || [];
    }

    return technologies;
  }, [data, searchValue, selectedCategory]);

  return (
    <div className={styles.wrapper}>
      <CategorySelector
        categories={[...categories]}
        selectCategory={setSelectedCategory}
        selected={selectedCategory}
      />
      <Search onSearch={setSearchValue} />
      <div className={styles.technologyWrapper}>
        {technologies.map(({ fields }) => {
          const { title, slug, logoUrl } = fields;
          return (
            <Link key={title} to={slug}>
              <div className={styles.card}>
                <div className={styles.imageWrapper}>
                  <img src={logoUrl} alt={`${title} logo`} />
                </div>
                <div className={styles.title}>{title}</div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
