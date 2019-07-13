import React from "react";
import TaskInput from "../TaskInput";
import TaskView from "../TaskView";
import TaskItem from "../TaskItem";
class TodoApp extends React.Component {
  state = {
    todo: [{ id: 1, title: "Test", done: false }]
  };
  addItemHandler = inputTitle => {
    const newTask = { id: Date.now(), title: inputTitle, done: false };
    const newTodo = [...this.state.todo, newTask];
    this.setState({ todo: newTodo });
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
