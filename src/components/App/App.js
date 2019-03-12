import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      handle: ''
    }
  }


  componentDidMount(handle) {
    const url = `https://swapi.co/api/${this.state.handle}`
    fetch(url)
      .then(response => response.json())
      .then(data => console.log(data))
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          SWAPI-Box
        </header>
      </div>
    );
  }
}

export default App;
