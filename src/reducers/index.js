import { combineReducers } from 'redux';
import { errorStatusReducer } from './errorStatusReducer';
import { updateDataReducer } from './updateDataReducer';
import { currentCardsReducer } from './currentCardsReducer';
import { isLoadingReducer } from './isLoadingReducer';

const rootReducer = combineReducers({
  errorStatus: errorStatusReducer,
  retrievedData: updateDataReducer,
  currentCards: currentCardsReducer,
  loading: isLoadingReducer
})

export default rootReducer;