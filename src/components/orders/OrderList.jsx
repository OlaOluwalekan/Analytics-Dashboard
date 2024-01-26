import React from "react";
import { useGlobalcontext } from "../../context";
import Order from "./Order";
import styles from "../../css/orders.module.css";

const OrderList = () => {
  const { salesData } = useGlobalcontext();
  // console.log(salesData);

  return (
    <div className={styles["table-container"]}>
      <table className={styles["order-list"]}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Date</th>
            <th>Amount</th>
            <th>Status</th>
            <th>Invoice</th>
          </tr>
        </thead>
        <tbody>
          {salesData.map((sale) => {
            return <Order key={sale.id} {...sale} />;
          })}
        </tbody>
      </table>
    </div>
  );
};

export default OrderList;
