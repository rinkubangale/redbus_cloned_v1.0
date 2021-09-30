
import styles from './CancelPage.module.css'
function Cancel() {
    return (
      <div className={styles.parent}>
        <div className={styles.container}>
                <div className={styles.cancelHeading}>Cancel your Ticket</div>

                <div className={styles.parentContainer}>
                    
                    <div className={styles.inputContainer}>
                        <div>
                            <input className='input-tag'   type="text" placeholder="ENTER TICKET NO" value=""></input>
                        </div>
                        <div>
                            <input className='input-tag'   type="text" placeholder="ENTER EMAIL" value=""></input>
                        </div>
                    </div>

                    <div className={styles.btn}>
                        <button className="btn">SELECT PASSENGERS</button>
                    </div>
                </div>
        </div>
      </div>
    );
}
export {Cancel}