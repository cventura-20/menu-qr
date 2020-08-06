import React from "react";
import styles from "./TopNav.module.css";

export function TopNav() {
  return (
    <div className={styles["top-nav"]}>
      <div className={styles.left}>
        <span>Escribe una reseña</span>
        <span>Promos</span>
      </div>
      <div className={styles.right}>
        <span>¿Ya tienes cuenta?</span>
        <button className="button">Ingres</button>
      </div>
    </div>
  );
}
