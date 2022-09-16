import {isEmailValid} from './isEmailValid';

export const validate = (login: string) => {
  let error = '';
  error = isEmailValid(login)

  return error;
};
