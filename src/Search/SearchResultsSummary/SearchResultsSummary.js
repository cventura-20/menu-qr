import React from "react";
import styles from "./SearchResultsSummary.module.css";

export function SearchResultsSummary(props) {
  let resultStats = null;
  if (props.amountResults && props.shownResults) {
    resultStats = (
      <p>Se obtuvieron {props.amountResults} resultados de tu busqueda.</p>
    );
  }
  return (
    <div className={styles.container}>
      <div className={styles["search-summary"]}>
        <h1 className="subtitle">
          <strong>{props.term}</strong> {props.location}
        </h1>
        {resultStats}
      </div>
      <div className={styles.filters}>
        <button className="button">
          <span className="icon">
            <i className="fas fa-sliders-h"></i>
          </span>
          <span>Todo</span>
        </button>
        <div className="buttons has-addons">
          <button className="button">Economico</button>
          <button className="button">Precio Medio</button>
          <button className="button">Precio ALto</button>
          <button className="button">De Lujo</button>
        </div>
        <button className="button">
          <span className="icon">
            <i className="fas fa-clock"></i>
          </span>
          <span>Abierto Ahora</span>
        </button>
        <button className="button">
          <span className="icon">
            <i className="fas fa-dollar-sign"></i>
          </span>
          <span>Cupones</span>
        </button>
      </div>
    </div>
  );
}
