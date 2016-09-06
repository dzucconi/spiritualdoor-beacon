import moment from 'moment';
import get from './lib/get';
import api from './lib/api';
import Queue from './lib/queue';
import * as voice from './lib/voice';

import CONFIG from './config';
const STATE = {
  cursor: null,
  voice: 'Giorgio',
  ip: null,
  voices: {},
};

const el = document.getElementById('app');
const render = x => el.innerHTML = x;

const collection = new Queue({
  capacity: CONFIG.capacity,
  indexBy: x => [x.value, x.ip].join(':'),
});

const fetch = {
  current: () => get(api({ limit: 150 })),
  next: cursor => get(api({ limit: 150, next: cursor })),
};

const ping = cursor => {
  const fetches = [fetch.current()];
  if (cursor) fetches.push(fetch.next(cursor));
  return Promise.all(fetches);
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
  const [heading, isStale] = collection.dequeue();

  // Toggle voice on IP changes
  if (STATE.ip !== heading.ip) {
    STATE.ip = heading.ip;
    STATE.voice = STATE.voice === 'Giorgio' ? 'Carla' : 'Giorgio';
  }

  const timestamp = moment(heading.created_at);

  render(`
    <h1 class='wind'>
      ${heading.wind}
    </h1>

    <div class='metadata'>
      <div class='metadata__value'>
        ${heading.abbreviation} ${heading.value}°
      </div>

      <div class='metadata__timestamp'>
        <time datetime='${heading.created_at}'>
          ${timestamp.format('dddd, MMMM Do YYYY, h')}<span>:</span>${timestamp.format('mm')}<span>:</span>${timestamp.format('ss a')}
        </time>
      </div>

      <div class='metadata__ip'>
        ${heading.ip}
      </div>

      <div class='metadata__fingerprint'>
        ${heading.fingerprint}
      </div>
    </div>

    <div class='debug'>
      Length: ${collection.length()}<br>
      Total: ${collection.total()}
    </div>
  `);

  STATE.voices[STATE.voice][heading.wind].play();

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
