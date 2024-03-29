import { useGlobalcontext } from "../../context";
import styles from "../../css/sidebar.module.css";
import { FaMoon, FaSun } from "react-icons/fa";

const Theme = () => {
  const { darkMode, changeTheme, navIsOpen } = useGlobalcontext();

  return (
    <div
      className={`${styles.theme} ${navIsOpen ? styles.open : ""}`}
      onClick={changeTheme}
    >
      <article className={`${darkMode ? "" : styles.active}`}>
        <FaSun />
      </article>
      <article className={darkMode ? styles.active : ""}>
        <FaMoon />
      </article>
    </div>
  );
};

export default Theme;
