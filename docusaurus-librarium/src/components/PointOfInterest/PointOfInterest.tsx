import React, { useState } from "react";
import { Tooltip } from "antd";
import styles from "./PointOfInterest.module.css";

function Point({ description, tooltipPlacement = "right", x, y, label, wrapRef }) {
  const [isVisited, setIsVisited] = useState(false);

  return (
    <Tooltip
      getPopupContainer={() => wrapRef.current}
      trigger={["click"]}
      title={description}
      color="#091e3b"
      // @ts-ignore
      placement={tooltipPlacement}
    >
      <div
        aria-hidden="true"
        style={{ top: `${y}px`, left: `${x}px` }}
        className={`${styles.circle} ${isVisited ? styles.isVisited : ""}`}
        onClick={() => {
          setIsVisited(true);
        }}
      >
        <div>{label || "+"}</div>
      </div>
    </Tooltip>
  );
}

export default function PointsOfInterest({ points = [], children }) {
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const wrapRef = React.createRef<HTMLDivElement>();

  return (
    <div
      className={styles.wrapper}
      ref={wrapRef}
      onScroll={(ev) => {
        const target = ev.target as HTMLDivElement;
        setOffset({ x: target.scrollLeft, y: target.scrollTop });
      }}
    >
      <div
        className={styles.pointsWrapper}
        style={{
          transform: `translate(-${offset.x}px, -${offset.y}px)`,
        }}
      >
        {points.map((point, index) => (
          <Point {...point} index={index} key={index} wrapRef={wrapRef} />
        ))}
      </div>
      {children}
    </div>
  );
}
