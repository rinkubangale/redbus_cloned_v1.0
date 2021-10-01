import React from 'react'
import { LeftSection } from './LeftSection'
import {Header} from './Header'
import styles from './BusTicket.module.css';
import {ShowBusData} from './ShowBusData'
function BusTicket(props) {
  const data = props.location.state.routedata;
  const date = props.location.state.date;
    const [busData, setBusData] = React.useState([]);
      const [departure, setDeparture] = React.useState(
        props.location.state.departure
      );
      const [arrival, setArrival] = React.useState(
        props.location.state.arrival
      );
    function filtering() {
          const res = data.filter((ele) => {
            return ele.to === departure && ele.from === arrival;
          });
        setBusData(res);
    }
      React.useEffect(() => {
        filtering();
      }, []);
    // console.log(busData,departure,arrival)
  return (
    <div className={styles.busTicket_container}>
      <div><Header departure={departure} arrival={arrival} date = {date} /></div>
      <div className={styles.parentContainer}>
        <div className={styles.left}>
          <LeftSection />
        </div>
        <div className={styles.right}>
          
          <ShowBusData data={busData}/>

        </div>
      </div>
    </div>
  );
}
export {BusTicket}