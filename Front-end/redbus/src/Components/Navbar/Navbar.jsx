import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";

export const Navbar = ({ showLogin, setShowLogin }) => {
  const [expandBooking, setExpandBooking] = useState(false);
  const [expandLogin, setExpandLogin] = useState(false);

  return (
    <div className={styles.Navbar}>
      <div className={styles.Left_container}>
        <div className={styles.Left_inner_div}>
          <ul className={styles.Left_ul}>
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
        <div className={styles.Manage_booking}>
          <div
            onClick={() => {
              setExpandBooking(!expandBooking);
              setExpandLogin(false);
            }}
            className={styles.Manage_booking_align}
          >
            <div>Manage Booking</div>
            <img
              className={styles.Expand_arrow1}
              src="/expand_arrow.png"
              alt=""
            />
          </div>
          {expandBooking ? (
            <div className={styles.Show_booking}>
              <li className={styles.Manage_booking_head}>Bus Tickets</li>
              <li>Cancel</li>
              <li>Change Travel Date</li>
              <li>Show My Ticket</li>
              <li>Email/Sms</li>
            </div>
          ) : (
            <></>
          )}
        </div>
        <div
          onClick={() => {
            setExpandLogin(!expandLogin);
            setExpandBooking(false);
          }}
          className={styles.User_div}
        >
          <img className={styles.User_image} src="/user.png" alt="" />
          <img className={styles.Expand_arrow} src="/expand_arrow.png" alt="" />
          <div>
            {expandLogin ? (
              <div className={styles.Show_login} onClick={() => { setShowLogin(!showLogin); console.log(showLogin)}}>Sign In/ Sign Up</div>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
