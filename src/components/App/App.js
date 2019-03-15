import React, { Component } from 'react';
import './_App.scss';
import Header from '../Header/Header';
import Favorite from '../Favorite/Favorite';
import Button from '../Button/Button';
import Scroll from '../Scroll/Scroll';
import CardContainer from '../CardContainer/CardContainer';
import { fetchAnything } from '../Helper/fetchAnything';
import { peopleCleaner, findHomeworld, findSpecies } from '../Helper/cleaner';

class App extends Component {
  constructor() {
    super();
    this.state = {
      openingFilm: {},
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
  }

  getPeople =  () => {
    const url = 'https://swapi.co/api/people'
      fetchAnything(url)
      .then(data => findHomeworld(data.results))
      .then(uniquePeople => findSpecies(uniquePeople))
      .then(getCleanedPeople => peopleCleaner(getCleanedPeople))
      .then(cleanPeople => this.setState({people: cleanPeople}))
  }

  render() {
    const { openingFilm } = this.state
    const { people } = this.state
    return (
      <div className="app">
          <Favorite />
          <Header />
          <Button getPeople={this.getPeople}/>
          <Scroll openingFilm={openingFilm}/>
          <CardContainer people={people}/>
      </div>
    );
  }
}

export default App;
