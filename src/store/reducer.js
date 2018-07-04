import { combineReducers } from 'redux';
import { auth } from '../containers/Login/reducer';

export const AppReducer = combineReducers({
  auth,
});
