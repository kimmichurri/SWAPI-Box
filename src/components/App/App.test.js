import React from 'react';
import App from './App';
import Button from '../Button/Button';
import { shallow } from 'enzyme';

describe('App', () => {
  let wrapper;
  let mockErrorStatus;
  let mockRetrievedData;
  let mockCurrentCards;

    mockErrorStatus = 'error';
    mockRetrievedData = [{id: 1}]
    mockCurrentCards = [{card: 'name'}]
  
  beforeEach(() => {
    wrapper = shallow(<App errorStatus={mockErrorStatus} retrievedData={mockRetrievedData} currentCards={mockCurrentCards}/>)
  })

  it('should match the snapshot', () => {
    expect(wrapper.debug()).toMatchSnapshot();
  });

  it('should have proper default state', () => {
    console.log(wrapper.state())
    const expectedState = {
      openingFilm: {},
      favorites: 0,
      loading: false,
    }
    expect(wrapper.state()).toEqual(expectedState);
  });

  describe('firstFilm', () => {
    it.skip('firstFilm should set openingFilm state with correct properties', () => {
      const mockSelectedFilm = {
        title: 'A New Hope',
        release_date: 1977,
        opening_crawl: 'some text'
      }
      wrapper.instance().firstFilm(mockSelectedFilm)
      expect(wrapper.instance().state).toEqual({
        title: 'A New Hope',
        date: 1977,
        crawl: 'some text'
      })
    })
  })

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
