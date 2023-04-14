import get from 'lodash/get.js';

const freeEmailDomains = [
  'gmail.com',
  'yandex.ru',
  'hotmail.com',
  'yahoo.com',
];

// BEGIN
export default function getFreeDomainsCount (emails) {
  const domainCounts = {};
  emails.forEach((email) => {
  const domain = email.split('@')[1];
  if (freeEmailDomains.includes(domain)) {
  domainCounts[domain] = get(domainCounts, domain, 0) + 1;
  }
  });
  return domainCounts;
  };
// END