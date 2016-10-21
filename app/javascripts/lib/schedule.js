const schedule = {
  0: 0.125,
  1: 0.125,
  2: 0.125,
  3: 0.125,
  4: 0.125,
  5: 0.125,
  6: 0.125,
  7: 1,
  8: 1,
  9: 1,
  10: 1,
  11: 1,
  12: 1,
  13: 1,
  14: 1,
  15: 1,
  16: 1,
  17: 1,
  18: 1,
  19: 1,
  20: 1,
  21: 1,
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
