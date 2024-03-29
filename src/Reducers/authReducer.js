import {
  NAME_CHANGED,
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
  RESET_AUTH_ERROR,
  SET_AUTH_ROUTE,
  PASSWORD_MISMATCH,
  SHOW_REGISTER,
  HIDE_REGISTER
} from '../Actions/types';

const INITIAL_STATE = {
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
  user: null,
  error: '',
  loading: false,
  showRegisterModal: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PASSWORD_MISMATCH:
      return { ...state, error: 'Passwords do not match' };
    case SET_AUTH_ROUTE:
      return { ...state, currentPage: action.payload };
    case NAME_CHANGED:
      return { ...state, name: action.payload };
    case EMAIL_CHANGED:
      return { ...state, email: action.payload };
    // Registration
    case SHOW_REGISTER:
      return { ...state, showRegisterModal: true, error: '', password: '', confirmPassword: '' };
    case HIDE_REGISTER:
      return { ...state, showRegisterModal: false, error: '', password: '', confirmPassword: '' };
    case PASSWORD_CHANGED:
      return { ...state, password: action.payload };
    case CONFIRM_PASSWORD_CHANGED:
      return { ...state, confirmPassword: action.payload };
    case RESET_AUTH_FORM:
      return { ...state, ...INITIAL_STATE };
    case RESET_AUTH_ERROR:
      return { ...state, error: '' };
    case LOGIN_USER:
      return { ...state, loading: true, error: '' };
    case LOGIN_USER_SUCCESS:
      return { ...state, ...INITIAL_STATE, error: '', user: action.payload };
    case LOGIN_USER_FAIL:
      return { ...state, error: 'Authentication Failed', password: '', loading: false };
    case REGISTER_USER:
      return { ...state, loading: true, error: '' };
    case REGISTER_USER_FAIL:
      return { ...state, error: action.payload, loading: false };
    case REGISTER_USER_SUCCESS:
      return { ...state, ...INITIAL_STATE, error: '', user: action.payload };
    default:
      return state;
  }
};
