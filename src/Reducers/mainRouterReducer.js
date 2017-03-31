import { REDIRECT } from '../Actions/types';

const INITIAL_STATE = {
  currentPage: 'overview',
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REDIRECT:
      return { ...state, currentPage: action.payload };
    default:
      return state;
  }
};
