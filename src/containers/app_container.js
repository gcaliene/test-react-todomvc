import React, { Component } from 'react';
import AddTodo from './add_todo';
import TodoList from './todo_list';

class AppContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
  }

  deleteTodoItem = deletedTodo => {
    const todos = this.state.todos.filter(todo => todo !== deletedTodo);
    this.setState({
      todos
    });
  };

  render() {
    return (
      <div>
        <AddTodo
          onAddTodoChange={todo => {
            this.setState({
              todos: [...this.state.todos, todo]
            });
          }}
        />
        <TodoList
          onDeleteClicked={this.deleteTodoItem}
          todos={this.state.todos}
        />
      </div>
    );
  }
}

export default AppContainer;
