import React from 'react';

export default class TodoListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      completed: false
    };
    this.handleCheck = this.handleCheck.bind(this);
  }

  handleCheck = () => {
    this.setState({ completed: !this.state.completed });
  };

  render() {
    let msg;
    if (this.state.completed) {
      msg = (
        <div className="main-border todo-list_item">
          <button onClick={() => this.handleCheck()} />
          <span className="crossed-out">{this.props.todo} </span>
          <button onClick={() => this.props.onDeleteClicked(this.props.todo)}>
            X
          </button>
        </div>
      );
    } else {
      msg = (
        <div className="main-border todo-list_item">
          <button onClick={() => this.handleCheck()} />
          <span className="not-crossed-out">{this.props.todo} </span>
          <button onClick={() => this.props.onDeleteClicked(this.props.todo)}>
            X
          </button>
        </div>
      );
    }
    return <div>{msg}</div>;
  }
}
