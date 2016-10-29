const schedule = {
  0: 0.125,
  1: 0.125,
  2: 0.125,
  3: 0.125,
  4: 0.125,
  5: 0.125,
  6: 0.125,
  7: 0.5,
  8: 0.5,
  9: 0.5,
  10: 0.5,
  11: 0.5,
  12: 0.5,
  13: 0.5,
  14: 0.5,
  15: 0.5,
  16: 0.5,
  17: 0.5,
  18: 0.5,
  19: 0.5,
  20: 0.5,
  21: 0.5,
  22: 0.5,
  23: 0.125,
};

export default ({
  adjustVolume: voice => {
    const hour = new Date().getHours();
    voice.volume = schedule[hour] || 1;
    return voice;
  },
});
