import {isMobileValid} from './isMobileValid';

export const isEmailValid = (email) => {
  let error = '';
  //if mobile number
  if(/[0-9]/.test(email)) {
    error = isMobileValid(email)
  }
  if (email.length === 0) {
    error = 'Email is required';
  } else if (email.length < 6) {
    error = 'Email should be minimum 6 characters';
  } else if (email.indexOf(' ') >= 0) {
    error = 'Email cannot contain spaces';
  }
  return error;
};
