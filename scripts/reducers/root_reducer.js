import { combineReducers } from 'redux';
import notes_list from './note_reducer';

const rootReducer = combineReducers({
  notes_list
});

export default rootReducer;