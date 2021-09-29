import styles from './Convenience.module.css'
function Convenience() {
    return (
      <div className={styles.parentContainer}>
        <div
          className={styles.bg_image}
          style={{
            backgroundImage:
              "url('https://s2.rdbuz.com/web/images/home/city_scape_app_download.png')",
            height: 430,
          }}
            >
                <div className={styles.left}>
hello
                </div>
          <div className={styles.right}>
            <img
              src="//s1.rdbuz.com/web/images/home/IOS_Android_device.png"
              alt="mobile"
              height="552"
            />
            {/* <img src="//s1.rdbuz.com/web/images/home/IOS_Android_device.png"
                    height="552"> */}
          </div>
        </div>
      </div>
    );
}

export { Convenience};