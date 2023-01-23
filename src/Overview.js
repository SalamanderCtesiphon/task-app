import React from "react";

const Overview = (props) => {
  const { tasks } = props;

  return (
    <ul>
      {tasks.map((task) => {
        return (
          <li className="listItem" key={task.id}>{tasks.indexOf(task) + 1}.{" "}{" "}{task.text}</li>
        )
        
      })}
    </ul>
  );
};

export default Overview;