import React from 'react';
import App from './App';
import { mapDispatchToProps, mapStateToProps } from './App';
import Button from '../Button/Button';
import { loadOpeningFilm } from '../../actions'
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

  it.skip('getPeople should be called on click', () => {
    const mockGetPeople = jest.fn();
    const wrapper = shallow(<Button getPeople={mockGetPeople}/>)
    wrapper.find('.people').simulate('click');
    expect(mockGetPeople).toHaveBeenCalled();
  })

  it.skip('getPlanets should be called on click', () => {
    const mockGetPlanets = jest.fn();
    const wrapper = shallow(<Button getPlanets={mockGetPlanets}/>)
    wrapper.find('.planets').simulate('click');
    expect(mockGetPlanets).toHaveBeenCalled;
  })

  it.skip('getVehicles should be called on click', () => {
    const mockGetVehicles = jest.fn();
    const wrapper = shallow(<Button getVehicles={mockGetVehicles}/>)
    wrapper.find('.vehicles').simulate('click');
    expect(mockGetVehicles).toHaveBeenCalled();
  })

  describe('mapDispatchToProps', () => {

    it('should provide a method to dispatch', () => {
      const mockFilm = { title: 'A New Hope', date: 1977, crawl: 'crawl' }
      const mockDispatch = jest.fn()
      const actionToDispatch = loadOpeningFilm(mockFilm)
      const mappedProps = mapDispatchToProps(mockDispatch)
      mappedProps.loadOpeningFilm(mockFilm)
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
    })
  })

  describe('mapStateToProps', () => {
    it('should return an object with an errorStatus', () => {
      const message = 'error'
      const mockState = {
        errorStatus: message
      }
      const expected = {
        errorStatus: message
      }
      const mappedProps = mapStateToProps(mockState)
      expect(mappedProps).toEqual(expected)
    })
  })

})
