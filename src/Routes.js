import React, { Component } from "react";
import Layout from "./Layout/Layout";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Apps from "./pages/Apps";
import Calculator from "./pages/apps/Calculator";
import Todo from "./pages/apps/Todo";
import BitcoinClicker from "./pages/apps/BitcoinClicker";

export class Routes extends Component {
  render() {
    return (
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/all-apps" component={Apps} />
          <Route exact path="/pages/Calculator" component={Calculator} />
          <Route exact path="/pages/Todo" component={Todo} />
          <Route
            exact
            path="/pages/BitcoinClicker"
            component={BitcoinClicker}
          />
        </Switch>
      </Layout>
    );
  }
}

export default Routes;
