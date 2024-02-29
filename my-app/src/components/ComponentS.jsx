import styles from "@/styles/style.module.css";

export const List = (props) => {
  const { imgUrl } = props;
  return (
    <div>
      <img src={imgUrl} className={`${styles.box} ${styles.gap}`}></img>
      <div className={styles.flex}>{props.title}</div>
    </div>
  );
};

import { useState } from "react";

export const Toggle = () => {
  const [toggle, setToggle] = useState(true);
  const toggleButton = () => {
    setToggle(!toggle);
  };
  return (
    <div className={styles.container}>
      <h1>Toggle turn on | off</h1>
      <button
        onClick={toggleButton}
        style={{ backgroundColor: toggle ? "red" : "green" }}
      >
        {toggle ? "OFF" : "ON"}
      </button>
    </div>
  );
};
