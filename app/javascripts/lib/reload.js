const minutes = 180; // 3 hours

export default {
  bind: () => {
    if (location.search.match('kiosk')) {
      setTimeout(() => {
        return location.reload(true);
      }, minutes * 60 * 1000);
    }
  },
};
