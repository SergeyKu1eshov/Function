import _ from 'lodash';

// BEGIN
export default function average (...rest) {
    if (rest.length > 0) {
        let sum = _.sum(rest);
        return sum / rest.length; 
    } else {
        return null;
    }
}
// END