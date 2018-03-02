import React, { Component } from 'react';
import '../styles/App.css';
import AppContainer from '../containers/app_container';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="app-header">
          <img src={require('../styles/assets/GP-sign2.png')} alt="" />
          <h2 className="main-border border-padding">To-Do</h2>
        </div>
        <AppContainer />
      </div>
    );
  }
}

export default App;
