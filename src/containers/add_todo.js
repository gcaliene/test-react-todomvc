import React, { Component } from 'react';

class AddTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoTitle: ''
    };
  }

  render() {
    return (
      <div>
        <form action="">
          <input type="text" />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default AddTodo;
