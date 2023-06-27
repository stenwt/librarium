import React, { useRef, useState } from "react";
import { Input } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Search.module.css";

export default function IntegrationSearch({ onSearch }) {
  const [inputValue, setInputValue] = useState("");
  const ref = useRef(null);

  return (
    <div className={styles.searchWrapper}>
      <FontAwesomeIcon icon="search" className={styles.searchIcon} />
      <Input
        ref={ref}
        placeholder="Search for integration..."
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
          onSearch(e.target.value);
        }}
      />
      <FontAwesomeIcon
        className={styles.clearIcon}
        icon="times"
        onClick={() => {
          setInputValue("");
          onSearch("");
          ref.current.focus();
        }}
      />
    </div>
  );
}
