import React from "react";
import MenuItem from "../MenuItem";
import styles from "../../css/sidebar.module.css";
import Theme from "./Theme";
import { useGlobalcontext } from "../../context";

const SideNav = () => {
  const { darkMode } = useGlobalcontext();

  return (
    <div
      className={darkMode ? `${styles.main} ${styles.dark}` : `${styles.main}`}
    >
      <div>
        {/* LOGO */}
        <article className={styles.logo}>
          <img src="./images/logo.svg" alt="logo" />
          <h3>Analytics</h3>
        </article>

        {/* MAIN MENU ITEMS */}
        <MenuItem image="./images/dashboard.svg" text="dashboard" />
        <MenuItem image="./images/trend-up.svg" text="trends" />
        <MenuItem image="./images/profile-user.svg" text="profile" />
        <MenuItem image="./images/chart.svg" text="chart" />
        <MenuItem image="./images/discount.svg" text="discount" />
        <MenuItem image="./images/info.svg" text="info" />

        {/* THEME TOGGLE */}
        <Theme />
      </div>

      {/* OTHER MENU ITEMS */}
      <section>
        <MenuItem image="./images/arrow-right.svg" text="go forward" />
        <MenuItem image="./images/settings.svg" text="settings" />
        <MenuItem image="./images/logout.svg" text="logout" />
      </section>
    </div>
  );
};

export default SideNav;
