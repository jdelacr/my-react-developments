import React, { Component } from "react";
import Bitcoin from "../../styles/assets/bitcoin.png";
import "../../styles/apps/bitcoinClicker.scss";
import {
  Button,
  Container,
  Feed,
  Header,
  Image,
  List,
  Segment,
} from "semantic-ui-react";

export class BitcoinClicker extends Component {
  constructor(props) {
    super(props);

    this.state = {
      score: 0,
      feed: [],
      perks: [],
      shop: [],
      costs: [
        {
          multiplier: 0,
          graphicCard: 0,
          overclock: 0,
        },
      ],
    };
  }

  buyMultiplier = (event) => {
    if (this.state.score < 20) {
      return console.log("you do not have enough money");
    }

    return console.log("hello");
  };

  addScore = (event) => {
    this.state.score += 1;
    this.setState({ score: this.state.score });
  };

  render() {
    return (
      <div className="bitcoin">
        <Segment basic vertical>
          <Container textAlign="center">
            <Header as="h1" content="Bitcoin Clicker" />
          </Container>
          <Container>
            <Image
              src={Bitcoin}
              wrapped
              ui
              centered
              fluid
              className="bitcoin--logo"
              onClick={this.addScore}
            />
            <Header as="h3">Bitcoin: {this.state.score}</Header>
          </Container>
          <Container>
            <Header as="h3" content="Shop:" />
            <List divided vertical="center">
              <List.Item>
                <List.Content floated="right">
                  <Button onClick={this.buyMultiplier}>Buy: $20</Button>
                </List.Content>
                <List.Content>
                  Multiplier
                  <List.Description>
                    Multiplies the amount of Bitcoin you receive per click by .1
                  </List.Description>
                </List.Content>
              </List.Item>
              <List.Item>
                <List.Content floated="right">
                  <Button>Buy: $100</Button>
                </List.Content>
                <List.Content>Graphic Card</List.Content>
                <List.Description>
                  Receive extra Bitcoin per 20 clicks
                </List.Description>
              </List.Item>
              <List.Item>
                <List.Content floated="right">
                  <Button>Configure: $300</Button>
                </List.Content>
                <List.Content>Overclock</List.Content>
                <List.Description>
                  Lower the amount of clicks by one from the Graphic card to
                  receive extra Bitcoin
                </List.Description>
              </List.Item>
            </List>
          </Container>
          <Container>
            <Header as="h3" content="Perks" />
            <Feed>
              <Feed.Event>
                <Feed.Content>
                  <Feed.Summary>Multiplier: 1x</Feed.Summary>
                  <Feed.Summary>Number of Graphic Cards: 0</Feed.Summary>
                  <Feed.Summary>Extra Bitcoin: 0</Feed.Summary>
                </Feed.Content>
              </Feed.Event>
            </Feed>
          </Container>
          <Container>
            <Header as="h3" content="Feed:" />
            <Feed>
              <Feed.Event>
                <Feed.Content>
                  <Feed.Summary></Feed.Summary>
                </Feed.Content>
              </Feed.Event>
            </Feed>
          </Container>
        </Segment>
      </div>
    );
  }
}

export default BitcoinClicker;
