import { isLoadingReducer } from './isLoadingReducer';
import * as actions from '../actions';

describe('isLoadingReducer', () => {
  const state = false;

  it('should return state by default', () => {
    const action = {}
    const results = isLoadingReducer(state, action)
    expect(results).toEqual(state)
  })

  it('should return state with boolean', () => {
    const boolean = true
    const action = actions.isLoading(boolean)
    const results = isLoadingReducer(state, action)
    expect(results).toEqual(boolean)
  })
})