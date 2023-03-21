import React, { useRef, useEffect } from "react";
import { useMousePosition } from "../../../hooks/useMousePosition";

import styles from "./BlobElement.module.css";

const BlobElement = () => {
  const blobRef = useRef();
  const position = useMousePosition();

  useEffect(() => {
    const blobElement = blobRef?.current;

    blobElement.animate(
      {
        left: `${position.x}px`,
        top: `${position.y}px`,
      },
      { duration: 3000, fill: "forwards" }
    );
  }, [position]);

  return (
    <>
      <div className={styles.blob} ref={blobRef} />
      <div className={styles.blur} />
    </>
  );
};

export default BlobElement;
