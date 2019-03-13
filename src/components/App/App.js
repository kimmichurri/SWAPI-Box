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
      openingFilm: ''
    }
  }

  componentDidMount() {
    const url = 'https://swapi.co/api/';
    fetch(url)
      .then(response => response.json())
      .then(data => this.getFilms(data.films))
  }

  getFilms = (films) => {
    return fetch(films)
      .then(response => response.json())
      .then(allFilms => this.firstFilm(allFilms))
  }

  firstFilm = (allFilms) => {
    let randomIndex = Math.floor(Math.random() * Math.floor(7))
    let selectedFilm = allFilms.results[randomIndex]
    this.setState({
      openingFilm: {
        title: selectedFilm.title, 
        date: selectedFilm.release_date,
        crawl: selectedFilm.opening_crawl
      }
    })
    console.log(allFilms.results[randomIndex])
  }

  // componentDidMount() {
  // let randomNumber = Math.floor(Math.random() * Math.floor(7) + 1)
  //   const url = `https://swapi.co/api/films/${randomNumber}`
  //   fetch(url)
  //     .then(response => response.json())
  //     .then(data => console.log(data))
    //  this.setState({
    //   openingFilm: {title: data.title, date: data.release_date, crawl: data.opening_crawl}
    // })
  // }

  render() {
    return (
      <div className="app">
          <Favorite />
          <Header />
          <Button />
          <CardContainer />
        
      </div>
    );
  }
}

export default App;
