import React, { Component } from "react";
import Bitcoin from "../../styles/assets/bitcoin.png";
import "../../styles/apps/bitcoinClicker.scss";
import {
  Button,
  Container,
  Feed,
  FeedContent,
  Header,
  Image,
  List,
  Segment,
} from "semantic-ui-react";

let clickCounter = 0;

export class BitcoinClicker extends Component {
  constructor(props) {
    super(props);

    this.state = {
      score: 0,
      numberOfClicks: 20,
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
    let updateFeed = this.state.feed;

    if (this.state.score < 20) {
      updateFeed.push("you do not have enough Bitcoin");
      this.setState({ feed: updateFeed });
    } else {
      let sub = this.state.score - 20;
      let newMultiplier = this.state.perks[0].multiplier + 0.1;

      updateFeed.push(
        `You bought a multiplier, your multiplier is now ${newMultiplier.toFixed(
          2
        )}`
      );

      let updatedPerks = [
        {
          multiplier: newMultiplier,
          numGraphicCards: this.state.perks[0].numGraphicCards,
          extraBitcoin: this.state.perks[0].extraBitcoin,
        },
      ];

      this.setState({ score: sub, feed: updateFeed, perks: updatedPerks });
    }
  };

  buyGraphicCard = (event) => {
    let updateFeed = this.state.feed;

    if (this.state.score < 50) {
      updateFeed.push("you do not have enough Bitcoin");
      this.setState({ feed: updateFeed });
    } else {
      let extraBitcoin = this.state.perks[0].extraBitcoin + 10;
      let addGPU = this.state.perks[0].numGraphicCards + 1;
      let sub = this.state.score - 50;

      updateFeed.push(
        `You bought a a Graphic Card, you will now receive additional Bitcoin per ${this.state.numberOfClicks}`
      );

      let updatedPerks = [
        {
          multiplier: this.state.perks[0].multiplier,
          numGraphicCards: addGPU,
          extraBitcoin: extraBitcoin,
        },
      ];

      clickCounter = 0;

      this.setState({ score: sub, feed: updateFeed, perks: updatedPerks });
    }
  };

  buyOverclock = (event) => {
    let updateFeed = this.state.feed;

    if (this.state.score < 100) {
      updateFeed.push("you do not have enough Bitcoin");
      this.setState({ feed: updateFeed });
    } else {
      let newScore = this.state.score - 100;
      let newNumOfClicks = this.state.numberOfClicks - 1;

      updateFeed.push(
        `You have overclocked your GPU, your number of clicks has been reduced to ${newNumOfClicks}`
      );

      this.setState({
        score: newScore,
        feed: updateFeed,
        numberOfClicks: newNumOfClicks,
      });
    }
  };

  enableOCButton = () => {
    if (this.state.perks[0].numGraphicCards === 0) {
      return true;
    } else {
      return false;
    }
  };

  addScore = (event) => {
    let mul = this.state.perks[0].multiplier;
    let extraBit = this.state.perks[0].extraBitcoin;

    let counter = mul * 1 + this.state.score;
    this.setState({ score: counter });

    clickCounter += 1;

    if (clickCounter % this.state.numberOfClicks === 0) {
      let bonus = this.state.score + extraBit;

      this.setState({ score: bonus });
      console.log("bonus has been added");
    }
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
            <Header as="h3">Bitcoin: {this.state.score.toFixed(2)}</Header>
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
                  <Button onClick={this.buyGraphicCard}>
                    Buy: ${costs.graphicCardCost}
                  </Button>
                </List.Content>
                <List.Content>Graphic Card</List.Content>
                <List.Description>
                  Receive extra 10 Bitcoin per {this.state.numberOfClicks}{" "}
                  clicks
                </List.Description>
              </List.Item>
              <List.Item>
                <List.Content floated="right">
                  <Button
                    onClick={this.buyOverclock}
                    disabled={this.enableOCButton()}
                  >
                    Configure: ${costs.overclockCost}
                  </Button>
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
                    Multiplier: {activePerks.multiplier.toFixed(1)}x
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
                  <Feed.Summary>
                    {this.state.feed.map((feeds, index) => (
                      <Feed.Content key={index} content={feeds} />
                    ))}
                  </Feed.Summary>
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
