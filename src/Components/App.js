import React, { Component } from 'react';
import '../styles/App.css';
import AppContainer from '../containers/app_container';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2 className="main-border border-padding">To-Do</h2>
        <AppContainer />
      </div>
    );
  }
}

export default App;
