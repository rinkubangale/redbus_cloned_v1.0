import React from "react";
import "./Howitworks.css";

export default function Howitworks() {
  return (
    <div>
      <div className="how_cont">
        <div className="how_inner">
          <div className="how_phone">
            <img src="../../phone.png" alt="loading"></img>
          </div>
          <div className="how_detail">
            <h1>How It Works</h1>

            <div className="how_btn">
              <h2>Find Ride</h2>
              <p>Offer Ride</p>
            </div>

            <div className="how_active">
              <div style={{borderBottom:"4px solid #38B87C"}} className="how_1card">
                <h2 style={{ backgroundColor: "#38B87C" }}>1</h2>
                <div className="act_acc">
                  <h3>Activate</h3>
                  <p>account</p>
                </div>
              </div>

              <div className="how_1card">
                <h2>2</h2>
                <div className="act_acc">
                  <h3>Request</h3>
                  <p>a ride</p>
                </div>
              </div>

              <div className="how_1card">
                <h2>3</h2>
                <div className="act_acc">
                  <h3>Choose</h3>
                  <p>from ride</p>
                </div>
              </div>

              <div className="how_1card">
                <h2>4</h2>
                <div className="act_acc">
                  <h3>Pay using</h3>
                  <p>points</p>
                </div>
              </div>
           
            </div>

            <div className="how_list">
              <ul>
                <li>  Open / Download redbus App</li>
                <li>  Go to rPool tab and activate your account</li>
              </ul>
            </div>

            <div className="how_list">
              <ul>
                <li>  Verify your account by your official mail ID</li>
                <li>  Use this account to find / offer ride</li>
              </ul>
            </div>

            <div className="how_off">
              <img src="	https://s2.rdbuz.com/rbpool//how_it_works/img_rewards.svg" alt="loading" />
              <h2>50% off</h2>
              <p>on first 5 Rides upto Rs. 25/-</p>
            </div>

          
          </div>
        </div>
      </div>
    </div>
  );
}
