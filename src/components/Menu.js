import React, { Component } from "react";
import { Container, Menu, Dropdown } from "semantic-ui-react";

export class menu extends Component {
  render() {
    return (
      <Menu fixed="top" inverted>
        <Container>
          <Menu.Item as="a" header>
            React Apps
          </Menu.Item>
          <Menu.Item as="a">Home</Menu.Item>

          <Dropdown item simple text="Applications">
            <Dropdown.Menu>
              <Dropdown.Item>Calculator</Dropdown.Item>
              <Dropdown.Item>List Item</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Header>Header Item</Dropdown.Header>
              <Dropdown.Item>
                <i className="dropdown icon" />
                <span className="text">Submenu</span>
                <Dropdown.Menu>
                  <Dropdown.Item>List Item</Dropdown.Item>
                  <Dropdown.Item>List Item</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown.Item>
              <Dropdown.Item>List Item</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Menu.Item as="a">About</Menu.Item>
        </Container>
      </Menu>
    );
  }
}

export default menu;
