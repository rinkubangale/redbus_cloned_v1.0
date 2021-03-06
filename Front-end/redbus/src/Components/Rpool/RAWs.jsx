import styles from "./Corporate.module.css";

export const RAWs = () => {
  return (
    <div className={styles.Raws_container}>
      <div className={styles.Top_container}>
        {/* <div> */}
        <div className={styles.Top_text}>
          <h2>rPool for RWAs</h2>

          <p>
            An exclusive model for Gated Communities where we offer Carpooling
            and Bikepooling as a safer, smarter and reliable mode of commute.
            Making commute to work more economical and hassle-free for the
            residents.
          </p>
        </div>
        <div>
          <img
            className={styles.Raw_image}
            src="https://st.redbus.in/Images/rpools/rwa.svg"
            alt=""
          />
        </div>
        {/* </div> */}
      </div>
      <div>
        <h4>How it works?</h4>
        <div style={{ display: "grid" }}>
          <div className={styles.Inline_text}>
            <div className={styles.Number_cover}>1</div>
            <span>
              rPool partners with community Resident Welfare Associations (RWAs)
              to promote ridesharing among residents
            </span>
          </div>
          <div className={styles.Inline_text}>
            <div className={styles.Number_cover}>2</div>
            <span>
              RWAs allow rPool to promote ridesharing among the residents by
              granting permissions for on-ground promotional activities.
            </span>
          </div>
          <div className={styles.Inline_text}>
            <div className={styles.Number_cover}>3</div>
            <span>
              RWAs share the promotional communications on society groups and
              mails
            </span>
          </div>
          <div className={styles.Inline_text}>
            <div className={styles.Number_cover}>4</div>
            <span>
              rPool customises offers and incentives exclusively for the RWAs
            </span>
          </div>
          <div className={styles.Inline_text}>
            <div className={styles.Number_cover}>5</div>
            <span>
              rPool contributes ???50 and ???200 to the RWA fund for each resident
              verifying as Ride-Giver and Ride-Taker respectively
            </span>
          </div>
          <div className={styles.Inline_text}>
            <div className={styles.Number_cover}>6</div>
            <span>
              For every 20 rPool rides happening from/to the society in a month,
              rPool will contribute ???500 to the RWA funds (capped to a maximum
              of ???2500 per month)
            </span>
          </div>
        </div>
      </div>
      <div>
        <h4>Benefits</h4>
        <div className={styles.Text_grid}>
          <div>
            <img src="/checkmark.png" alt="" />
            <h4>
              Adds to the suite of travel options for residents, enabling safer
              and cheaper commute to work
            </h4>
          </div>
          <div>
            <img src="/checkmark.png" alt="" />
            <h4>Corporates can choose either prepaid or postpaid models</h4>
          </div>
          <div>
            <img src="/checkmark.png" alt="" />
            <h4>
              Employees enjoy the benefits of ridesharing and arrive fresh to
              work without having to take public transport
            </h4>
          </div>
          <div>
            <img src="/checkmark.png" alt="" />
            <h4>
              Both corporates and employees save money on employee transport and
              fuel
            </h4>
          </div>
          <div>
            <img src="/checkmark.png" alt="" />
            <h4>
              Reduced efforts in route optimization and seat planning in other
              modes of commute
            </h4>
          </div>
          <div>
            <img src="/checkmark.png" alt="" />
            <h4>Convenient pickup and drop points for employees</h4>
          </div>
        </div>
      </div>
    </div>
  );
};
