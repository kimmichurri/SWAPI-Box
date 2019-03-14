import React, { Component } from 'react';
import './_App.scss';
import Header from '../Header/Header';
import Favorite from '../Favorite/Favorite';
import Button from '../Button/Button';
import CardContainer from '../CardContainer/CardContainer';
import ApiCalls from '../Helper/ApiCalls';
let apiCalls = new ApiCalls;

class App extends Component {
  constructor() {
    super();
    this.state = {
      openingFilm: '',
      people: [],
      plants: [],
      vehicles: []
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
    // console.log(allFilms.results[randomIndex])
  }

  getPeople = async () => {
    this.setState({
      people: await apiCalls.findPeopleInfo()
    })
    // fetch(url)
    //   .then(response => response.json())
    //   .then(data => apiCalls.findPeople(data))
    //   .then(giantObject => console.log(giantObject))
  }

  render() {
    return (
      <div className="app">
          <Favorite />
          <Header />
          <Button getPeople={this.getPeople}/>
          <CardContainer />
      </div>
    );
  }
}

export default App;
