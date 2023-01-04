import React from "react";

const Overview = (props) => {
  const { tasks } = props;

  return (
    <ul>
      {tasks.map((task) => {
        return (
          <div>
            <li key={task.id}>
              {task.number}. {task.text}
              <button onClick={task.removeTask}>Delete</button>
            </li>

          </div>
        )
      })}
    </ul>
  );
};

export default Overview;