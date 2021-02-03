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
      perks: [
        {
          multiplier: 1,
          numGraphicCards: 0,
          extraBitcoin: 0,
        },
      ],
      costs: [
        {
          multiplierCost: 20,
          graphicCardCost: 50,
          overclockCost: 100,
        },
      ],
    };
  }

  buyMultiplier = (event) => {
    if (this.state.score < 20) {
      return console.log("you do not have enough money");
    } else {
      let sub = this.state.score - 20;
      let newMultiplier = this.state.perks[0].multiplier + 0.1;

      let updatedPerks = [
        {
          multiplier: newMultiplier,
          numGraphicCards: this.state.perks[0].numGraphicCards,
          extraBitcoin: this.state.perks[0].extraBitcoin,
        },
      ];

      this.setState({ score: sub, perks: updatedPerks });
    }

    return console.log("hello");
  };

  addScore = (event) => {
    let mul = this.state.perks[0].multiplier;
    let extraBit = this.state.perks[0].extraBitcoin;

    let counter = mul * 1 + this.state.score;
    this.setState({ score: counter });
  };

  render() {
    let activePerks = this.state.perks[0];
    let costs = this.state.costs[0];

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
                  <Button onClick={this.buyMultiplier}>
                    Buy: ${costs.multiplierCost}
                  </Button>
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
                  <Button>Buy: ${costs.graphicCardCost}</Button>
                </List.Content>
                <List.Content>Graphic Card</List.Content>
                <List.Description>
                  Receive extra Bitcoin per 20 clicks
                </List.Description>
              </List.Item>
              <List.Item>
                <List.Content floated="right">
                  <Button>Configure: ${costs.overclockCost}</Button>
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
                  <Feed.Summary>
                    Multiplier: {activePerks.multiplier}x
                  </Feed.Summary>
                  <Feed.Summary>
                    Number of Graphic Cards: {activePerks.numGraphicCards}
                  </Feed.Summary>
                  <Feed.Summary>
                    Extra Bitcoin: {activePerks.extraBitcoin}
                  </Feed.Summary>
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
