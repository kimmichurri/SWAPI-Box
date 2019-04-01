import * as actions from './index';

describe('actions', () => {

  it('should return a type of HAS_ERROR', () => {
    const message = 'error'
    const expected = {
      type: 'HAS_ERROR',
      message
    }
    const result = actions.hasError(message)
    expect(result).toEqual(expected)
  })

  it('should return a type of UPDATE_DATA', () => {
    const data = { card: 'card' }
    const expected = {
      type: 'UPDATE_DATA',
      data
    }
    const result = actions.updateData(data)
    expect(result).toEqual(expected)
  })

  it('should return a type of CURRENT_CARDS', () => {
    const data = { card: 'card' }
    const expected = {
      type: 'CURRENT_CARDS',
      data
    }
    const result = actions.currentCards(data)
    expect(result).toEqual(expected)
  })

  it('should return a type of IS_LOADING', () => {
    const boolean = true
    const expected = {
      type: 'IS_LOADING',
      isLoading: boolean
    }
    const result = actions.isLoading(boolean)
    expect(result).toEqual(expected)
  })

  it('should return a type of LOAD_OPENING_FILM', () => {
    const film = { film: 'A New Hope'}
    const expected = {
      type: 'LOAD_OPENING_FILM',
      film
    }
    const result = actions.loadOpeningFilm(film)
    expect(result).toEqual(expected)
  })

  it('should return a type of ADD_FAVORITE', () => {
    const id = 1
    const expected = {
      type: 'ADD_FAVORITE',
      id
    }
    const result = actions.addFavorite(id)
    expect(result).toEqual(expected)
  })
})