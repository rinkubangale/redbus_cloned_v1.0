import React from "react";

import "./Divone.css";

export default function Divone() {
  return (
    <div className="main_container">
      <div className="outer">
        <div className="outstation_div">
          <img
            style={{ borderRight: "1px solid grey" }}
            src="https://st.redbus.in/Images/rpools/rPoolIntracity.svg"
            alt="loading"
          ></img>
          <img
            src="https://st.redbus.in/Images/rpools/rPoolOutstation.svg"
            alt="loading"
          ></img>
        </div>

        <div className="text1">
          <h2>Commuting within the City?</h2>
        </div>
        <div className="text2">
          <h2>Travelling out of town?</h2>
        </div>
        <div className="text3">
          <h3>Introducing Outstation</h3>
        </div>
      </div>

      <div className="info_main_div">
        <div className="info_flex">
          <div>
            <h2>Share your rides on rPool, </h2>
          </div>
          <div>
            <p> Bikepool & Carpool for Professionals</p>
          </div>
        </div>
        <div className="t1_bh">
          <p>
            Intra-City services currently live in BANGALORE, HYDERABAD, PUNE,
            NEW DELHI – NCR and CHENNAI
          </p>
        </div>
        <div className="t2_bh">
          <p>Outstation services currently live across India</p>
        </div>
      </div>

      <div className="app_click_bh">
        <button className="btn1_bh">
          <div>
            <img
              src="https://www.redbus.in/r-pool/images/googleplay.svg"
              alt="loading"
            ></img>
          </div>
        </button>

        <button className="btn2_bh">
          <div>
            <img
              src="https://www.redbus.in/r-pool/images/ic_appstore.svg"
              alt="loading"
            ></img>
          </div>
        </button>
      </div>
    </div>
  );
}
