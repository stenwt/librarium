import React, { useState } from "react";
import { Tooltip } from "antd";
import styles from "./PointOfInterest.module.css";

const wrapRef = React.createRef<HTMLDivElement>();

function Point({ description, tooltipPlacement = "right", x, y, label }) {
  const [isVisited, setIsVisited] = useState(false);

  return (
    <Tooltip
      getPopupContainer={() =>
        // @ts-ignore
        wrapRef.current
      }
      trigger={["click"]}
      title={description}
      color="#091e3b"
      // @ts-ignore
      placement={tooltipPlacement}
    >
      <div
        style={{ top: `${y}px`, left: `${x}px` }}
        className={`${styles.circle} ${isVisited ? styles.isVisited : ""}`}
        onClick={() => setIsVisited(true)}
      >
        <div>{label || "+"}</div>
      </div>
    </Tooltip>
  );
}

export default function PointsOfInterest({ points = [], children }) {
  const [offset, setOffset] = useState({ x: 0, y: 0 });

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
          <Point {...point} index={index} key={index} />
        ))}
      </div>
      {children}
    </div>
  );
}
