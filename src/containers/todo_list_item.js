import React from 'react';
// import '../styles/App.css'

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
        <div>
          <input
            type="checkbox"
            onChange={this.handleCheck}
            defaultChecked={this.state.completed}
          />
          <span className="crossed-out">{this.props.todo} </span>
          <button onClick={() => this.props.onDeleteClicked(this.props.todo)}>
            X
          </button>
          <p>{msg}</p>
        </div>
      );
    } else {
      msg = (
        <div>
          <input
            type="checkbox"
            onChange={this.handleCheck}
            defaultChecked={this.state.completed}
          />
          <span className="not-crossed-out">{this.props.todo} </span>
          <button onClick={() => this.props.onDeleteClicked(this.props.todo)}>
            X
          </button>
          <p>{msg}</p>
        </div>
      );
    }
    return <div>{msg}</div>;
  }
}
