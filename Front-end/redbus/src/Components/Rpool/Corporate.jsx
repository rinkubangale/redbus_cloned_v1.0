import styles from './Corporate.module.css';

export const Corporate = () => {
    return (
      <div className={styles.Container}>
        <div className={styles.Top_container}>
          {/* <div> */}
          <div className={styles.Top_text}>
            <h2>rPool Corporate+, exclusive for Corporates</h2>
            <p>
              <b>
                Say “goodbye” to getting frustrated with traffic and road rage
                and say “hello” to arriving fresh to work every morning.
              </b>
            </p>
            <p>
              rPool Corporate+ is an exclusive bikepool and carpool model for
              corporates. rPool partners with corporates to provide carpooling
              and bikepooling as an alternative to existing modes of employee
              commute. rPool Corporate+ pools employees commuting in the same
              routes into a single ride, allowing them to travel smarter to
              work, save on commute costs, and make connections along the way.
            </p>
          </div>
          <div>
            <img
              src="https://st.redbus.in/Images/rpools/corporates.svg"
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
                Every month, the company fills the rPool wallets of all
                employees who sign up as ride-takers on the rPool app
              </span>
            </div>
            <div className={styles.Inline_text}>
              <div className={styles.Number_cover}>2</div>
              <span>
                Every month, the company fills the rPool wallets of all
                employees who sign up as ride-takers on the rPool app
              </span>
            </div>
            <div className={styles.Inline_text}>
              <div className={styles.Number_cover}>3</div>
              <span>
                Every month, the company fills the rPool wallets of all
                employees who sign up as ride-takers on the rPool app
              </span>
            </div>
            <div className={styles.Inline_text}>
              <div className={styles.Number_cover}>4</div>
              <span>
                Every month, the company fills the rPool wallets of all
                employees who sign up as ride-takers on the rPool app
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
                Reduced exposure as employees travel to and from work with
                colleagues
              </h4>
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
                Reduced efforts in route optimization and seat planning in other
                modes of commute
              </h4>
            </div>
            <div>
              <img src="/checkmark.png" alt="" />
              <h4>Corporates can choose either prepaid or postpaid models</h4>
            </div>
            <div>
              <img src="/checkmark.png" alt="" />
              <h4>
                Both corporates and employees save money on employee transport
                and fuel
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
}
