import React from 'react';
import styles from './NoBusFound.module.css'

export const NoBusFound = () => {
    return (
      <div className={styles.NoBus_container}>
        <div>
          <img src="./no_bus.png" alt="" />
        </div>
        <div>
          <h3>Oops! No buses found.</h3>
          <p>
            As per government guidelines, bus services on this route are
            temporarily suspended
          </p>
        </div>
      </div>
    );
}
