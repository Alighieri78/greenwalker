import React, { Component } from 'react';
import './App.css';

class App extends Component {
  // Initialize state
  state = { }

  render() {
    return (
      <div className="App">
        <h1>Login</h1>
        <ValidatedLoginForm />
      </div>
    );
  }
}

export default App;
