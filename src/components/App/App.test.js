import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme';

describe('App', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <App />
    )
  })

  it('should have proper default state', () => {
    //expect wrapper state to equal what it should equal
    expect(wrapper.state()).toEqual({
      openingFilm: {},
      people: [],
      plants: [],
      vehicles: [],
    })
  });

  it.skip('should generate a random number between 1 and 7', () => {
    //expect the return to be a number between 1 and 7
  })

  it.skip('should call fetchAnything with the correct parameters', () => {

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
