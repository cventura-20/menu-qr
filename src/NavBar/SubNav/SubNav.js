import React from "react";
import { SubNavItem } from "./SubNavItem/SubNavItem";
import styles from "./SubNav.module.css";

export function SubNav() {
  return (
    <div className={styles.container}>
      <div className={styles["sub-nav"]}>
        <div>
          <SubNavItem label="Restaurantes" icon="fa-utensils" />
          <SubNavItem label="Entrega a Domicilio" icon="fa-home" />
          <SubNavItem label="Auto Servicio" icon="fa-car-side" />
          <SubNavItem label="Mas" icon="fa-info-circle" showRightBorder />
        </div>
        <div>
          <button
            className={`button ${styles["subnav-button"]} ${styles["omit-right-border"]}`}
          >
            <span className="icon">
              <i className="fas fa-pen" />
            </span>
            <span>Danos tu opinión</span>
          </button>
          <button className={`button ${styles["subnav-button"]}`}>
            <span className="icon">
              <i className="fas fa-hotel" />
            </span>
            <span>Para Negocios</span>
          </button>
        </div>
      </div>
    </div>
  );
}
