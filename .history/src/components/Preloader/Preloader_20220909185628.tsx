import React from "react";
import PreloaderSVG from "../../assets/preloader/preloader.svg";
import styles from "./styles.module.scss";

const Preloader = () => {
  return (
    <div className={styles.preloader}>
      <img src={PreloaderSVG} />
    </div>
  );
};

export default Preloader;
