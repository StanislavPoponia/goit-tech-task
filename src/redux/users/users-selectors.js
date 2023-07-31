export const selectFilter = state => state.users.filter;
export const selectUsers = state => state.users.data;

export const selectFilteredUsers = state => {
  const users = selectUsers(state);
  const filter = selectFilter(state);
  const filteredUsers = filter => {
    switch (filter) {
      case 'Show All':
        return users;
      case 'Follow':
        return users.filter(user => user.following === false);
      case 'Following':
        return users.filter(user => user.following === true);
      default:
        return users;
    }
  };

  return filteredUsers(filter);
};