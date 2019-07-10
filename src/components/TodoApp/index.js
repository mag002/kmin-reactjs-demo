import React from "react";
import TaskInput from "../TaskInput";
import TaskView from "../TaskView";
import TaskItem from "../TaskItem";
import FreeImg from "../../assets/img/swingvy_all_illustrations.png";
const NoTask = () => {
  return (
    <div>
      <img
        style={{ width: "50%", display: "block", margin: "auto" }}
        src={FreeImg}
      />
      <h3 style={{ textAlign: "center" }}>Today you are Free</h3>
    </div>
  );
};
class TodoApp extends React.Component {
  state = {
    todo: []
  };
  addTodo = newTodo => {
    let todos = this.state.todo;
    this.setState({ todo: [...todos, newTodo] });
  };
  removeTodo = (event, id) => {
    event.stopPropagation();
    let todos = this.state.todo.filter(todo => {
      return todo.id !== id;
    });
    this.setState({ todo: todos });
  };
  updateTodo = id => {
    let todos = this.state.todo;
    let index = todos.findIndex(todo => {
      return todo.id === id;
    });
    todos[index].status = !todos[index].status;
    let sorted = todos.sort((a, b) => {
      return a.status - b.status;
    });
    this.setState({ todo: sorted });
  };
  render() {
    const todo_list = this.state.todo.map((item, index) => {
      return (
        <TaskItem
          id={item.id}
          stt={index + 1}
          title={item.title}
          status={item.status}
          key={item.id}
          remove={event => this.removeTodo(event, item.id)}
          update={() => this.updateTodo(item.id)}
        />
      );
    });
    return (
      <div style={{ width: "100vw" }}>
        <div className="container">
          <h1>Todo App</h1>
          <TaskInput addTodo={this.addTodo} />
          <TaskView>
            {this.state.todo.length > 0 ? todo_list : <NoTask />}
          </TaskView>
        </div>
      </div>
    );
  }
}

export default TodoApp;
