import {User} from "../store/User";

export const isPasswordMatches = (user: User, password: string) => {
  return password == user.password;
};
