import React, { Component } from "react";

import "./new-tast-form.css";

export default class NewTaskForm extends Component {
  state = {
    label: "",
  };

  onLabelChange = (e) => {
    console.log("onLabelChange");
    this.setState({
      label: e.target.value,
    });
  };

  onSubmit = (e) => {
    console.log("onSubmit");
    e.preventDefault();
    if (this.state.label !== undefined && this.state.label.trim() !== "") {
      console.log(this.state.label);
      // eslint-disable-next-line react/prop-types
      this.props.onItemAdded(this.state.label);
    }
    this.setState({
      label: "",
    });
  };

  render() {
    return (
      <form className="task-form" onSubmit={this.onSubmit}>
        <input
          type="text"
          className="new-todo task"
          placeholder="Task"
          autoFocus
          onChange={this.onLabelChange}
          // value={this.state.label}
        />
      </form>
    );
  }
}
