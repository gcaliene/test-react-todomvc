import React, { Component } from 'react';

class AddTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoTitle: ''
    };
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event) {
    this.setState({ todoTitle: event.target.value });
  }

  onFormSubmit(event) {
    event.preventDefault();
    this.props.onAddTodoChange(this.state.todoTitle);
    this.setState({ todoTitle: '' });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <input
            required
            type="text"
            autoFocus
            placeholder="New"
            className="form-control"
            value={this.state.todoTitle}
            onChange={this.onInputChange}
          />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default AddTodo;
