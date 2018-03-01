import React, { Component } from 'react';

class Checkbox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      checked: false
    };
  }

  handleCheck = () => {
    this.setState({ checked: !this.state.checked });
    // this.props.onCompletedClicked(this.state.checked);
    // if()
  };

  render() {
    let msg;
    if (this.state.checked) {
      msg = 'checked';
    } else {
      msg = 'unchecked';
    }
    return (
      <span>
        <input
          type="checkbox"
          onChange={this.handleCheck}
          defaultChecked={this.state.checked}
        />
        <p>{msg}</p>
      </span>
    );
  }
}

export default Checkbox;
