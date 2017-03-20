import { combineReducers } from 'redux';
import AuthReducer from './authReducer';
import MainRouterReducer from './mainRouterReducer';
import settingsReducer from './settingsReducer';

export default combineReducers({
  auth: AuthReducer,
  mainRouter: MainRouterReducer,
  settings: settingsReducer
});
