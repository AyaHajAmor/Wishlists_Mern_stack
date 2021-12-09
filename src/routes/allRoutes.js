import React from "react";
import { Route, Switch } from "react-router-dom";
//Private Route
import PrivateRoute from "./PrivateRoutes";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Product from "../components/product.component";
// import Signup from "../../pages/Signup";
// import Users from "../../pages/Users";
// import Activated from "../../pages/Activated";

//All the routes file
const AllRoutes = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        {/* <Route exact path="/users" component={Users} />
        <Route exact path="/activated" component={Activated} /> */}
        <PrivateRoute exact path="/sample" component={Product} />
      </Switch>
    </div>
  );
};

export default AllRoutes;