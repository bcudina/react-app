import React, { Component } from "react";
import Counter from "./counter";

class Skupa extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 2 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };
  render() {
    return (
      <div>
        {this.state.counters.map(brojevi => (
          <Counter key={brojevi.id} value={brojevi.value}>
            {/*<h4>nesto # {brojevi.id}</h4>*/}
          </Counter>
        ))}
      </div>
    );
  }
}

export default Skupa;
