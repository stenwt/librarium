import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";
import MendableAIWidget from "../../components/MendableAIWidget";

library.add(fas, fab);

export default function Root({ children }) {
  return (
    <>
      {false && <MendableAIWidget></MendableAIWidget>}
      {children}
    </>
  );
}
