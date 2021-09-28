import { Route, Switch } from "react-router-dom";
import { Rpool } from "../Pages/Rpool";
import { Navbar } from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/footer";

export const Routes = () => {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route path="/r_pool">
          <Rpool />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
};
