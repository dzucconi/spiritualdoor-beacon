import qs from 'qs';
import get from './lib/get';
import Queue from './lib/queue';
import * as voice from './lib/voice';

const CONFIG = {
  speed: 5000,
};

const endpoint = (options = {}) => {
  const query = qs.stringify(Object.assign({
    limit: 5,
  }, options));

  return `http://api.openpseudonym.org/api/headings?${query}`;
};

const el = document.getElementById('app');
const render = x => el.innerHTML = x;

const collection = new Queue(x => {
  return [x.value, x.ip].join(':');
});

const fetch = {
  current: () =>
    get(endpoint({ limit: 5 })),
  next: (cursor =>
    get(endpoint({ limit: 50, next: cursor }))),
};

const ping = cursor => {
  const fetches = [fetch.current()];
  if (cursor) fetches.push(fetch.next(cursor));
  return Promise.all(fetches);
};

const STATE = {
  cursor: null,
  voice: 'Carla',
  ip: null,
  voices: {},
};

const refresh = () =>
  ping(STATE.cursor)
    .then(([current, archived]) => {
      const length = collection.length();

      STATE.cursor = current.next.cursor;
      // Queue up any new current headings
      collection.enqueue(current.headings);

      if (collection.length() > length) return;

      STATE.cursor = archived.next.cursor;
      // Queue up any archived headings
      collection.enqueue(archived.headings);
    });

const pop = () => {
  const [item, isStale] = collection.dequeue();

  // Toggle voice on IP changes
  if (STATE.ip !== item.ip) {
    STATE.ip = item.ip;
    STATE.voice = STATE.voice === 'Carla' ? 'Giorgio' : 'Carla';
  }

  render(`
    <h1>${item.wind}</h1>

    <h2>
      ${item.value}°<br>
      ${item.ip}<br>
      ${item.fingerprint}
    </h2>

    <div
      class='vane'
      style='transform: rotate(${item.value}deg);'>
    </div>
  `);

  STATE.voices[STATE.voice][item.wind].play();

  if (isStale) refresh();
};

export default () => {
  STATE.voices = voice.preload();

  refresh()
    .then(() => {
      pop();
      setInterval(pop, CONFIG.speed);
    });
};

// TODO:
// Q: What happens if we reach the limit of the API within queue capacity?
// A: Gives up nexting and just checks for new entries
// * Implement capacity
// ** Manage and delete indexed keys
