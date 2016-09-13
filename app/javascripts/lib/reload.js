import CONFIG from '../config';

export default {
  bind: () => {
    if (location.search.match('kiosk')) {
      setTimeout(() => {
        return location.reload(true);
      }, CONFIG.reload_every_n_hours * 60 * 60 * 1000);
    }
  },
};
