import React from "react";
import styles from "./ShowBusData.module.css";

export const ShowBusData = (data) => {
  let newData = data.data;
  console.log("newData:", newData);

  return (
    <div>
      {newData.map(({ id, to, from, bus, type, time, price, rating }) => {
        return (
          <div className={styles.Data_container} key={id}>
            <div className={styles.Bus_data}>
              <div>
                <div className={styles.Bus_head}>{bus}</div>
                <div>{type}</div>
              </div>
              <div>
                <div className={styles.Start_time}>{time.start}</div>
                <div>{to}</div>
              </div>
              <div>
                <div>{time.end}</div>
                <div>{from}</div>
              </div>
              <div>
                <div
                  className={`${styles.Bus_rating} ${
                    rating > 4 ? styles.Rating_green : styles.Rating_yellow
                  }`}
                >
                  <img src="./safety_star.png" alt="" /> {rating}
                </div>
                <div>212</div>
              </div>
              <div>
                <div className={styles.Bus_price}>INR: {price}</div>
                <div>redDeal applied</div>
              </div>
              <div>
                <div>26 Seats Available</div>
                <div>17 Window</div>
              </div>
            </div>
            <div className={styles.Static_container}>
              <div className={styles.Static_data}>
                <img src="./sos_black.png" alt="" />
                <img src="./charging.png" alt="" />
                <img src="./movie.png" alt="" />
                <div className={styles.Vaccinated}>
                  <img src="./protected.png" alt="" />
                  <span>Vaccinated Staff</span>
                </div>
                <div className={styles.Bus_tracking}>
                  <img src="./tracking.png" alt="" />
                  <span>Live Tracking</span>
                </div>
              </div>
              <div className={styles.Static_button}>
                <div className={styles.View_seats}>VIEW SEATS</div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
