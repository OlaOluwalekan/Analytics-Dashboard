import React, { useEffect, useState } from "react";
import MenuItem from "../MenuItem";
import styles from "../../css/sidebar.module.css";
import Theme from "./Theme";
import { useGlobalcontext } from "../../context";

const SideNav = () => {
  const { darkMode, navIsOpen, toggleNav } = useGlobalcontext();
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  window.onresize = () => {
    setScreenWidth(window.innerWidth);
  };

  useEffect(() => {
    if (screenWidth < 700 && navIsOpen) {
      toggleNav();
    }
  }, [screenWidth]);

  return (
    <div
      className={`${styles.main} ${darkMode ? styles.dark : ""} ${
        navIsOpen ? styles.open : ""
      }`}
    >
      <div>
        {/* LOGO */}
        <article
          className={styles.logo}
          onClick={() => {
            if (screenWidth > 700) {
              toggleNav();
            }
          }}
        >
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
