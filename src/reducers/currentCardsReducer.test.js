import { currentCardsReducer } from './currentCardsReducer';
import * as actions from '../actions';

describe('currentCardsReducer', () => {
  const state = []

  it('should return state by default', () => {
    const action = {}
    const results = currentCardsReducer(state, action)
    expect(results).toEqual(state)
  })

  it('should return state with data', () => {
    const data = {item: 1}
    const action = actions.currentCards(data)
    const results = currentCardsReducer(state, action)
    expect(results).toEqual(data);
  })
})