import React from "react";
import styles from "./SearchSuggestions.module.css";

export function SearchSuggestions() {
  return (
    <div className={styles.suggestions}>
      <span className="icon is-small">
        <i className="fas fa-utensils"></i>
      </span>
      <span className={styles.suggestion}>Restaurantes</span>
      <span className="icon is-small">
        <i className="fas fa-cocktail"></i>
      </span>
      <span className={styles.suggestion}>Bares</span>
      <span className="icon is-small">
        <i className="fas fa-concierge-bell"></i>
      </span>
      <span className={styles.suggestion}>Comida para llevar</span>
      <span className="icon is-small">
        <i className="fas fa-truck"></i>
      </span>
      <span className={styles.suggestion}>Servicio a Domicilio</span>
    </div>
  );
}
