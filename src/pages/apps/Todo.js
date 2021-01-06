import React, { Component } from "react";
import {
  Container,
  Header,
  Segment,
  Input,
  List,
  Icon,
  Divider,
  Button,
} from "semantic-ui-react";

export class Todo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newTodo: "",
      todo: [{ message: "Todo 1" }, { message: "Todo 2" }],
    };
  }

  handleInput = (event) => {
    this.setState({ newTodo: `${event.target.value}` });
  };

  addTodo = () => {
    let appendTodo = [{ message: `${this.state.newTodo}` }];
    let newList = this.state.todo.concat(appendTodo);
    this.setState({ todo: newList });
    console.log(newList);
  };

  deleteTodo = (event) => {
    let updatedList = this.state.todo.filter((item, index) => {
      return index !== parseInt(event.target.value);
    });

    this.setState({ todo: updatedList });
  };

  editTodo = () => {};

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
            onChange={this.handleInput}
          />
          <List>
            {this.state.todo.map((todo, index) => (
              <div key={index} role="listitem" className="item">
                {todo.message}
                <Button onClick={this.editTodo} value={index}>
                  <Icon name="edit" />
                </Button>
                <Button onClick={this.deleteTodo} value={index}>
                  <Icon name="trash" />
                </Button>
                <Divider />
              </div>
            ))}
          </List>
        </Segment>
      </>
    );
  }
}

export default Todo;
