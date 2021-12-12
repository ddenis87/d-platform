import DAuthorization from './components/DAuthorization/DAuthorization.vue';
import DBtn from './components/DBtn/index';
import DNavigationPanel from './components/DNavigationPanel/DNavigationPanel.vue';
import DProgressSnack from './components/DProgressSnack/DProgressSnack.vue';
import DToolbar from './components/DToolbar/DToolbar.vue';

import authorization from './store/authorization';

export default {
  install(Vue, options = {}) {
    Vue.component('d-btn-form', DBtn.DBtnForm);
    Vue.component('d-btn-icon', DBtn.DBtnIcon);
    Vue.component('d-navigation-panel', DNavigationPanel);
    Vue.component('d-progress-snack', DProgressSnack);
    Vue.component('d-toolbar', DToolbar);

    if (options.store) {
      options.store.registerModule('authorization', authorization);
      Vue.component('d-authorization', DAuthorization);
    } else {
      console.log('Vuex not installed, following components are not available:');
      console.log('DAuthorization');
    }
  },
};
