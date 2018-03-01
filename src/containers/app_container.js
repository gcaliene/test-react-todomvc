import React, { Component } from 'react';

class AppContainer extends Component {
  construtor(props) {
    state(props);
    this.state = {
      todos: []
    };
  }
  render() {
    return (
      <div>
        <AddTodo />
        <TodoList />
      </div>
    );
  }
}

export default AppContainer;
