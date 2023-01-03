import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';
import MyComponent from './components/MyComponent';

class App extends Component {
  constructor(props) {
    super(props);

    this.onClickBtn = this.onClickBtn.bind(this);
  }

  onClickBtn() {
    console.log('Button has been clicked!')
  }

  render() {
    return (
      <div>
        <div>
        <MyComponent title="To Do List" onButtonClicked={this.onClickBtn} />
      </div>
      </div>
    );
  }
}

export default App;
