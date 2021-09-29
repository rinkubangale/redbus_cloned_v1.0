import { Route, Switch } from "react-router-dom";
import { Rpool } from "../Pages/Rpool";
import { Navbar } from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/footer";
import { HomePage } from "../Pages/HomePage";
import { useState } from 'react';

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
      </Switch>
      <Footer />
    </div>
  );
};
