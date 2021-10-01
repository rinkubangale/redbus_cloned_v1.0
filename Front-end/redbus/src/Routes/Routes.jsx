import { Route, Switch } from "react-router-dom";
import { Rpool } from "../Pages/Rpool";
import { Navbar } from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/footer";
import { HomePage } from "../Pages/HomePage";
import { useState } from 'react';
import { BusSearch } from "../Pages/busSearch";
import { Cancel } from "../Components/HomePage/CancellationPage/CancelPage";
import { Notfound } from '../Components/404/Notfound';
import { BusTicket } from "../Components/HomePage/Busticket/BusTicket";

export const Routes = () => {

  const [showLogin, setShowLogin] = useState(false);

  return (
    <div>
      <Navbar showLogin={showLogin} setShowLogin={setShowLogin} />
      <Switch>
        <Route exact path="/">
          <HomePage showLogin={showLogin} setShowLogin={setShowLogin} />
        </Route>
        <Route path="/r_pool">
          <Rpool />
        </Route>
        <Route path="/busSearch">
          <BusSearch />
        </Route>
        <Route path="/cancellation">
          <Cancel />
        </Route>
        <Route path="/bus-ticket" render={(params) => <BusTicket {...params} />} />
        <Route>
          <Notfound />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
};
