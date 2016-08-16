import qs from 'qs';
import get from './lib/get';
import Deque from 'collections/deque';
import LfuSet from 'collections/lfu-set';

const endpoint = (options = {}) => {
  const query = qs.stringify(Object.assign({
    limit: 5,
  }, options));

  return `http://api.openpseudonym.org/api/headings?${query}`;
};

const stage = document.getElementById('stage');
const render = x => stage.innerHTML = x;

const collection = new LfuSet(null, 3);
const queue = new Deque;

get(endpoint({ limit: 2 }))
  .then(({ headings }) => {
    collection.addEach(headings);
    console.log(collection);
  });
