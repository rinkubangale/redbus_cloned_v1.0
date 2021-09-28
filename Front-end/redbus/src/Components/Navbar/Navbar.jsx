import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className={styles.Navbar}>
      <div className={styles.LeftContainer}>
        <img
          src="https://www.redbus.in/i/59538b35953097248522a65b4b79650e.png"
          alt=""
        />
      </div>
      <div className={styles.RightContainer}>Right</div>
    </div>
  );
};
