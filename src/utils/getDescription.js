export const getDescription = (user) => {
  let description = [];
  for (const [key, value] of Object.entries(user.extraInfo)) {
    description.push(`${key} ${value}`);
  }
  return description.join(' | ')
}
