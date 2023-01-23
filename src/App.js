import React, { Component } from 'react';
import uniqid from "uniqid";
import Overview from './Overview';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      task: {
        text: '',
        id: uniqid()
      },
      tasks: [],
    };
  }

  handleChange = (e) => {
    this.setState({
      task: {
        text: e.target.value,
        id: this.state.task.id,
      },
    });
  };

  onSubmitTask = (e) => {
    e.preventDefault();
    this.setState({
      tasks: this.state.tasks.concat(this.state.task),
      task: {
        text: '', 
        id: uniqid()
      },
    });
  };

  delTask = (id) => {
    this.setState({
      tasks: [...this.state.tasks.filter(task => task.id !== id)]
    })
  }
 
  render() {
    const { task, tasks } = this.state;

    return (
      <div className='App'>
        <div><h1>Task App</h1></div>
        <form onSubmit={this.onSubmitTask}>
          <label htmlFor='taskInput'>Enter Task: </label>
          <input 
            onChange={this.handleChange}
            value={task.text}
            type="text" 
            id="taskInput">
          </input>
          <button type='submit'>Submit</button>
        </form>
        <div className='list'>
        <Overview tasks={tasks}
        delTask={this.delTask}/>
        </div>
      </div>
    )
  }
  
}

export default App;
