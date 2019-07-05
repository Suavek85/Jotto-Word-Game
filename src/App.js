import React, { Component } from "react";
import Congrats from "./Congrats";

class App extends Component {
  state = {
    success: false
  };

  render() {
    return (
      <div>
        <Congrats success={this.state.success} />
      </div>
    );
  }
}

export default App;
