import React from "react";
import TaskInput from "../TaskInput";
import TaskView from "../TaskView";
import TaskItem from "../TaskItem";
class TodoApp extends React.Component {
  state = {
    todo: []
  };
  addItemHandler = event => {
    console.log(event);
    if (event.keyCode == 13) {
      const preTodo = this.state.todo;
      preTodo.push({
        title: event.target.value,
        id: Date.now(),
        done: false
      });
      this.setState({ todo: preTodo });
    }
  };
  render() {
    return (
      <div className="container">
        <h1>Todo App</h1>
        <TaskInput add={this.addItemHandler} />
        <TaskView>
          {this.state.todo.length > 0 ? (
            this.state.todo.map((item, index) => {
              return (
                <TaskItem
                  id={item.id}
                  stt={index + 1}
                  title={item.title}
                  done={item.done}
                  key={item.id}
                />
              );
            })
          ) : (
            <h1>Nothing to do here</h1>
          )}
        </TaskView>
      </div>
    );
  }
}

export default TodoApp;
