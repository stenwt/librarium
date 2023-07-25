import React from "react";
import { Tooltip as AntdTooltip } from "antd";

export default function Tooltip(props) {
  return (
    <AntdTooltip color="#091e3b" title={props.children}>
      {props.trigger}
    </AntdTooltip>
  );
}
