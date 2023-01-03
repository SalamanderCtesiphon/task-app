import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';
import MyComponent from './components/MyComponent';

const ToDoList = [];

class App extends Component {
  constructor(props) {
    super(props);

    this.onClickBtn = this.onClickBtn.bind(this);
  }

  onClickBtn() {

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
