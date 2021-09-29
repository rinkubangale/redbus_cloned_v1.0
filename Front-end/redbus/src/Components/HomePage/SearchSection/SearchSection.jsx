import React from "react";
import styles from "./SearchSection.module.css";
function SearchSection() {


  return (
    <>
      <div className={styles.form}>
        {/* /* Source Search Div */}
        <div className={styles.formDiv}>
          <input type="text" placeholder="Source" value="" />
        </div>

        {/* Destination Search Div */}
        <div className={styles.formDiv}>
          <input type="text" placeholder="Destination" value="" />
        </div>

        {/* Date Search Div */}
        <div className={styles.formDiv}>
          <input
            type="text"
            placeholder="Date"
            onFocus={(e) => {
              e.currentTarget.type = "date";
            }}
            onBlur={(e) =>{
              e.currentTarget.type = "text";
              e.currentTarget.placeholder = "Date";
            }}
          />
        </div>

        {/* Search Button */}
        <div>
          <button>Search Buses</button>
        </div>
      </div>
    </>
  );
}

export { SearchSection };
