import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className={styles.Navbar}>
      <div className={styles.Left_container}>
        <div className={styles.Left_inner_div}>
          <ul>
            <li>
              <Link to="/">
                <img
                  className={styles.Bus_icon}
                  src="https://www.redbus.in/i/59538b35953097248522a65b4b79650e.png"
                  alt=""
                />
              </Link>
            </li>
            <li>
              <Link to="/bus_tickets" className={styles.Left_list}>
                BUS TICKETS
              </Link>
            </li>
            <li>
              <Link to="/r_pool" className={styles.Left_list}>
                rPool
              </Link>
            </li>
            <li>
              <Link to="/bus_hire" className={styles.Left_list}>
                BUS HIRE
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.Right_container}>
        <div>
          <Link to="/help" className={styles.Right_list}>
            Help
          </Link>
        </div>
        <div>
          <Link to="manage_booking" className={styles.Right_list}>
            Manage Booking
          </Link>
        </div>
        <div>
          <img src="" alt="" />
          Image
        </div>
      </div>
    </div>
  );
};
