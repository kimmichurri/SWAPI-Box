import React, { Component } from 'react';
import './_App.scss';
import Header from '../Header/Header';
import Favorite from '../Favorite/Favorite';
import Button from '../Button/Button';
import Scroll from '../Scroll/Scroll';
import CardContainer from '../CardContainer/CardContainer';
import { fetchAnything } from '../Helper/fetchAnything';
import { peopleCleaner, findHomeworld, findSpecies, findResidents, planetCleaner, residentUrls } from '../Helper/cleaner';

class App extends Component {
  constructor() {
    super();
    this.state = {
      openingFilm: {},
      people: [],
      planets: [],
      vehicles: []
    }
  }

  randomFilmNumber = () => {
    return Math.floor((Math.random() * 7) + 1);
  }

  componentDidMount() {
    const url = `https://swapi.co/api/films/${this.randomFilmNumber()}`;
    fetchAnything(url)
      .then(selectedFilm => this.firstFilm(selectedFilm))
  }

  firstFilm = (selectedFilm) => {
    this.setState({
      openingFilm: {
        title: selectedFilm.title, 
        date: selectedFilm.release_date,
        crawl: selectedFilm.opening_crawl
      }
    })
  }

  getPeople = () => {
    const url = 'https://swapi.co/api/people'
      fetchAnything(url)
      .then(data => findHomeworld(data.results))
      .then(uniquePeople => findSpecies(uniquePeople))
      .then(getCleanedPeople => peopleCleaner(getCleanedPeople))
      .then(cleanPeople => this.setState({people: cleanPeople}))
  }

  getPlanets = () => {
    console.log('get planets')
    const url = 'https://swapi.co/api/planets/'
      fetchAnything(url)
      .then(data => findResidents(data.results))
      .then(getCleanedPlanets => planetCleaner(getCleanedPlanets))
      .then(cleanPlanets => this.setState({planets: cleanPlanets}))
  }

  render() {
    const { openingFilm, people, planets } = this.state
    return (
      <div className="app">
          <Favorite />
          <Header />
          <Button getPeople={this.getPeople} getPlanets={this.getPlanets}/>
          <Scroll openingFilm={openingFilm}/>
          <CardContainer people={people} planets={planets}/>
      </div>
    );
  }
}

export default App;
