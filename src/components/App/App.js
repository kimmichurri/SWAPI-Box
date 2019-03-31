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
import { hasError, updateData, currentCards } from '../../actions/index';

class App extends Component {
  constructor() {
    super();
    this.state = {
      openingFilm: {},
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

  findCategory = (retrievedData, categoryName) => {
    let existingCategory = retrievedData.find((card) => {
      return card.category === categoryName
    })
    return existingCategory
  }

  checkStateForExistingData = (retrievedData, categoryName) => {
    if(retrievedData === undefined) {
      return false
    } else if(this.findCategory(retrievedData, categoryName) === undefined) {
      return false
    } else {
      return true
    }
  }

  getPeople = async () => {
    let dataExists = this.checkStateForExistingData(this.props.retrievedData, 'people')
    if (dataExists) {
      let cachedPeople = this.props.retrievedData.filter((card) => {
        return card.category === 'people'
      })
      this.props.currentCards(cachedPeople)
    } else {
      try {
        this.setState({loading: true})
        const url = 'https://swapi.co/api/people';
        const data = await this.fetchAnything(url)
        const allPeople = await findHomeworld(data.results)
        const withSpecies = await findSpecies(allPeople)
        const cleanPeopleData = peopleCleaner(withSpecies)
        this.props.updateData([...this.props.retrievedData, ...cleanPeopleData])
        this.props.currentCards(cleanPeopleData)
        this.setState({loading: false})
      } catch(error) {
        this.props.hasError('There was a problem retrieving the data')
      }
    }
  }

  getPlanets = async () => {
    let dataExists = this.checkStateForExistingData(this.props.retrievedData, 'planets')
    if (dataExists) {
      let cachedPlanets = this.props.retrievedData.filter((card) => {
        return card.category === 'planets'
      })
      this.props.currentCards(cachedPlanets)
    } else {
      try {
        this.setState({loading: true})
        const url = 'https://swapi.co/api/planets/'
        const data = await this.fetchAnything(url)
        const withResidents = await findResidents(data.results)
        const cleanPlanetData = planetCleaner(withResidents)
        this.props.updateData([...this.props.retrievedData, ...cleanPlanetData])
        this.props.currentCards(cleanPlanetData)
        this.setState({loading: false})
      } catch(error) {
        this.props.hasError('There was a problem retrieving the data')
      }
    }
  }

  getVehicles = async () => {
    let dataExists = this.checkStateForExistingData(this.props.retrievedData, 'vehicles')
    if (dataExists) {
      let cachedVehicles = this.props.retrievedData.filter((card) => {
        return card.category === 'vehicles'
      })
      this.props.currentCards(cachedVehicles)
    } else {
      try {
        this.setState({loading: true})
        const url = 'https://swapi.co/api/vehicles/'
        const data = await this.fetchAnything(url)
        const cleanVehicleData = await vehicleCleaner(data.results)
        this.props.updateData([...this.props.retrievedData, ...cleanVehicleData])
        this.props.currentCards(cleanVehicleData)
        this.setState({loading: false})
      } catch(error) {
        this.props.hasError('There was a problem retrieving the data')
      }
    }
  }

  render() {
    const { openingFilm, favorites, loading} = this.state
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
          {this.props.selectedCards.length ? (
            <CardContainer cards={this.props.selectedCards}/>
              ) : ( 
            <Scroll openingFilm={openingFilm}/>
           )} 
      </div>
    );
  }
}

export const mapStateToProps = (state) => ({
  errorStatus: state.errorStatus,
  retrievedData: state.retrievedData,
  selectedCards: state.currentCards
})

export const mapDispatchToProps = (dispatch) => ({
  hasError: (message) => dispatch(hasError(message)),
  updateData: (data) => dispatch(updateData(data)),
  currentCards: (data) => dispatch(currentCards(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
