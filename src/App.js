import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';
import MyComponent from './components/MyComponent';

const ToDoList = [];
const ToDoItem = document.getElementById('ToDoItem');

class App extends Component {
  constructor(props) {
    super(props);

    this.onClickBtn = this.onClickBtn.bind(this);
  }

  onClickBtn() {
    ToDoList.push(ToDoItem);
    console.log(ToDoList);
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
