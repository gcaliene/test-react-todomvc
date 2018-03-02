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
        <li className="main-border todo-list_item">
          <button className="btn-left btn" onClick={() => this.handleCheck()}>
            Undo
          </button>
          <span className="crossed-out">{this.props.todo} </span>
          <button
            className="btn-right btn"
            onClick={() => this.props.onDeleteClicked(this.props.todo)}
          >
            X
          </button>
        </li>
      );
    } else {
      msg = (
        <li className="main-border todo-list_item">
          <button className="btn-left btn" onClick={() => this.handleCheck()}>
            &#10004;
          </button>
          <span className="not-crossed-out">{this.props.todo} </span>
          <button
            className="btn-right btn"
            onClick={() => this.props.onDeleteClicked(this.props.todo)}
          >
            X
          </button>
        </li>
      );
    }
    return <div>{msg}</div>;
  }
}
