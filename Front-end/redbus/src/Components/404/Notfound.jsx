import React from 'react';
import styles from './Notfound.module.css';
import { useHistory } from 'react-router-dom';

export const Notfound = () => {
    const history = useHistory();
    return (
      <div className={styles.NotFound_container}>
        <div>
          <img src="/404.png" alt="" />
        </div>
        <div>Oops! Seems like some unexpected error has occurred.</div>
        <div className={styles.NotFound_pointer}>
          <span>Please click </span>
          <span className={styles.Notfound_link} onClick={() =>{history.push('/')}}>here </span>
          <span>to go to the home page.</span>
        </div>
      </div>
    );
}
