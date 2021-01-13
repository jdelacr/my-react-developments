import React, { Component } from "react";
import { Container, Header, Segment } from "semantic-ui-react";
import "../styles/Main.scss";

export class About extends Component {
  render() {
    return (
      <div className="about">
        <Container>
          <Segment vertical textAlign="center">
            <Header as="h1" content="About this website" />
          </Segment>
          <Segment vertical>
            <p>
              This website was created for the purpose of showcasing the web
              applications I have created using React.js. The applications can
              range from a small to large application, depending on what I am
              developing. This website is currently using Semantic UI as a CSS
              framework to style the website and the application.
            </p>
          </Segment>
        </Container>
      </div>
    );
  }
}

export default About;
