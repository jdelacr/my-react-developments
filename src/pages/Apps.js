import React, { Component } from "react";
import { Card, Container, Header, Segment } from "semantic-ui-react";
import { Link } from "react-router-dom";
import "../styles/Main.scss";

export class Apps extends Component {
  render() {
    return (
      <div className="all-apps">
        <Container>
          <Segment vertical textAlign="center">
            <Header as="h1" content="All Applications" />
          </Segment>
          <Segment vertical>
            <Card.Group itemsPerRow={4}>
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
              <Card
                as={Link}
                to="/pages/BitcoinClicker"
                header="Bitcoin Clicker"
                description="A clicker game similar to Cookie clicker. Features a shop to increase the amount of coins to collect."
              />
            </Card.Group>
          </Segment>
        </Container>
      </div>
    );
  }
}

export default Apps;
