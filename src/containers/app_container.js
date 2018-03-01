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
  render() {
    return (
      <div>
        <AddTodo
          onAddTodoChange={todo => {
            this.setState({
              todos: [...this.state.todos, todo]
            });
            console.log(this.state);
          }}
        />
        <TodoList todos={this.state.todos} />
      </div>
    );
  }
}

export default AppContainer;
