import React from "react";
import "./App.css";
import Layout from "./components/Layout/Layout";
import BurgerBuilder from "./containners/BurgerBuilder/BurgerBuilder";
import "bootstrap/dist/css/bootstrap.min.css";
import Checkout from "./containners/Checkout/Checkout";
import { Route } from "react-router-dom";
import Orders from "./containners/Orders/Orders";

function App() {
  return (
    <Layout>
      {/* <BurgerBuilder />
      <Checkout /> */}

      <Route path="/checkout" component={Checkout} />
      <Route path="/orders" component={Orders} />
      <Route path="/" exact component={BurgerBuilder} />
    </Layout>
  );
}

export default App;
