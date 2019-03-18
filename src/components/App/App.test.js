import React from 'react';
// import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme';
import { fetchAnything } from '../Helper/fetchAnything';


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
  })

  it.skip('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it.skip('should have proper default state', () => {
 
  });

  it('should call fetchAnything to set openingFilm state', async () => {
    wrapper = shallow(
      <App />
    )
    const expectedState = { openingFilm: mockFilm }
    wrapper.instance().selectedFilm = { openingFilm: mockFilm }
    // // wrapper.setState({ openingFilm: mockFilm })
    // wrapper.instance().fetchAnything = jest.fn().mockImplementation(() => {
    //   return mockFilm })
    //await wrapper.instance().componentDidMount()

    //expect(wrapper.instance().fetchAnything).toHaveBeenCalled()
    expect(wrapper.instance().state).toEqual(expectedState)
  })

  it.skip('should call fetchAnything with the correct parameters', () => {

  })

  it.skip('should set people state to an array of 10 people objects', () => {

  })

  it.skip('should display favorite, header and button component by default', () => {

  })

})
