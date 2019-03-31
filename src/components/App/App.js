import React, { Component } from 'react';
import './_App.scss';
import Header from '../Header/Header';
import Favorite from '../Favorite/Favorite';
import Button from '../Button/Button';
import Scroll from '../Scroll/Scroll';
import CardContainer from '../CardContainer/CardContainer';
import LoadingRequest from '../LoadingRequest/LoadingRequest';
import { connect } from 'react-redux';
import { fetchAnything } from '../Helper/fetchAnything';
import { Route } from 'react-router-dom';
import { loadOpeningFilm } from '../../actions/index';

class App extends Component {
  constructor() {
    super();
    this.state = {
      favorites: 0,
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
    this.props.loadOpeningFilm({
        title: selectedFilm.title, 
        date: selectedFilm.release_date,
        crawl: selectedFilm.opening_crawl
    })
  }

  render() {
    const { favorites} = this.state
    return (
      <div className="app">
          <Favorite favorites={favorites}/>
          <Header />
          {
            this.props.errorStatus && <p className="error-message">{this.props.errorStatus}</p>
          }
          <article className="message-space">
          {this.props.loading ? <LoadingRequest /> : <Route exact path='/' component={Button} /> }
          </article>
          {this.props.selectedCards.length ? (
            <CardContainer cards={this.props.selectedCards}/>
              ) : ( 
            <Scroll openingFilm={this.props.openingFilm}/>
           )} 
      </div>
    );
  }
}

export const mapStateToProps = (state) => ({
  errorStatus: state.errorStatus,
  selectedCards: state.currentCards,
  loading: state.loading,
  openingFilm: state.openingFilm
})

export const mapDispatchToProps = (dispatch) => ({
  loadOpeningFilm: (randomFilm) => dispatch(loadOpeningFilm(randomFilm)) 
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
