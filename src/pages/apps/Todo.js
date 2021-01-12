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
import "../../styles/apps/todo.scss";

export class Todo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newTodo: "",
      updateTodo: "",
      todo: [
        { message: "Todo 1", editText: false },
        { message: "Todo 2", editText: false },
      ],
    };

    this.editTodo = this.editTodo.bind(this);
    this.updateTodo = this.updateTodo.bind(this);
  }

  handleInput = (event) => {
    this.setState({ newTodo: `${event.target.value}` });
  };

  handleChange = (event) => {
    this.setState({ updateTodo: `${event.target.value}` });
  };

  addTodo = () => {
    let appendTodo = [{ message: `${this.state.newTodo}`, editText: false }];
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

  editTodo = (event) => {
    const todoIndex = this.state.todo.findIndex(
      (item, index) => index === parseInt(event.target.value)
    );
    let newTodo = [...this.state.todo];

    newTodo[todoIndex] = {
      ...newTodo[todoIndex],
      editText: !newTodo[todoIndex].editText,
    };

    this.setState({ todo: newTodo });
  };

  updateTodo = (i) => {
    const updateIndex = this.state.todo.findIndex((item, index) => index === i);
    let updatedTodo = [...this.state.todo];

    updatedTodo[updateIndex] = {
      ...updatedTodo[updateIndex],
      message: `${this.state.updateTodo}`,
      editText: !updatedTodo[updateIndex].editText,
    };

    this.setState({ todo: updatedTodo });
    console.log(this.state.todo);
  };

  render() {
    return (
      <>
        <Container className="todo">
          <Segment textAlign="center" vertical>
            <Container>
              <Header as="h1" content="Grocery Todo List" />
            </Container>
          </Segment>
          <Segment basic textAlign="center">
            <Segment.Inline>
              <div class="ui action input">
                <input
                  type="text"
                  placeholder="Add todo list...."
                  onChange={this.handleInput}
                />
                <button class="ui button" onClick={this.addTodo}>
                  Add
                </button>
              </div>
            </Segment.Inline>
          </Segment>
          {this.state.todo.map((todo, index) => (
            <div>
              <div key={index} className="ui stackable two column grid">
                <div className="ten wide column">
                  {todo.editText ? (
                    <div className="ui segment basic">
                      <Input
                        transparent
                        placeholder={todo.message}
                        action={{
                          content: "Update",
                          onClick: () => this.updateTodo(index),
                        }}
                        onChange={this.handleChange}
                      />
                    </div>
                  ) : (
                    <div className="ui segment basic">{todo.message}</div>
                  )}
                </div>

                <div className="six wide column">
                  <div className="ui segment basic">
                    <Button
                      onClick={this.editTodo}
                      value={index}
                      className="content"
                    >
                      <Icon name="edit" />
                    </Button>
                    <Button
                      onClick={this.deleteTodo}
                      value={index}
                      className="content"
                    >
                      <Icon name="trash" />
                    </Button>
                  </div>
                </div>
              </div>
              <Divider />
            </div>
          ))}
        </Container>
      </>
    );
  }
}

export default Todo;
