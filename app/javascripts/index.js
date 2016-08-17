import qs from 'qs';
import get from './lib/get';
import Queue from './lib/queue';

const endpoint = (options = {}) => {
  const query = qs.stringify(Object.assign({
    limit: 5,
  }, options));

  return `http://api.openpseudonym.org/api/headings?${query}`;
};

const el = document.getElementById('app');
const render = x => el.innerHTML = x;

const collection = new Queue;

const fetch = {
  current: () =>
    get(endpoint({ limit: 5 })),
  next: (cursor =>
    get(endpoint({ limit: 5, next: cursor }))),
};

const ping = cursor => {
  const fetches = [fetch.current()];
  if (cursor) fetches.push(fetch.next(cursor));
  return Promise.all(fetches);
};

const STATE = {
  cursor: null,
};

const refresh = () =>
  ping(STATE.cursor)
    .then(([current, archived]) => {
      const length = collection.length();

      STATE.cursor = current.next.cursor;
      // Queue up any new current headings
      collection.enqueue(current.headings);

      console.log(collection.total());

      if (collection.length() > length) return;

      STATE.cursor = archived.next.cursor;
      // Queue up any archived headings
      collection.enqueue(archived.headings);
    });

const init = () =>
  setInterval(() => {
    const [item, isStale] = collection.dequeue();

    render(`
      <h1>${item.wind}</h1>
      <h2>${item.value}°</h2>
    `);

    if (isStale) refresh();
  }, 2500);

init();
refresh();
