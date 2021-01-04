import React, { Component } from "react";
import { Container, Menu, Dropdown } from "semantic-ui-react";
import { Link } from "react-router-dom";

export class menu extends Component {
  render() {
    return (
      <Menu fixed="top" inverted>
        <Container>
          <Menu.Item as="a" header>
            React Apps
          </Menu.Item>
          <Menu.Item as={Link} to="/">
            Home
          </Menu.Item>
          <Menu.Item as={Link} to="/about">
            About
          </Menu.Item>
          <Dropdown item simple text="Applications">
            <Dropdown.Menu>
              <Dropdown.Item as={Link} to="/all-apps">
                All Apps
              </Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Header>Applications</Dropdown.Header>
              <Dropdown.Item as={Link} to="/pages/Calculator">
                Calculator
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Container>
      </Menu>
    );
  }
}

export default menu;
