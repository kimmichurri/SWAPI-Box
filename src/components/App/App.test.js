import React from 'react';
import App from './App';
import Button from '../Button/Button';
import { shallow } from 'enzyme';

describe('App', () => {
  let mockUrl;
  let mockData;
  let wrapper;
  
  beforeEach(() => {
    wrapper = shallow(
      <App />
    )

    mockData = {
      film: 'A New Hope'
    }
  })

  it('should match the snapshot', () => {
    expect(wrapper.debug()).toMatchSnapshot();
  });

  it('should have proper default state', () => {
    expect(wrapper.instance().state).toEqual({
      openingFilm: {},
      selectedCards: [],
      favorites: 0,
      loading: false,
      errorStatus: ''
    })
  });


  it('getPeople should be called on click', () => {
    const mockGetPeople = jest.fn();
    const wrapper = shallow(<Button getPeople={mockGetPeople}/>)
    wrapper.find('.people').simulate('click');
    expect(mockGetPeople).toHaveBeenCalled();
  })

  it('getPlanets should be called on click', () => {
    const mockGetPlanets = jest.fn();
    const wrapper = shallow(<Button getPlanets={mockGetPlanets}/>)
    wrapper.find('.planets').simulate('click');
    expect(mockGetPlanets).toHaveBeenCalled;
  })

  it('getVehicles should be called on click', () => {
    const mockGetVehicles = jest.fn();
    const wrapper = shallow(<Button getVehicles={mockGetVehicles}/>)
    wrapper.find('.vehicles').simulate('click');
    expect(mockGetVehicles).toHaveBeenCalled();
  })

})
