import React from "react";
import logo from "../assets/Logo.png";
import styles from "./NavBar.module.css";
import { SearchBar } from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";

export function NavBar(props) {
  return (
    <div className={styles["nav-bar"]}>
      <Link to="/">
        <img src={logo} className={styles.logo} alt="El menu en tu mano" />
      </Link>
      <SearchBar
        small
        term={props.term}
        location={props.location}
        search={props.search}
      />
      <button className={`button ${styles["nav-button"]}`}>Ingresa</button>
      <button className={`button ${styles["nav-button"]}`}>Registrate</button>
    </div>
  );
}
