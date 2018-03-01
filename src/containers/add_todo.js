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
    console.log(event.target.value);
    this.setState({ todoTitle: event.target.value }); //"this" needs to bind!!!!
  }

  onFormSubmit(event) {
    event.preventDefault();
    console.log(this.state.todoTitle);
    this.props.onAddTodoChange(this.state.todoTitle);
    //Clear input after sumbitting
    this.setState({ todoTitle: '' });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <input
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
