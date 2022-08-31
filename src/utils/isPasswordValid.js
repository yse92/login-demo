export const isPasswordValid = (password) => {
  let error = '';
  if (password.length === 0) {
    error = 'Password is required';
  } else if (password.length < 6) {
    error = 'Password should be minimum 6 characters';
  }
  return error;
};
