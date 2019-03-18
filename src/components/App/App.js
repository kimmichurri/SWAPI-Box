import React, { Component } from 'react';
import './_App.scss';
import Header from '../Header/Header';
import Favorite from '../Favorite/Favorite';
import Button from '../Button/Button';
import Scroll from '../Scroll/Scroll';
import CardContainer from '../CardContainer/CardContainer';
import { peopleCleaner, findHomeworld, findSpecies, findResidents, planetCleaner, vehicleCleaner } from '../Helper/cleaner';
import LoadingRequest from '../LoadingRequest/LoadingRequest';

class App extends Component {
  constructor() {
    super();
    this.state = {
      openingFilm: {},
      selectedCards: [],
      favorites: 0,
      loading: false,
      errorStatus: ''
    }
  }

  fetchAnything = async (url) => { 
    try {
        const response = await fetch(url)
        return response.json()
    } catch (error) {
        // throw new Error('Response not okay')
        this.setState({
          errorStatus: 'Error fetching data'
        })
    }        
}

  randomFilmNumber = () => {
    return Math.floor((Math.random() * 7) + 1);
  }

  async componentDidMount() {
    const url = `https://swapi.co/api/films/${this.randomFilmNumber()}`;
    const selectedFilm = await this.fetchAnything(url)
    console.log(selectedFilm)
    this.firstFilm(selectedFilm)
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
    this.setState({ loading: true })
    const url = 'https://swapi.co/api/people'
      return this.fetchAnything(url)
      .then(data => findHomeworld(data.results))
      .then(uniquePeople => findSpecies(uniquePeople))
      .then(getCleanedPeople => peopleCleaner(getCleanedPeople))
      .then(cleanPeople => this.setState({selectedCards: cleanPeople, loading: false}))
  }

  getPlanets = () => {
    this.setState({ loading: true })
    const url = 'https://swapi.co/api/planets/'
      return this.fetchAnything(url)
      .then(data => findResidents(data.results))
      .then(getCleanedPlanets => planetCleaner(getCleanedPlanets))
      .then(cleanPlanets => this.setState({selectedCards: cleanPlanets, loading: false}))
  }

  getVehicles = () => {
    this.setState({ loading: true })
    const url = 'https://swapi.co/api/vehicles/'
    return this.fetchAnything(url)
      .then(data => vehicleCleaner(data.results))
      .then(cleanVehicles => this.setState({selectedCards: cleanVehicles , loading: false}))
  }

  render() {
    const { openingFilm, selectedCards, favorites, loading } = this.state
    return (
      <div className="app">
          <Favorite favorites={favorites}/>
          <Header />
          <article className="message-space">
          {loading ? (
            <LoadingRequest />
          ) : (
            <Button getPeople={this.getPeople} getPlanets={this.getPlanets} getVehicles={this.getVehicles}/>
          )
          } 
          </article>
          {selectedCards.length ? (
            <CardContainer selectedCards={selectedCards}/>
          ) : (
            <Scroll openingFilm={openingFilm}/>
          )}
      </div>
    );
  }
}

export default App;
