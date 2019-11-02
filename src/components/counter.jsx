import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0
  };

  /*styles-------------------------------------------------------------------- */

  styles = {
    fontSize: 10,
    fontWeight: "bold"
  };

  //events-------------------------------------
  handleIncrement = product => {
    console.log(product);
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>

        <button
          onClick={() => this.handleIncrement()}
          style={this.styles}
          className="btn btn-secondary btn-sm"
        >
          botun
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? <h4>nulica</h4> : count;
  }
}

export default Counter;
