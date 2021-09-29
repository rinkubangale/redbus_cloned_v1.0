import React from "react";
import styles from "./Coupon.module.css";
import { FloatingSection } from "./FloatingSection";

function Coupon(){
  return (
    <div className={styles.couponContainer}>
      <div className={styles.Card}>
        <div className={styles.coupon}>
          <span>save upto to Rs 150 on bus tickets</span>
          <span className={styles.offerImage}>
            <img
              src="https://st.redbus.in/Images/INDOFFER/safetyplus/274_147.png"
              alt="first"
            />
          </span>
          <span>Use code FIRST</span>
        </div>

        <div className={styles.coupon}>
          <span>State wise Guidelines</span>
          <span className={styles.offerImage}>
            <img
              src="https://st.redbus.in/Images/buscommon/guidelines.png"
              alt="second"
            />
          </span>
          <span>click here for latest updates</span>
        </div>

        <div className={styles.coupon}>
          <span>Get upto Rs. 500 on minimum purchase of Rs 300</span>
          <span className={styles.offerImage}>
            <img
              src="https://s1.rdbuz.com/images/MobileOffers/amazon/offertile..png"
              alt="third"
            />
          </span>
          <span>Pay using Amazon pay</span>
        </div>
      </div>

      {/* Floating section */}
       <FloatingSection/>
    </div>
  );
};

export { Coupon };
