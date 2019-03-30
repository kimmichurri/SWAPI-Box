import React, { Component } from 'react';
import './_App.scss';
import Header from '../Header/Header';
import Favorite from '../Favorite/Favorite';
import Button from '../Button/Button';
import Scroll from '../Scroll/Scroll';
import CardContainer from '../CardContainer/CardContainer';
import { peopleCleaner, findHomeworld, findSpecies, findResidents, planetCleaner, vehicleCleaner } from '../Helper/cleaner';
import LoadingRequest from '../LoadingRequest/LoadingRequest';
import { connect } from 'react-redux';
import { hasError } from '../../actions/index';

class App extends Component {
  constructor() {
    super();
    this.state = {
      openingFilm: {},
      selectedCards: [],
      favorites: 0,
      loading: false,
    }
  }

  fetchAnything = async (url) => {
    try {
        const response = await fetch(url)
        return response.json()
    } catch (error) {
        this.props.errorStatus('There was a problem retrieving the data')
        throw new Error('There was a problem retrieving the data')
    }
}

  randomFilmNumber = () => {
    return Math.floor((Math.random() * 7) + 1);
  }

  async componentDidMount() {
    const url = `https://swapi.co/api/films/${this.randomFilmNumber()}`;
    const selectedFilm = await this.fetchAnything(url)
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

  getPeople = async () => {
    this.setState({loading: true})
    try {
      const url = 'https://swapi.co/api/people';
      const data = await this.fetchAnything(url)
      const allPeople = await findHomeworld(data.results)
      const withSpecies = await findSpecies(allPeople)
      const cleanPeopleData = peopleCleaner(withSpecies)
      this.setState({selectedCards: cleanPeopleData, loading: false})
    } catch(error) {
      this.props.hasError('There was a problem retrieving the data')
    }
  }

  getPlanets = async () => {
    this.setState({loading: true})
    try {
      const url = 'https://swapi.co/api/planets/'
      const data = await this.fetchAnything(url)
      const withResidents = await findResidents(data.results)
      const cleanPlanetData = planetCleaner(withResidents)
      this.setState({selectedCards: cleanPlanetData, loading: false})
    } catch(error) {
      this.setState({errorStatus: 'There was a problem retrieving the data'})
    }
  }

  getVehicles = async () => {
    this.setState({loading: true})
    try {
      const url = 'https://swapi.co/api/vehicles/'
      const data = await this.fetchAnything(url)
      const cleanVehicleData = await vehicleCleaner(data.results)
      this.setState({selectedCards: cleanVehicleData, loading: false})
    } catch(error) {
      this.setState({errorStatus: 'There was a problem retrieving the data'})
    }
  }

  render() {
    const { openingFilm, selectedCards, favorites, loading} = this.state
    return (
      <div className="app">
          <Favorite favorites={favorites}/>
          <Header />
          {
            this.props.errorStatus && <p className="error-message">{this.props.errorStatus}</p>
          }
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

const mapStateToProps = (state) => ({
  errorStatus : state.errorStatus
})

const mapDispatchToProps = (dispatch) => ({
  hasError: (message) => dispatch(hasError(message))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
