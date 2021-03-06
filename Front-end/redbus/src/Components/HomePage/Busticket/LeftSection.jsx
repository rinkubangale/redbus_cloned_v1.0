import React from "react";
import styles from "./LeftSection.module.css";
import WifiIcon from "@material-ui/icons/Wifi";
import LocalDrinkIcon from "@material-ui/icons/LocalDrink";
import InsertDriveFileIcon from "@material-ui/icons/InsertDriveFile";
import SettingsInputHdmiIcon from "@material-ui/icons/SettingsInputHdmi";
import LocalMoviesIcon from "@material-ui/icons/LocalMovies";


const LeftSection = () => {
  return (
    <div className={styles.Left}>
      {/* 1. Basic Filters */}
      <div className={styles.Left_top}>
        <p style={{margin:0}}>FILTERS</p>
        <ul>
          <li>
            <div className={styles.filter}>Live Tracking</div>
          </li>
          <li>
            <div className={styles.filter}>Red Deals</div>
          </li>
          <li>
            <div className={styles.filter}>Reschedulable</div>
          </li>
        </ul>
      </div>
      {/* 2. Departure Filters */}
      <div className={styles.Left_filters}>
        <p style={{margin:'0', color:'#3e3e52' ,fontWeight:'bolder', paddingBottom:'10px'}}>DEPARTURE TIME</p>
        <ul>
          <li className={styles.flexDiv}>
            <input type="checkbox" name="before6am" />
            <p>Before 6 am </p>
          </li>
          <li className={styles.flexDiv}>
            <input type="checkbox" name="6amto12pm" />

            <p>6 am to 12 pm </p>
          </li>
          <li className={styles.flexDiv}>
            <input type="checkbox" name="12pmto6pm" />

            <p>12pm to 6 pm </p>
          </li>
          <li className={styles.flexDiv}>
            <input type="checkbox" name="after6pm" />

            <p>After 6 pm </p>
          </li>
        </ul>
      </div>
      {/* 3. Bus Types Filters */}
      <div className={styles.Left_filters}>
        <p style={{margin:'0', color:'#3e3e52' ,fontWeight:'bolder', paddingBottom:'10px'}}>BUS TYPES</p>
        <ul>
          <li className={styles.flexDiv}>
            <input type="checkbox" name="seater" />

            <p>SEATER </p>
          </li>
          <li className={styles.flexDiv}>
            <input type="checkbox" name="sleeper" />

            <p>SLEEPER </p>
          </li>
          <li className={styles.flexDiv}>
            <input type="checkbox" name="ac" />

            <p>AC</p>
          </li>
          <li className={styles.flexDiv}>
            <input type="checkbox" name="nonac" />

            <p>NON - A/C</p>
          </li>
        </ul>
      </div>
      {/* 4. Arrival Time Filters */}

      <div className={styles.Left_filters}>
        <p style={{margin:'0', color:'#3e3e52' ,fontWeight:'bolder', paddingBottom:'10px'}}>ARRIVAL TIME</p>
        <ul>
          <li className={styles.flexDiv}>
            <input type="checkbox" name="before6am" />

            <p>Before 6 am</p>
          </li>
          <li className={styles.flexDiv}>
            <input type="checkbox" name="6amto12pm" />

            <p>6 am to 12 pm</p>
          </li>
          <li className={styles.flexDiv}>
            <input type="checkbox" name="12pmto6pm" />

            <p>12pm to 6 pm </p>
          </li>
          <li className={styles.flexDiv}>
            <input type="checkbox" name="after6pm" />

            <p>After 6 pm</p>
          </li>
        </ul>
      </div>

      {/* 8. Amenities */}
      <div className={styles.Left_filters}>
        <p style={{margin:'0', color:'#3e3e52' ,fontWeight:'bolder', paddingBottom:'10px'}}>AMENITIES</p>
        <ul className={styles.Left_filters__amenities}>
          <li style={{ display: "flex", border:'1px solid', alignItems: "center" }}>
            <WifiIcon className={styles.MuiSvgIconRoot} />
            WiFi
          </li>
          <li style={{ display: "flex", border:'1px solid', alignItems: "center" }}>
            <LocalDrinkIcon className={styles.MuiSvgIconRoot} />
            Water Bottles
          </li>
          <li style={{ display: "flex", border:'1px solid', alignItems: "center" }}>
            <InsertDriveFileIcon className={styles.MuiSvgIconRoot} />
            Blankets
          </li>
          <li style={{ display: "flex", border:'1px solid', alignItems: "center" }}>
            <SettingsInputHdmiIcon className={styles.MuiSvgIconRoot} />
            Charging Point
          </li>
          <li style={{ display: "flex", border:'1px solid', alignItems: "center" }}>
            <LocalMoviesIcon className={styles.MuiSvgIconRoot} />
            Movie
          </li>
        </ul>
      </div>
    </div>
  );
};

export { LeftSection };
