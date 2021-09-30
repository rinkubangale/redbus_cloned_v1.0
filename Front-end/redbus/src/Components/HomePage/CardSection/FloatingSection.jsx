import styles from "./Coupon.module.css";
function FloatingSection() {
  return (
    <div>
      <div className={styles.float}>
        <div className={styles.imgBox}>
          <img
            src="https://s3.rdbuz.com/Images/webplatform/measures/safetyplus.svg"
            alt="shield"
          />
        </div>
        <div className={styles.txt}>
          <div>
            <h4>Safety+ Program</h4>
          </div>
          <div className={styles.head}>
            <p style={{paddingTop:'25px', fontSize:'small' }}>A unique certification program to ensures safety in all buses</p>
          </div>
        </div>
        <div>
          <div style={{ height: "60px" }}></div>
          <button>KNOW MORE</button>
        </div>
      </div>
    </div>
  );
}

export { FloatingSection };