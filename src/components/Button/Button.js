import React, { Component } from 'react';
import { peopleCleaner, findHomeworld, findSpecies, findResidents, planetCleaner, vehicleCleaner } from '../Helper/cleaner';
import { connect } from 'react-redux';
import { hasError, updateData, currentCards, isLoading } from '../../actions/index';
import { fetchAnything } from '../Helper/fetchAnything';

class Button extends Component {
     constructor() {
         super();
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
        this.props.isLoading(true)
        const url = 'https://swapi.co/api/people';
        const data = await fetchAnything(url)
        const allPeople = await findHomeworld(data.results)
        const withSpecies = await findSpecies(allPeople)
        const cleanPeopleData = peopleCleaner(withSpecies)
        this.props.updateData([...this.props.retrievedData, ...cleanPeopleData])
        this.props.currentCards(cleanPeopleData)
        this.props.isLoading(false)
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
        this.props.isLoading(true)
        const url = 'https://swapi.co/api/planets/'
        const data = await fetchAnything(url)
        const withResidents = await findResidents(data.results)
        const cleanPlanetData = planetCleaner(withResidents)
        this.props.updateData([...this.props.retrievedData, ...cleanPlanetData])
        this.props.currentCards(cleanPlanetData)
        this.props.isLoading(false)
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
        this.props.isLoading(true)
        const url = 'https://swapi.co/api/vehicles/'
        const data = await fetchAnything(url)
        const cleanVehicleData = await vehicleCleaner(data.results)
        this.props.updateData([...this.props.retrievedData, ...cleanVehicleData])
        this.props.currentCards(cleanVehicleData)
        this.props.isLoading(false)
      } catch(error) {
        this.props.hasError('There was a problem retrieving the data')
      }
    }
  }

     render() {
         return (
             <div>
                 <button onClick={this.getPeople} className="card-category-buttons people">people</button>
                 <button onClick={this.getPlanets} className="card-category-buttons planets">planets</button>
                 <button onClick={this.getVehicles} className="card-category-buttons vehicles">vehicles</button>
             </div>
         )

     }

}

export const mapStateToProps = (state) => ({
    errorStatus: state.errorStatus,
    retrievedData: state.retrievedData,
    selectedCards: state.currentCards,
    loading: state.loading
  })
  
  export const mapDispatchToProps = (dispatch) => ({
    hasError: (message) => dispatch(hasError(message)),
    updateData: (data) => dispatch(updateData(data)),
    currentCards: (data) => dispatch(currentCards(data)),
    isLoading: (boolean) => dispatch(isLoading(boolean))
  })
  
  export default connect(mapStateToProps, mapDispatchToProps)(Button);
