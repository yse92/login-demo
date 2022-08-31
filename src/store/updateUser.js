export const updateUser = (users, id, key, value) => {
  users.map(user => ({
    ...user,
    key: user.id === id ? value : user.key,
  }));
};
