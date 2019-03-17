import React, { Component } from 'react';
import './_App.scss';
import Header from '../Header/Header';
import Favorite from '../Favorite/Favorite';
import Button from '../Button/Button';
import Scroll from '../Scroll/Scroll';
import CardContainer from '../CardContainer/CardContainer';
import { fetchAnything } from '../Helper/fetchAnything';
import { peopleCleaner, findHomeworld, findSpecies, findResidents, planetCleaner, vehicleCleaner } from '../Helper/cleaner';

class App extends Component {
  constructor() {
    super();
    this.state = {
      openingFilm: {},
      selectedCards: []
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
      .then(cleanPeople => this.setState({selectedCards: cleanPeople}))
  }

  getPlanets = () => {
    const url = 'https://swapi.co/api/planets/'
      fetchAnything(url)
      .then(data => findResidents(data.results))
      .then(getCleanedPlanets => planetCleaner(getCleanedPlanets))
      .then(cleanPlanets => this.setState({selectedCards: cleanPlanets}))
  }

  getVehicles = () => {
    const url = 'https://swapi.co/api/vehicles/'
    fetchAnything(url)
      .then(data => vehicleCleaner(data.results))
      .then(cleanVehicles => this.setState({selectedCards: cleanVehicles}))
  }

  render() {
    const { openingFilm, selectedCards } = this.state
    return (
      <div className="app">
          <Favorite />
          <Header />
          <Button getPeople={this.getPeople} getPlanets={this.getPlanets} getVehicles={this.getVehicles}/>
          <Scroll openingFilm={openingFilm}/>
          <CardContainer selectedCards={selectedCards}/>
      </div>
    );
  }
}

export default App;
