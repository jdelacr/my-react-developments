import React, { Component } from "react";
import Layout from "./Layout/Layout";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";

export class Routes extends Component {
  render() {
    return (
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/About" component={About} />
        </Switch>
      </Layout>
    );
  }
}

export default Routes;
