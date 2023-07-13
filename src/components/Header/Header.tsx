import React from "react";
import styles from "./Header.module.css";
import logo from "../../logo.png";
import Clock from "../Clock/Clock";
import Dropdown from "../LandDropdown/LangDropdown";

export default class Header extends React.Component {
  render() {
    return (
    <div className={styles.header}>
      <img className={styles.logo} src={logo} alt="logo" />
      <div className={styles.info}>
        <div className={styles.menu}>
          <Dropdown />
        </div>
        <div className={styles.clock}>
          <Clock />
        </div>
      </div>
    </div>
    );
  }
}
