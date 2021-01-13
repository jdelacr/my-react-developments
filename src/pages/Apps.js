import React, { Component } from "react";
import { Card, Container } from "semantic-ui-react";
import { Link } from "react-router-dom";
import "../styles/Main.scss";

export class Apps extends Component {
  render() {
    return (
      <div className="all-apps">
        <Container>
          <Card
            as={Link}
            to="/pages/Calculator"
            header="Calculator"
            description="A calculator that uses React.js as the framework to create the functions."
          />
          <Card
            as={Link}
            to="/pages/Todo"
            header="Todo"
            description="A todo application that features adding, editing, and deleting a task."
          />
        </Container>
      </div>
    );
  }
}

export default Apps;
