import qs from 'qs';

const API_ROOT = 'http://api.openpseudonym.org/api';
const defaults = {
  limit: 50,
};

const constrict = (obj) => {
  for(let k in obj) {
    if (!obj[k]) delete obj[k];
  }
  return obj;
};

export default (options = {}) => {
  const query = qs.stringify(Object.assign(defaults, constrict(options)));
  return `${API_ROOT}/headings?${query}`;
};
