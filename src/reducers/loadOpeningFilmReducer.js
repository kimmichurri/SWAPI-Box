export const loadOpeningFilmReducer = (state = {}, action) => {
  switch(action.type) {
    case 'LOAD_OPENING_FILM':
      return action.film
    default: 
      return state
  }
}