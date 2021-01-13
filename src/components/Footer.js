import React, { Component } from "react";
import { Container, Divider, List, Segment } from "semantic-ui-react";
import { Link } from "react-router-dom";
import "../styles/components/footer.scss";

export class Footer extends Component {
  render() {
    return (
      <Segment vertical className="footer">
        <Container textAlign="center">
          <Divider />
          <List link horizontal divided size="small">
            <List.Item as={Link} to="/">
              Home
            </List.Item>
            <List.Item as={Link} to="/about">
              About
            </List.Item>
            <List.Item as={Link} to="/all-apps">
              Applications
            </List.Item>
          </List>
        </Container>
      </Segment>
    );
  }
}

export default Footer;
