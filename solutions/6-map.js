// BEGIN
import _ from 'lodash';
export default function getChildren (users) {
    const childrenNew = _.map(users, ({ children }) => children);
    return childrenNew.flat();
    }
// END