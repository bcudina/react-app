import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    imageUrl: "https://picsum.photos/50",
    tags: ["tag1", "tag2", "tag3"]
  };

  /*styles-------------------------------------------------------------------- */

  styles = {
    fontSize: 10,
    fontWeight: "bold"
  };

  renderTags() {
    if (this.state.tags.length === 0) return <p>There are no tags !</p>;

    return (
      <ul>
        {this.state.tags.map(tag => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }

  //events-------------------------------------
  handleIncrement = product => {
    console.log(product);
    this.setState({ count: this.state.count + 1 });
  };

  /*render-------------------------------------------------------------------- */
  render() {
    return (
      <div>
        <h1>Hello</h1>
        <img src={this.state.imageUrl} alt="" />

        {/* ---------------------------------------------------- */}
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.handleIncrement()}
          style={this.styles}
          className="btn btn-secondary btn-sm"
        >
          botun
        </button>

        {/* ---------------------------------------------------- */}

        <button className="btn btn-secondary btn-sm">Proba 1</button>
        <button style={{ fontSize: 20 }} className="btn btn-secondary btn-sm">
          Proba 2
        </button>

        {/*----------------------------------------------- */}
        {this.renderTags()}
        {/*----------------------------------------------- */}
      </div>
    );
  }

  /*funkcije-----------------------------------------------------------------------*/

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
