import React, { Component } from "react";
import Congrats from "./Congrats";
import GuessedWords from "./GuessedWords";

class App extends Component {
  state = {
    success: true,
    guessedWords: [{guessedWord: 'train', letterMatchCount: 3}]
  };

  render() {
    return (
      <div className="container">
        <h1 className='heading'>Jotto</h1>
        <Congrats success={this.state.success} />
        <GuessedWords guessedWords={this.state.guessedWords} />
      </div>
    );
  }
}

export default App;
