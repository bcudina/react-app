import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.value
  };

  /*styles-------------------------------------------------------------------- */

  styles = {
    fontSize: 10,
    fontWeight: "bold"
  };

  //events-------------------------------------
  handleIncrement = product => {
    console.log(product);
    this.setState({ value: this.state.value + 1 });
  };

  render() {
    console.log("props", this.props);

    return (
      <div>
        {/*{this.props.children}*/}
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
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value: count } = this.state;
    return count === 0 ? <h4>nulica</h4> : count;
  }
}

export default Counter;
