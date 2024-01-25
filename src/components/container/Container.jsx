import Header from "../header/Header";
import styles from "../../css/container.module.css";
import data from "../../data.json";

const Container = () => {
  console.log(data);
  return (
    <div className={styles.main}>
      <Header />
    </div>
  );
};

export default Container;
