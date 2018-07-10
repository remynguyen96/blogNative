import { combineReducers } from 'redux';
import { memory } from '../containers/Memory/reducer';
import { homepage } from '../containers/Homepage/reducer';

export const AppReducer = combineReducers({
  memory,
  homepage,
});
