import Header from "../header/Header";
import styles from "../../css/container.module.css";
import Orders from "../orders/Orders";

const Container = () => {
  return (
    <div className={styles.main}>
      <Header />
      <section>
        <Orders />
      </section>
    </div>
  );
};

export default Container;
