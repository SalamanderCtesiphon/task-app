import React, { Component } from "react";

class Overview extends Component {
  render() {
    const { tasks } = this.props;

    return (
      <ul>
        {tasks.map((task) => {
          return (
            <li className="listItem" key={task.id}>{tasks.indexOf(task) + 1}.{" "}{" "}{task.text}<button onClick={this.props.delTask.bind(this, task.id)}>Remove</button></li>
          )
          
        })}
      </ul>
    );
  }
};

export default Overview;