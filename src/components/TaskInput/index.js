import React from "react";
import "./style.css";
class TaskInput extends React.Component {
  state = {
    title: ""
  };
  changeHandler = event => {
    this.setState({ title: event.target.value });
  };
  submitHandler = event => {
    event.preventDefault();
    this.props.add(this.state.title);
  };
  render() {
    return (
      <form className="input-group mb-3" onSubmit={this.submitHandler}>
        <input
          type="text"
          className="form-control"
          placeholder="Add here..."
          value={this.state.title}
          onChange={this.changeHandler}
        />
        <div className="input-group-append">
          <button type="submit" className="btn btn-primary " id="basic-addon2">
            Add
          </button>
        </div>
      </form>
    );
  }
}

export default TaskInput;
