import React, { Component } from 'react';
import Layout from './Layout';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to past SFTX game/show collection!</h1>
        </header>
        <p>The videos take a while to load, please wait a little!</p>
        <Layout />
      </div>
    );
  }
}

export default App;
