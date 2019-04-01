import { loadOpeningFilmReducer } from './loadOpeningFilmReducer';
import * as actions from '../actions';

describe('loadOpeningFilmReducer', () => {
  const state = {}

  it('should return state by default', () => {
    const action = {}
    const results = loadOpeningFilmReducer(state, action)
    expect(results).toEqual(state)
  })

  it('should return state with openingFilm', () => {
    const film = { title: 'A New Hope' }
    const action = actions.loadOpeningFilm(film)
    const results = loadOpeningFilmReducer(state, action)
    expect(results).toEqual(film)
  })
})