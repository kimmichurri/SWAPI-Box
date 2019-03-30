import { combineReducers } from 'redux';
import { errorStatusReducer } from './errorStatusReducer';

const rootReducer = combineReducers({
  errorStatus: errorStatusReducer
})

export default rootReducer;