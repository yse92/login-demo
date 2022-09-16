import {User} from "../store/User";

export const isUserExists = (users: User[], login: string) => {
  const usercheck = users.find(
    user => user.email === login || user.mobile === login,
  );
  return usercheck;
};
