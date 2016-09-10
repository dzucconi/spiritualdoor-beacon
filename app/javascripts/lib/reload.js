const hours = 12;

export default {
  bind: () => {
    if (location.search.match('kiosk')) {
      setTimeout(() => {
        return location.reload(true);
      }, hours * 60 * 60 * 1000);
    }
  },
};
