import React, { Component } from "react";
import { Card } from "semantic-ui-react";
import { Link } from "react-router-dom";

export class Apps extends Component {
  render() {
    return (
      <div>
        <Card
          as={Link}
          to="/pages/Calculator"
          header="Calculator"
          description="A calculator that uses React.js as the framework to create the functions"
        />
      </div>
    );
  }
}

export default Apps;
