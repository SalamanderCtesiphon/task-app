import React, { Component } from 'react';

class MyComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <input></input>
        <button onClick={this.props.onButtonClicked}>Submit</button>
      </div>
    );
  }
}

export default MyComponent;