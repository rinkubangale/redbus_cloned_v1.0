import React from "react";
import styles from "./Header.module.css";


const Header = ({departure,arrival,date}) => {

  return (
    <div className={styles.Header}>
      <div className={styles.HeaderOne}>
        <p style={{ marginTop:'55px'}}>
          <span style={{ fontWeight: "bold", color: "#626367" }}> Home </span>
          &gt; Bus Tickets &gt; {departure} Bus &gt;
          <span style={{ color: "#ea4c53" }}>
            {" "}
            {departure} To {arrival} Bus{" "}
          </span>
        </p>
        <p style={{ fontWeight: "bold" }}>Fare Starts from INR 100</p>
      </div>

      <div className={styles.HeaderTwo}>
        <div>
          <h3>
            {departure} to {arrival} &lt; {date} &gt;
          </h3>
        </div>
        <div>
          <input type="button" className={styles.btn} value="Modify" />
        </div>
      </div>
    </div>
  );
};

export { Header };
