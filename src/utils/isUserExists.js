export const isUserExists = (users, login) => {
  const usercheck = users.find(
    user => user.email === login || user.mobile === login,
  );
  return usercheck;
};
