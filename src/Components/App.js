import React, { Component } from 'react';
import '../styles/App.css';
import AppContainer from '../containers/app_container';

class App extends Component {
  render() {
    return (
      <div className="">
        <div className="app-header">
          <img
            src={require('../styles/assets/GP-sign2.png')}
            alt="Genius Plaza image"
          />
          <h2 className="main-border border-padding main-border-header">
            A "To Do" App, powered by React.
          </h2>
        </div>
        <div className="App">
          <AppContainer />
        </div>
      </div>
    );
  }
}

export default App;
