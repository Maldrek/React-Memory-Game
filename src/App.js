import React, { Component } from 'react';
import ImageCard from "./components/Card/Card";
import Wrapper from "./components/Wrapper/Wrapper";
import NavBar from "./components/Nav/Nav";
import Jumbotron from "./components/Jumbotron/Jumbotron";
import './App.css';
import cards from "./Images.json";

class App extends Component {
  // Setting this.state.cards to the cards json array
  state = {
    cards: cards,
    message: "Click an image to start!",
    topScore: 0,
    score: 0,
    unclicked: cards
  };

  shuffleArray = array => {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  handleClick = name => {
    const findChar = this.state.unclicked.find(item => item.name === name);

    if (findChar === undefined) {
      this.setState({
        message: "No! No! No no no no no NO NO NO NO NO! You've already clicked that one!",
        topScore: (this.state.score > this.state.topScore) ? this.state.score : this.state.topScore,
        score: 0,
        cards: cards,
        unclicked: cards
      });
    }
    else {
      const notClicked = this.state.unclicked.filter(item => item.name !== name);

      this.setState({
        message: "Mathematical!",
        score: this.state.score + 1,
        cards: cards,
        unclicked: notClicked
      });
    }
    this.shuffleArray(cards);

  };

  // Map over this.state.cards and render an ImageCard component for each card object
  render() {
    return (
      <div>
        <NavBar />
        <Jumbotron message={this.state.message} score={this.state.score} topScore={this.state.topScore} />
        <Wrapper>
          {this.state.cards.map(card => (
            <ImageCard
              handleClick={this.handleClick}
              image={card.image}
              id={card.id}
              key={card.id}
              name={card.name}
              score={this.state.score}
            />
          ))}
        </Wrapper>
      </div>
    );
  }
}

export default App;
