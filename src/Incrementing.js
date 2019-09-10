import React, { Component } from "react";

class Incrementing extends Component {
  state = {
    counter: 0
  };

  componentDidMount() {
    //this.incrementTotal();
  }

  incrementTotal = () => {
    this.setState(prevState => {
      return { counter: prevState.counter + 1 };
    });
  };

  incrementTotalAlternative() {
    this.setState(prevState => {
      return { counter: prevState.counter + 1 };
    });
  };

  decrementTotal = () => {
    this.setState(prevState => {
      return { counter: prevState.counter - 1 };
    });
  };

  render() {
    return (
      <div className="increment-wrapper">
        <h3>Test</h3>
        <div data-test="component-counter" className="counter-wrapper">{this.state.counter}</div>
        <button onClick={this.incrementTotal}>Increment</button>
        <button onClick={this.decrementTotal}>Decrement</button>
      </div>
    );
  }
}

export default Incrementing;
