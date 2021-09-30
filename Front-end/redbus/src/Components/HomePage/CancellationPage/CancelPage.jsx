
import styles from './CancelPage.module.css'
function Cancel() {
    return (
      <div className={styles.parent}>
        <div className={styles.container}>
                <div className={styles.cancelHeading}>Cancel your Ticket</div>

                <div className={styles.parentContainer}>
                    
                    <div className={styles.inputContainer}>
                        <div>
                            <input   type="text" placeholder="ENTER TICKET NO" value=""></input>
                        </div>
                        <div>
                            <input   type="text" placeholder="ENTER EMAIL" value=""></input>
                        </div>
                    </div>

                    <div className={styles.btn}>
                        <button>SELECT PASSENGERS</button>
                    </div>
                </div>
        </div>
      </div>
    );
}
export {Cancel}