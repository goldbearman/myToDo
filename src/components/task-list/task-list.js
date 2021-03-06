import React from "react";
import PropTypes from "prop-types";
// import TaskHook from "../task/task-hook";
import Task from "../task/task";

import "./task-list.css";

const TaskList = ({ todos, onDeleted, onToggleDone }) => {
  const elements = todos.map((item) => {
    const { id } = item;

    return (
      <Task
        key={id}
        {...item}
        onDeleleted={() => onDeleted(id)}
        onToggleDone={() => onToggleDone(id)}
      />
    );
  });

  return <ul className="todo-list">{elements}</ul>;
};

TaskList.defaultProps = {};

TaskList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
  onDeleted: PropTypes.func,
  onToggleDone: PropTypes.func,
};

export default TaskList;
