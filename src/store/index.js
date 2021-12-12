import Vue from 'vue';
import Vuex from 'vuex';
import ApiRESTful from '../services/apiRESTful';
import authorization from './authorization';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    apiRS: new ApiRESTful('http://195.2.84.28/', 'api/v2/'),
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    authorization,
  },
});
