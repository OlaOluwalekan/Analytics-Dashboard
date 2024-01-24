import React from "react";
import MenuItem from "../MenuItem";
import styles from "../../css/sidebar.module.css";

const SideNav = () => {
  return (
    <div className={styles.main}>
      <div>
        {/* LOGO */}
        <article className={styles.logo}>
          <img src="./images/logo.svg" alt="logo" />
          <h3>Analytics</h3>
        </article>

        {/* MAIN MENU ITEMS */}
        <MenuItem image="./images/dashboard.svg" text="dashboard" />
        <MenuItem image="./images/trend-up.svg" text="trends" />

        {/* THEME TOGGLE */}
        <div>
          <article>
            <img src="./images/sun-theme.svg" alt="" />
          </article>
        </div>
      </div>

      {/* OTHER MENU ITEMS */}
      <section></section>
    </div>
  );
};

export default SideNav;
