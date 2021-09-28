import { Route, Switch } from "react-router-dom";
import { Rpool } from "../Pages/Rpool";
import { Navbar } from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/footer";
import { HomePage } from "../Pages/HomePage";

export const Routes = () => {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/r_pool">
          <Rpool />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
};
