import data from './data';

const voices = [
  'Carla',
  'Giorgio'
];

export const load = (voice, wind) =>
  new Audio(`voices/${voice}/${wind}.mp3`);

export const preload = () => {
  return data.reduce((memo, { wind }) => {
    voices.forEach(voice => {
      memo[voice] = memo[voice] || {};
      memo[voice][wind] = load(voice, wind);
    });

    return memo;
  }, {});
};
