import Vue from 'vue';
import Vuex from 'vuex';
import professions from './modules/professions';
import departments from './modules/departments';
import staff from './modules/staff';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    professions,
    departments,
    staff,
  },
});
