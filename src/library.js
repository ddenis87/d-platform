import { DBtnForm, DBtnIcon } from './components/DBtn/index';
import DNavigationPanel from './components/DNavigationPanel.vue';
import DProgressSnack from './components/DProgressSnack/DProgressSnack.vue';
import DToolbar from './components/DToolbar/DToolbar.vue';

export default {
  install(Vue) {
    Vue.component('d-btn-form', DBtnForm);
    Vue.component('d-btn-icon', DBtnIcon);
    Vue.component('d-navigation-panel', DNavigationPanel);
    Vue.component('d-progress-snack', DProgressSnack);
    Vue.component('d-toolbar', DToolbar);
  },
};
