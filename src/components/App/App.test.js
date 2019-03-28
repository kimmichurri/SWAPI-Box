import React from 'react';
import App from './App';
import { shallow } from 'enzyme';

describe('App', () => {
  let mockUrl;
  let mockFilms;
  let mockFilm;
  let mockSelectedCards;
  let wrapper;
  
  beforeEach(() => {
    wrapper = shallow(
      <App />
    )
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
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

  it.skip('should call fetchAnything to set openingFilm state', async () => {
    fetchAnything = jest.fn().mockImplementation(() => {
        return mockFilm })
    const expectedState = { openingFilm: mockFilm }
    wrapper.instance().selectedFilm = { openingFilm: mockFilm }
    // // wrapper.setState({ openingFilm: mockFilm })
    // wrapper.instance().fetchAnything = jest.fn().mockImplementation(() => {
    //   return mockFilm })
    await wrapper.instance().

    //expect(wrapper.instance().fetchAnything).toHaveBeenCalled()
    expect(wrapper.instance().state).toEqual(expectedState)
  })

  it('should set selectedCards state to an array of people objects', () => {
    const mockData = {
      "count": 87,
      "next": "https://swapi.co/api/people/?page=2",
      "previous": null,
      "results": [
          {
              "name": "Luke Skywalker",
              "height": "172",
              "mass": "77",
              "hair_color": "blond",
              "skin_color": "fair",
              "eye_color": "blue",
              "birth_year": "19BBY",
              "gender": "male",
              "homeworld": "https://swapi.co/api/planets/1/",
              "films": [
                  "https://swapi.co/api/films/2/",
                  "https://swapi.co/api/films/6/",
                  "https://swapi.co/api/films/3/",
                  "https://swapi.co/api/films/1/",
                  "https://swapi.co/api/films/7/"
              ],
              "species": [
                  "https://swapi.co/api/species/1/"
              ],
              "vehicles": [
                  "https://swapi.co/api/vehicles/14/",
                  "https://swapi.co/api/vehicles/30/"
              ],
              "starships": [
                  "https://swapi.co/api/starships/12/",
                  "https://swapi.co/api/starships/22/"
              ],
              "created": "2014-12-09T13:50:51.644000Z",
              "edited": "2014-12-20T21:17:56.891000Z",
              "url": "https://swapi.co/api/people/1/"
          },
          {
              "name": "C-3PO",
              "height": "167",
              "mass": "75",
              "hair_color": "n/a",
              "skin_color": "gold",
              "eye_color": "yellow",
              "birth_year": "112BBY",
              "gender": "n/a",
              "homeworld": "https://swapi.co/api/planets/1/",
              "films": [
                  "https://swapi.co/api/films/2/",
                  "https://swapi.co/api/films/5/",
                  "https://swapi.co/api/films/4/",
                  "https://swapi.co/api/films/6/",
                  "https://swapi.co/api/films/3/",
                  "https://swapi.co/api/films/1/"
              ],
              "species": [
                  "https://swapi.co/api/species/2/"
              ],
              "vehicles": [],
              "starships": [],
              "created": "2014-12-10T15:10:51.357000Z",
              "edited": "2014-12-20T21:17:50.309000Z",
              "url": "https://swapi.co/api/people/2/"
          }
      ]
  }

    const mockUniquePeople = [
      {
          "name": "Luke Skywalker",
          "height": "172",
          "mass": "77",
          "hair_color": "blond",
          "skin_color": "fair",
          "eye_color": "blue",
          "birth_year": "19BBY",
          "gender": "male",
          "homeworld": "Tatooine",
          "population": "200000",
          "films": [
              "https://swapi.co/api/films/2/",
              "https://swapi.co/api/films/6/",
              "https://swapi.co/api/films/3/",
              "https://swapi.co/api/films/1/",
              "https://swapi.co/api/films/7/"
          ],
          "species": [
              "https://swapi.co/api/species/1/"
          ],
          "vehicles": [
              "https://swapi.co/api/vehicles/14/",
              "https://swapi.co/api/vehicles/30/"
          ],
          "starships": [
              "https://swapi.co/api/starships/12/",
              "https://swapi.co/api/starships/22/"
          ],
          "created": "2014-12-09T13:50:51.644000Z",
          "edited": "2014-12-20T21:17:56.891000Z",
          "url": "https://swapi.co/api/people/1/"
      },
      {
          "name": "C-3PO",
          "height": "167",
          "mass": "75",
          "hair_color": "n/a",
          "skin_color": "gold",
          "eye_color": "yellow",
          "birth_year": "112BBY",
          "gender": "n/a",
          "homeworld": "Tatooine",
          "population": "200000",
          "films": [
              "https://swapi.co/api/films/2/",
              "https://swapi.co/api/films/5/",
              "https://swapi.co/api/films/4/",
              "https://swapi.co/api/films/6/",
              "https://swapi.co/api/films/3/",
              "https://swapi.co/api/films/1/"
          ],
          "species": [
              "https://swapi.co/api/species/2/"
          ],
          "vehicles": [],
          "starships": [],
          "created": "2014-12-10T15:10:51.357000Z",
          "edited": "2014-12-20T21:17:50.309000Z",
          "url": "https://swapi.co/api/people/2/"
      }
    ]

    const expectedResults = {name: "Luke Skywalker", homeworld: "Tatooine", species: "Human", population: "200000", language: "Galactic Basic", favorite: "false"}
    wrapper.instance().fetchAnything = jest.fn().mockImplementation(() => Promise.resolve({
      ok: true,
      status: 200,
      json: () => Promise.resolve(mockData)
  }));

    wrapper.instance().getPeople()
      expect(wrapper.instance().fetchAnything).toHaveBeenCalled()
      expect(wrapper.instance().findHomeworld(mockData.results)).then(() => {
      expect(findSpecies).toHaveBeenCalledWith(mockUniquePeople)
    })



  })

  it.skip('should set selectedCards state to an array of planet objects', () => {
    //mock the data
    //
  })

  it.skip('should set selectedCards state to an array of vehicle objects', () => {
    //mock the data
    //
  })

  it.skip('should give an error when fetch fails', () => {
    //add errorStatus to state first
    //mock the implementation as rejected
    //when fetch is called expect the error status to be updated with the error message
  })

  it('getPeople should be called on click', () => {
    const mockGetPeople = jest.fn();
    const wrapper = shallow(<Button getPeople={mockGetPeople}/>)
    wrapper.find('.people').simulate('click');
    expect(mockGetPeople).toBeCalled();
    //do this same thing for two other buttons
  })

})
