import DNavigationPanel from './components/DNavigationPanel.vue';
import DProgressSnack from './components/DProgressSnack/DProgressSnack.vue';

export default {
  install(Vue) {
    Vue.component('d-navigation-panel', DNavigationPanel);
    Vue.component('d-progress-snack', DProgressSnack);
  },
};