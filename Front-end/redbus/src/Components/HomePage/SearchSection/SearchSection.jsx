import React from "react";
import styles from "./SearchSection.module.css";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
function SearchSection() {
  const [departure, setDeparture] = React.useState("");
  const [arrival, setArrival] = React.useState("");
  const [date, setDate] = React.useState("");
  const [info, setInfo] = React.useState([]);
   const history = useHistory();
    const onDepartureChange = (e) => {
      setDeparture(e.target.value);
    };

    const onArrivalChange = (e) => {
      setArrival(e.target.value);
    };
// console.log(departure,arrival,date)

  
  
          async function fetchMyAPI() {
            let response = await fetch(` http://localhost:3008/data`);
            response = await response.json();
            // console.log(response);
            setInfo(response);
          }

          React.useEffect(() => {
            fetchMyAPI();
          }, []);
  return (
    <div className={styles.container}>
      <div className={styles.form}>
        {/* /* Source Search Div */}
        <div className={styles.formDiv}>
          <input
            type="text"
            placeholder="Source"
            value={departure}
            onChange={onDepartureChange}
          />
        </div>

        {/* Destination Search Div */}
        <div className={styles.formDiv}>
          <input
            type="text"
            placeholder="Destination"
            value={arrival}
            onChange={onArrivalChange}
          />
        </div>

        {/* Date Search Div */}
        <div className={styles.formDivDate}>
          <input
            type="text"
            placeholder="Date"
            value={date}
            onChange={(e) => {
              setDate(e.target.value);
            }}
            onFocus={(e) => {
              e.currentTarget.type = "date";
            }}
            onBlur={(e) => {
              e.currentTarget.type = "text";
              e.currentTarget.placeholder = "Date";
            }}
          />
        </div>
        {/* <Link to="/cancellation">Cancel</Link> */}
        {/* Search Button */}
        <div className={styles.formDivBtn}>
          <input
            type="button"
            value="SEARCH BUS"
            onClick={() => {history.push({
              pathname: "/bus-ticket",
              state: {
                routedata:  info ,
                departure: departure,
                arrival: arrival,
                date : date
              },
            });}}
          />
        </div>
      </div>
    </div>
  );
}

export { SearchSection };
