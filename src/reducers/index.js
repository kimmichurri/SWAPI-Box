import { combineReducers } from 'redux';
import { errorStatusReducer } from './errorStatusReducer';
import { updateDataReducer } from './updateDataReducer';
import { currentCardsReducer } from './currentCardsReducer';

const rootReducer = combineReducers({
  errorStatus: errorStatusReducer,
  retrievedData: updateDataReducer,
  currentCards: currentCardsReducer
})

export default rootReducer;