import Vue from 'vue';
import Vuex from 'vuex';
import professions from './modules/professions';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    professions,
  },
});
