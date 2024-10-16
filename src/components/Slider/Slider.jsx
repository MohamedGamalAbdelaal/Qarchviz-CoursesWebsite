import React from "react";
import styles from "./Slider.module.css";
export default function Slider() {
  return (
    <>
      <div className={`${styles.slider}`}>
        <img src="slider.jpg" className="h-100 w-100 object-fit-cover" />
      </div>
    </>
  );
}
