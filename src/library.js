import { DBtnForm, DBtnIcon } from './components/DBtn/index';
import DNavigationPanel from './components/DNavigationPanel.vue';
import DProgressSnack from './components/DProgressSnack/DProgressSnack.vue';

export default {
  install(Vue) {
    Vue.component('d-btn-form', DBtnForm);
    Vue.component('d-btn-icon', DBtnIcon);
    Vue.component('d-navigation-panel', DNavigationPanel);
    Vue.component('d-progress-snack', DProgressSnack);
  },
};
