import React from "react";
import "./style.css";
import CloseIcon from "../../assets/icon/close.js";
const TaskItem = props => {
  return (
    <div className={`${props.done ? "done" : ""} task-item`}>
      <p style={{ textDecoration: props.done ? "line-through" : "" }}>
        {props.stt} . {props.title}
      </p>
      <button className={"btn "} onClick={props.remove}>
        <CloseIcon />
      </button>
    </div>
  );
};

export default TaskItem;
