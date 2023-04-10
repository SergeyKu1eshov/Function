import { sortBy } from 'lodash';

// BEGIN
const takeOldest = (users, n = 1) => {
    const sortedUsers = sortBy(users, user => Date.parse(user.birthday));
    return sortedUsers.slice(0, n);
  };
  
  export default takeOldest;
// END