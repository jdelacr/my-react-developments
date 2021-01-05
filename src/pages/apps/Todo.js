import React, { Component } from "react";
import { Container, Header, Segment, Input } from "semantic-ui-react";

export class Todo extends Component {
  render() {
    return (
      <>
        <Segment textAlign="center" vertical>
          <Container>
            <Header as="h1" content="Grocery Todo List" />
          </Container>
        </Segment>
        <Segment vertical>
          <Input placeholder="Add todo list...."></Input>
        </Segment>
      </>
    );
  }
}

export default Todo;
