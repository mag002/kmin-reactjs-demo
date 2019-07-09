import React from "react";
import "./style.css";
class TaskInput extends React.Component {
  state = {
    id: "",
    title: "",
    status: false
  };
  onChangeHanlder = e => {
    this.setState({
      id: Date.now(),
      title: e.target.value
    });
  };
  onSubmit = e => {
    e.preventDefault();
    this.props.addTodo(this.state);
    this.setState({ id: Date.now(), title: "" });
  };
  render() {
    return (
      <form className="input-group mb-3" onSubmit={this.onSubmit}>
        <input
          type="text"
          className="form-control"
          onChange={this.onChangeHanlder}
          placeholder="Add here..."
          value={this.state.value}
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
