import React, { Component } from "react";
import { Container, Header, Segment } from "semantic-ui-react";

export class Home extends Component {
  render() {
    return (
      <Segment textAlign="center" vertical style={{ minHeight: "500" }}>
        <Container text>
          <Header as="h1" content="Welcome to my Website!" />
        </Container>
      </Segment>
    );
  }
}

export default Home;
