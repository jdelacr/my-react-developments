import React, { Component } from "react";
import { Container, List, Segment } from "semantic-ui-react";
import { Link } from "react-router-dom";

export class Footer extends Component {
  render() {
    return (
      <Segment vertical>
        <Container textAlign="center">
          <List link horizontal divided size="small">
            <List.Item as={Link} to="/">
              Home
            </List.Item>
            <List.Item as={Link} to="/About">
              About
            </List.Item>
            <List.Item as="a">Link</List.Item>
            <List.Item as="a">Link</List.Item>
          </List>
        </Container>
      </Segment>
    );
  }
}

export default Footer;
