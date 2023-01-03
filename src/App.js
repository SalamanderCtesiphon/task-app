import React, { Component } from 'react';
import MyComponent from './components/MyComponent';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      task: { text: ''},
      tasks: [],
    };
  }

  handleChange = (e) => {
    this.setState({
      task: {
        text: e.target.value,
      }
    });
  };

  onSubmitTask = (e) => {
    e.preventDefault();
    this.setState({
      tasks: this.state.tasks.concat(this.state.task),
      task: { text: ''},
    });
  };
  

  render() {
    const { task, tasks } = this.state;

    return (
      <div>
        <h1>To Do List</h1>
        <form onSubmit={this.onSubmitTask}>
          <label htmlFor="taskInput">Enter task</label><br></br>
          <input
            onChange={this.handleChange}
            value={task.text}
            type="text" 
            id="taskInput"
          /><br></br>
          <button type="submit">
            Add Task
          </button>
        </form>
      </div>
    );
  }
}

export default App;
