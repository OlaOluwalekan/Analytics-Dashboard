import styles from "../../css/orders.module.css";

const Order = ({ image, first_name, last_name, date, amount, status }) => {
  return (
    <tr>
      <td className={styles["name-image"]}>
        <img src={image} alt={first_name} />
        <p>{`${first_name} ${last_name}`}</p>
      </td>
      <td>{date}</td>
      <td>${amount.toLocaleString()}</td>
      <td>{status}</td>
      <td>invoice</td>
    </tr>
  );
};

export default Order;
