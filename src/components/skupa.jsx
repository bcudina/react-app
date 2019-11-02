import React, { Component } from "react";
import Counter from "./counter";

class Skupa extends Component {
  state = {};
  render() {
    return (
      <div>
        <Counter />
        <Counter />
        <Counter />
        <Counter />
      </div>
    );
  }
}

export default Skupa;
