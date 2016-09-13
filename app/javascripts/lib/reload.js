import CONFIG from '../config';

export default {
  bind: () => {
    setTimeout(() => {
      return location.reload(true);
    }, CONFIG.reload_every_n_hours * 60 * 60 * 1000);
  },
};
