import { useEffect, useState } from "react";
import styles from "../../css/header.module.css";
import { FaSearch, FaTimes } from "react-icons/fa";

const Search = () => {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  //   useEffect

  return (
    <form className={styles.search}>
      <span className={styles["first-span"]}>
        <FaSearch />
      </span>
      <input
        type="text"
        name="search"
        id="search"
        placeholder="Search..."
        value={text}
        onChange={handleChange}
      />
      {text && (
        <span className={styles["last-span"]} onClick={() => setText("")}>
          <FaTimes />
        </span>
      )}
    </form>
  );
};

export default Search;
