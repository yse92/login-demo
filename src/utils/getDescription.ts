import {User} from "../store/User";

export const getDescription = (user: User) => {
  let description = [];
  for (const [key, value] of Object.entries(user.extraInfo)) {
    description.push(`${key} ${value}`);
  }
  return description.join(' | ')
}
