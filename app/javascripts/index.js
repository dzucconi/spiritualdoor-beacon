import qs from 'qs';
import moment from 'moment';
import get from './lib/get';
import api from './lib/api';
import Queue from './lib/queue';
import * as voice from './lib/voice';
import truncate from './lib/truncate';
import reload from './lib/reload';
import schedule from './lib/schedule';

import CONFIG from './config';
const STATE = {
  cursor: null,
  voice: 'Giorgio',
  ip: null,
  voices: {},
  isMute: false,
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

let pinging = false;
const ping = cursor => {
  if (pinging) {
    const err = new Error('Waiting for previous request to resolve');
    return Promise.reject(err);
  }

  pinging = true;

  const fetches = [fetch.current()];

  if (cursor) fetches.push(fetch.next(cursor));

  return Promise.all(fetches).then(res => {
    pinging = false;
    return res;
  });
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
    }, err => console.warn(err));

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
        <a
          href='http://browser.openpseudonym.org/#!/data?ip=${heading.ip}'
          target='_blank'>
          ${heading.ip}
        </a>
      </div>

      <div class='metadata__fingerprint'>
        <a
          href='http://browser.openpseudonym.org/#!/data?fingerprint=${heading.fingerprint}'
          target='_blank'>
          ${heading.fingerprint}
        </a>
      </div>

      <div class='metadata__fingerprint-compact'>
        ${truncate(heading.fingerprint, 7, '')}
      </div>
    </div>

    ${STATE.isKiosk ? `
      <div class='debug'>
        ${collection.cursor}:${collection.length()}:${collection.total()}
      </div>
    ` : ''}
  `);

  if (!STATE.isMute) {
    const voice = STATE.voices[STATE.voice][heading.wind];

    if (STATE.isKiosk) schedule.adjustVolume(voice);

    voice.play();
  }

  if (isStale) refresh();
};

export default () => {
  const PARAMS = qs.parse(location.search.slice(1));

  STATE.isMute = PARAMS.mute === 'true';

  if (location.search.match('kiosk')) {
    STATE.isKiosk = true;
    reload.bind();
  }

  if (!STATE.isMute) {
    STATE.voices = voice.preload();
  }

  refresh()
    .then(() => {
      pop();
      setInterval(pop, parseInt(PARAMS.speed || CONFIG.speed));
    });
};
