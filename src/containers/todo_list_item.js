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
        <li className="main-border todo-list_item completed">
          <button className="btn-left btn" onClick={() => this.handleCheck()}>
            <i className="fa fa-undo" />
          </button>
          <span className="crossed-out">{this.props.todo}</span>
          <button
            className="btn-right btn destroy"
            onClick={() => this.props.onDeleteClicked(this.props.todo)}
          >
            <strong>X</strong>
          </button>
        </li>
      );
    } else {
      msg = (
        <li className="main-border todo-list_item">
          <button className="btn-left btn" onClick={() => this.handleCheck()}>
            &#10004;
          </button>
          <span className="not-crossed-out">{this.props.todo}</span>
          <button
            className="btn-right btn destroy"
            onClick={() => this.props.onDeleteClicked(this.props.todo)}
          >
            <strong>X</strong>
          </button>
        </li>
      );
    }
    return <div>{msg}</div>;
  }
}
