import {User} from "./User";

export const updateUser = (users: User[], id: number | string, key: string, value: string) => {
  users.map((user: User) => ({
    ...user,
    key: user.id === id ? value : key,
  }));
};
