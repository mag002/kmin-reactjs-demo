import React from "react";
import "./style.css";
const TaskInput = props => {
  return (
    <div className="input-group mb-3">
      <input
        type="text"
        className="form-control"
        onKeyDown={props.add}
        placeholder="Add here..."
      />
      <div className="input-group-append">
        <button className="btn btn-primary " id="basic-addon2">
          Add
        </button>
      </div>
    </div>
  );
};

export default TaskInput;
