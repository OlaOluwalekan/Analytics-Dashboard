import React from "react";
import OrderList from "./OrderList";
import { useGlobalcontext } from "../../context";
import styles from "../../css/orders.module.css";

const Orders = () => {
  const { seeAllOrder, showingAll } = useGlobalcontext();

  return (
    <div className={styles.main}>
      <article>
        <h3>Last Orders</h3>
        <button onClick={seeAllOrder}>
          {showingAll ? "See Less" : "See All"}
        </button>
      </article>
      <OrderList />
    </div>
  );
};

export default Orders;
