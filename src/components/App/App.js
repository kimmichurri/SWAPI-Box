import React, { Component } from 'react';
import './_App.scss';
import Header from '../Header/Header';
import Favorite from '../Favorite/Favorite';
import Button from '../Button/Button';
import Scroll from '../Scroll/Scroll';
import CardContainer from '../CardContainer/CardContainer';
import LoadingRequest from '../LoadingRequest/LoadingRequest';
import { connect } from 'react-redux';
import { hasError, updateData, currentCards } from '../../actions/index';
import { fetchAnything } from '../Helper/fetchAnything';

class App extends Component {
  constructor() {
    super();
    this.state = {
      openingFilm: {},
      favorites: 0,
      loading: false,
    }
  }

  randomFilmNumber = () => {
    return Math.floor((Math.random() * 7) + 1);
  }

  async componentDidMount() {
    const url = `https://swapi.co/api/films/${this.randomFilmNumber()}`;
    const selectedFilm = await fetchAnything(url)
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
            <Button />
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
