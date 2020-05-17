import { combineReducers } from 'redux';
import listReducer from './listReducer';
import archiveReducer from './archiveReducer';

const rootReducer = combineReducers({
  lists: listReducer,
  archived: archiveReducer
});

export default rootReducer;
