import { errorStatusReducer } from './errorStatusReducer';
import * as actions from '../actions';

describe('errorStatusReducer', () => {
  const state = '';
  it('should return state by default', () => {
    const action = {}
    const results = errorStatusReducer(state, action)
    expect(results).toEqual(state)
  })

  it('should return state with a message', () => {
    const message =  'error' 
    const action = actions.hasError(message)
    const results = errorStatusReducer(state, action)
    expect(results).toEqual(message)
  })
})