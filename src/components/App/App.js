import React, { Component } from 'react';
import './_App.scss';
import Header from '../Header/Header';
import Favorite from '../Favorite/Favorite';
import Button from '../Button/Button';
import CardContainer from '../CardContainer/CardContainer';

class App extends Component {
  constructor() {
    super();
    this.state = {
      handle: ''
    }
  }


  // componentDidMount(handle) {
  //   const url = `https://swapi.co/api/${this.state.handle}`
  //   fetch(url)
  //     .then(response => response.json())
  //     .then(data => console.log(data))
  // }

  render() {
    return (
      <div className="App">
          <Favorite />
          <Header />
          <Button />
          <CardContainer />
        
      </div>
    );
  }
}

export default App;
