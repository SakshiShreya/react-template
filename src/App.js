import React, { Component } from 'react';
import { HashRouter } from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="App">
          <h1> Hello, World! </h1>
        </div>
      </HashRouter>
    );
  }
}

export default App;
