import { updateDataReducer } from './updateDataReducer';
import * as actions from '../actions';

describe('updateDataReducer', () => {
  const state = []
  it ('should return state by default', () => {
    const action = {}
    const results = updateDataReducer(state, action)
    expect(results).toEqual(state)
  })

  it('should return state with new data', () => {
    const data = { card: 'card'}
    const action = actions.updateData(data)
    const results = updateDataReducer(state, action)
    expect(results).toEqual(data)
  })
})