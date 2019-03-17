import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme';
import { fetchAnything } from '../Helper/fetchAnything';
jest.mock('../Helper/fetchAnything')

describe('App', () => {
  let mockUrl;
  let mockFilms;
  let mockFilm;
  let mockSelectedCards;
  let wrapper;
  
  beforeEach(() => {
    mockUrl = 'www.starwars.com'
    mockFilms = [{ "crawl": "Crawl", "date": "1977", "title": "A New Hope" }, { "crawl": "Crawl", "date": "1983", "title": "Return of the Jedi" }]
    mockFilm = { crawl: "Crawl", date: "1977", title: "A New Hope" }
    mockSelectedCards = [
      { name: 'Endor', population: 30000000, terrain: 'forests, mountains, lakes', climate: 'temperate', residents: 'Wicket Systri Warrick' },
      { name: 'Bespin', population: 6000000, terrain: 'gas giant', climate: 'temperate', residents: 'Lobot' }
    ]

    window.fetchAnything = jest.fn().mockImplementation(() => 
      Promise.resolve({
        status: 200,
        json: () => Promise.resolve({mockFilms})
      }))

    wrapper = shallow(
      <App />
    )
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it.skip('should have proper default state', () => {
 
  });

  it.skip('should call fetchAnything to reset openingFilm state', () => {

  })

  it.skip('should reset the openingFilm state from an empty object to a film with three properties', () => {

  })

  it.skip('should call fetchAnything with the correct parameters', () => {

  })

  it.skip('should reset people state to an array of 10 people objects', () => {

  })

  it.skip('should display favorite, header and button component by default', () => {

  })

})
