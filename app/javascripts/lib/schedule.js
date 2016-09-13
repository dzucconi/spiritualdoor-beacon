const schedule = {
  0: 0.5,
  1: 0.5,
  2: 0.5,
  3: 0.5,
  4: 0.5,
  5: 0.5,
  6: 0.5,
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
  20: 0.5,
  21: 0.5,
  22: 0.5,
  23: 0.5,
};

export default ({
  adjustVolume: voice => {
    const hour = new Date().getHours();
    voice.volume = schedule[hour] || 1;
    return voice;
  },
});
