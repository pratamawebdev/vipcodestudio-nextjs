import React from "react";
import styles from "@/styles/404.module.scss";
const Custom404 = () => {
  return (
    <div className={styles.error}>
      <img src="/not_found.png" alt="404" className={styles.error__image} />
      <div>Page not found</div>
    </div>
  );
};

export default Custom404;
