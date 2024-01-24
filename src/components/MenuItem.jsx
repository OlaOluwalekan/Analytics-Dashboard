import { useGlobalcontext } from "../context";
import styles from "../css/sidebar.module.css";

const MenuItem = ({ image, link, text }) => {
  const { currentPage, changePage } = useGlobalcontext();

  return (
    <article
      className={`${styles.menu_item} ${currentPage === text && styles.active}`}
      onClick={() => changePage(text)}
    >
      <img src={image} alt={image} />
      <p>{text}</p>
    </article>
  );
};

export default MenuItem;
