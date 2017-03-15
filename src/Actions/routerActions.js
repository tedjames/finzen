import { REDIRECT } from '../Actions/types'

export const redirect = (route) => {
  return {
    type: REDIRECT,
    payload: route
  };
};
