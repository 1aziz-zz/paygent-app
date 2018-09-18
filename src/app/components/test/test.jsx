import React, { Component } from "react";

class Test extends Component {
  state = {
    count: 0
  };

  render() {
    return (
      <div>
        <button className="btn btn-primary" onClick={ () => this.nameHandler(2)}>
          Click me: {this.state.count}
        </button>
      </div>
    );
  }
  nameHandler = num => {
    this.setState({ count: this.state.count + num });
  };
}
export default Test;

//// Conditions / checks

/*   getPerson() {
    const { person } = this.state;
    return person.name === "" ? "Person not found" : person.name;
  } */

// NOTE: in JS: true && false -> false OR ture && "Hi" && 1 -> 1.
// Example: <p>TEST Component: {person.name === "" && "Person not found"}{person.name}</p>

///_____________________________________________________

//// Using Arrow functions binds the function automatically to the
///  new changed state. No binding method in the constructur is needed.

/* incremnetFontsize = () => {
  this.setState({ count: this.state.count + 1 });
}; */

///_____________________________________________________

//// Using parameters for arrow functions

/*  .......onClick={ () => this.nameHandler(2)}.......

nameHandler = num => {
  this.setState({ count: this.state.count + num });
};
 */