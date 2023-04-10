import get from 'lodash/get.js';

const freeEmailDomains = [
  'gmail.com',
  'yandex.ru',
  'hotmail.com',
  'yahoo.com',
];

// BEGIN
export default (emails) => {
  const domains = emails.map((email) => _.last(email.split('@')));
  const counts = {};
  domains.forEach((domain) => {
    if (freeEmailDomains.includes(domain)) {
      counts[domain] = _.get(counts, domain, 0) + 1;
    }
  });
  return counts;
};
// END