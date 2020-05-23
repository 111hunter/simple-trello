import { combineReducers } from 'redux';
import listReducer from './listReducer';
import stateEnhancer from './stateEnhancer';

const rootReducer = combineReducers({
  // lists: listReducer,
  board: stateEnhancer(listReducer),
});

export default rootReducer;
