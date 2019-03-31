import { combineReducers } from 'redux';
import { errorStatusReducer } from './errorStatusReducer';
import { updateDataReducer } from './updateDataReducer';
import { currentCardsReducer } from './currentCardsReducer';
import { isLoadingReducer } from './isLoadingReducer';
import { loadOpeningFilmReducer } from './loadOpeningFilmReducer';
import { addFavoriteReducer } from './addFavoriteReducer';

const rootReducer = combineReducers({
  errorStatus: errorStatusReducer,
  retrievedData: updateDataReducer,
  currentCards: currentCardsReducer,
  loading: isLoadingReducer,
  openingFilm: loadOpeningFilmReducer, 
  favorites: addFavoriteReducer
})

export default rootReducer;