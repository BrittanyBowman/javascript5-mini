import React, { Component } from 'react';
import './logo.svg';
import './App.css';

class App extends Component {
  constuctor() {
    super()

    this.state = {
      myName: 'Joe'
    }
  }
  render() {
    const name = this.state.myName;
    return (
      <div className="App">
        <h3>My name is</h3> { name }
      </div>
    );
  }
}

export default App;
