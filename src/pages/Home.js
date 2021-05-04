import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Header,
  Segment,
  Grid,
  Button,
  Icon,
  Image,
  Card,
} from "semantic-ui-react";
import "../styles/Main.scss";
import calculator from "../styles/assets/calculator.png";
import todo from "../styles/assets/todo.png";
import bitcoin from "../styles/assets/bitcoin_card.png";

export class Home extends Component {
  render() {
    return (
      <>
        <Grid>
          <Grid.Column>
            <Segment textAlign="center" vertical className="home--hero">
              <Container text>
                <Header
                  as="h1"
                  content="Welcome to my Website!"
                  className="home--header"
                  inverted
                />
                <Header
                  as="h2"
                  content="This website contains small applications using React.js"
                  inverted
                />
                <Button primary size="huge" as={Link} to="/all-apps">
                  View All Apps
                  <Icon name="right arrow" />
                </Button>
              </Container>
            </Segment>
          </Grid.Column>
        </Grid>
        <Segment basic vertical textAlign="center">
          <Container text>
            <Header as="h1" content="React Applications" />
          </Container>
        </Segment>
        <Grid container columns={3} doubling stackable>
          <Grid.Column>
            <Segment basic>
              <Card>
                <Image src={calculator} wrapped ui={false} />
                <Card.Content>
                  <Card.Header>Calculator</Card.Header>
                  <Card.Description>
                    A basic calcualtor that uses React.js to add, subtract,
                    divide, and multiply.
                  </Card.Description>
                </Card.Content>
              </Card>
            </Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment basic>
              <Card>
                <Image src={todo} wrapped ui={false} />
                <Card.Content>
                  <Card.Header>Todo</Card.Header>
                  <Card.Description>
                    A todo application that enables user to add, edit, and
                    delete a todo list.
                  </Card.Description>
                </Card.Content>
              </Card>
            </Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment basic>
              <Card>
                <Image src={bitcoin} wrapped ui={false} />
                <Card.Content>
                  <Card.Header>Bitcoin Clicker</Card.Header>
                  <Card.Description>
                    A clicker game similar to Cookie clicker. Features a shop to
                    increase the amount of coins to collect.
                  </Card.Description>
                </Card.Content>
              </Card>
            </Segment>
          </Grid.Column>
        </Grid>
      </>
    );
  }
}

export default Home;
