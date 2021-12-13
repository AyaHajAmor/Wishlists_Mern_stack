import React
, { useEffect } 
from 'react';
import { BrowserRouter as Router, Route, Switch  } from "react-router-dom";
import Product from "./components/product.component";
import Wishlist from "./components/wishlist.component";
import Welcome from "./components/welcome.component";
import { Provider } from "react-redux";
import store from "./store";
import Layout from "./Layout";
import { check_authenticated } from "./actions/auth_actions";
import AllRoutes from './routes/allRoutes';
import Login from './pages/Login';
import Register from './pages/Register';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  useEffect(() => {
    store.dispatch(check_authenticated());
    
  }, []);
  return (
    <Provider store={store}>
    <Router >
      <Layout>
          <Switch >
            <Route exact path="/welcome"   > <Welcome /></Route>
            <Route exact path="/product"   > <Product /></Route>
            <Route exact path="/wishlist"   > <Wishlist /></Route>
            <Route exact path="/login" ><Login /></Route>
            <Route exact path="/register"  ><Register /></Route>
            <Route component={AllRoutes} />
          </Switch>
        </Layout>
    </Router>
    </Provider>
  );
};

export default App;
