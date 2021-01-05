import React, { Component } from "react";
import { Container, Header, Segment, Input, List } from "semantic-ui-react";

export class Todo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todo: [{ message: "Todo 1" }, { message: "Todo 2" }],
    };
  }

  addTodo = () => {
    console.log("hello");
  };

  render() {
    return (
      <>
        <Segment textAlign="center" vertical>
          <Container>
            <Header as="h1" content="Grocery Todo List" />
          </Container>
        </Segment>
        <Segment vertical>
          <Input
            placeholder="Add todo list...."
            action={{
              content: "Add",
              onClick: () => this.addTodo(),
            }}
          />
          <List>
            {this.state.todo.map((todo, index) => (
              <div key={index} role="listitem" className="item">
                {todo.message}
              </div>
            ))}
          </List>
        </Segment>
      </>
    );
  }
}

export default Todo;
