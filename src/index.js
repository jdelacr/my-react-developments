import React from "react";
import ReactDOM from "react-dom";
import Home from "./Home";
import Layout from "./Layout/Layout";
import "semantic-ui-css/semantic.min.css";

ReactDOM.render(
  <React.StrictMode>
    <Layout>
      <Home />
    </Layout>
  </React.StrictMode>,
  document.getElementById("root")
);
