import React, { Component } from 'react';
import uniqid from "uniqid";
import Overview from './components/Overview';


class App extends Component {
  constructor() {
    super();

    this.state = {
      task: {
        number: 0,
        text: '',
        id: uniqid()
      },
      tasks: [],
      
    };
  }

  handleChange = (e) => {
    this.setState({
      task: {
        number: this.state.task.number + 1,
        text: e.target.value,
        id: this.state.task.id,
      }
    });
  };

  onSubmitTask = (e) => {
    e.preventDefault();
    this.setState({
      tasks: this.state.tasks.concat(this.state.task),
      task: { 
        number: this.state.task.number,
        text: '',
        id: uniqid()
      },
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
        <Overview tasks={tasks} />
      </div>
    );
  }
}

export default App;
