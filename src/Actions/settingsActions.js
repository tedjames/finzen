import { SUPPORT_MODAL } from './types';

export const showModal = () => {
  return {
    type: SUPPORT_MODAL,
    payload: true
  };
};

export const hideModal = () => {
  return {
    type: SUPPORT_MODAL,
    payload: false
  };
};
