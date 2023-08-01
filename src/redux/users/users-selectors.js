export const selectFilter = state => state.users.filter;
export const selectUsers = state => state.users.data;

import { createSelector } from 'reselect';

export const selectFilteredUsers = createSelector(
  [selectUsers, selectFilter],
  (users, filter) => {
    switch (filter) {
      case 'Show All':
        return users;
      case 'Follow':
        return users.filter(user => !user.following);
      case 'Following':
        return users.filter(user => user.following);
      default:
        return users;
    }
  }
);

export default selectFilteredUsers;