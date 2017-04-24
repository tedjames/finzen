import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  CONFIRM_PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER,
  REGISTER_USER_FAIL,
  REGISTER_USER_SUCCESS,
  REGISTER_USER,
  RESET_AUTH_FORM,
  SHOW_REGISTER,
  HIDE_REGISTER,
  RESET_AUTH_ERROR,
  PASSWORD_MISMATCH
} from './types';

export const passwordMismatch = () => {
  return {
    type: PASSWORD_MISMATCH
  };
};

export const resetAuthForm = () => {
  return {
    type: RESET_AUTH_FORM
  };
};

export const resetAuthError = () => {
  return {
    type: RESET_AUTH_ERROR
  };
};

export const showRegister = () => {
  return {
    type: SHOW_REGISTER
  };
};

export const hideRegister = () => {
  return {
    type: HIDE_REGISTER
  };
};

// Forms

export const emailChanged = (text) => {
  return {
    type: EMAIL_CHANGED,
    payload: text
  };
};

export const passwordChanged = (text) => {
  return {
    type: PASSWORD_CHANGED,
    payload: text
  };
};

export const confirmPasswordChanged = (text) => {
  return {
    type: CONFIRM_PASSWORD_CHANGED,
    payload: text
  };
};

export const loginUser = ({ email, password }) => {
  return (dispatch) => {
    dispatch({ type: LOGIN_USER });
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(user => loginUserSuccess(dispatch, user))
      .catch((err) => {
        console.log(err);
        loginUserFail(dispatch);
      });
  };
};

export const registerUser = ({ email, password }) => {
  return (dispatch) => {
    dispatch({ type: REGISTER_USER });
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(user => registerUserSuccess(dispatch, user))
      .catch((err) => {
        console.log(err);
        registerUserFail(dispatch, err);
      });
  };
};


const loginUserFail = (dispatch) => {
  dispatch({ type: LOGIN_USER_FAIL, payload: 'Authentication Failed' });
};

const loginUserSuccess = (dispatch, user) => {
  dispatch({ type: LOGIN_USER_SUCCESS, payload: user });
  Actions.app();
};

const registerUserFail = (dispatch, err) => {
  dispatch({ type: REGISTER_USER_FAIL, payload: err.message });
};

const registerUserSuccess = (dispatch, user) => {
  dispatch({ type: REGISTER_USER_SUCCESS, payload: user });
  Actions.app();
};
