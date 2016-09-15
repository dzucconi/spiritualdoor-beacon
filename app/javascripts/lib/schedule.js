const schedule = {
  0: 0.25,
  1: 0.25,
  2: 0.25,
  3: 0.25,
  4: 0.25,
  5: 0.25,
  6: 0.25,
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
  23: 0.25,
};

export default ({
  adjustVolume: voice => {
    const hour = new Date().getHours();
    voice.volume = schedule[hour] || 1;
    return voice;
  },
});
