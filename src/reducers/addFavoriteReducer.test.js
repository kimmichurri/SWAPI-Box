import { addFavoriteReducer } from './addFavoriteReducer';
import * as actions from '../actions';

describe('addFavoriteReducer', () => {
  const state = [];

  it('should return a state by default', () => {
    const action = {};
    const results = addFavoriteReducer(state, action);
    expect(results).toEqual(state);
  })

  it('should return state with a favorite', () => {
    const id = 1;
    const expected = 1
    const action = actions.addFavorite(id);
    const results = addFavoriteReducer(state, action)
    expect(results).toEqual(expected);
  })
})