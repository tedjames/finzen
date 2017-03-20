import { SUPPORT_MODAL } from '../Actions/types';

const INITIAL_STATE = {
  supportModal: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SUPPORT_MODAL:
      return { ...state, supportModal: action.payload };
    default:
      return state;
  }
};
