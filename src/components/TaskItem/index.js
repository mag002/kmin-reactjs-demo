import React from "react";
import "./style.css";
import TrashIco from "../../assets/icon/ic.js";
const TaskItem = props => {
  return (
    <div className={`${props.done ? "done" : ""} task-item`}>
      <p style={{ textDecoration: props.done ? "line-through" : "" }}>
        {props.stt} . {props.title}
      </p>
      <button className={"btn btn-danger"}>
        <TrashIco />
      </button>
    </div>
  );
};

export default TaskItem;
