export const isMobileValid = (mobile) => {
  let error = '';
  if (mobile.match(/\d/g).length !== 10 || mobile.length === 0) {
    error = 'Invalid phone number!';
  }
  return error;
};
