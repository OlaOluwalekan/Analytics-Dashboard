import Calendar from "./Calender";
import Search from "./Search";
import UserMenu from "./UserMenu";
import styles from "../../css/header.module.css";

const Header = () => {
  return (
    <header className={styles.main}>
      <div>
        <article>Dashboard</article>
        <Search />
      </div>
      <div>
        <Calendar />
        <UserMenu />
      </div>
    </header>
  );
};

export default Header;
