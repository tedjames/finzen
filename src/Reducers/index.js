import { combineReducers } from 'redux';
import AuthReducer from './authReducer';
import MainRouterReducer from './mainRouterReducer';

export default combineReducers({
  auth: AuthReducer,
  mainRouter: MainRouterReducer
});
