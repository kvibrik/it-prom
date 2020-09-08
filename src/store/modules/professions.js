import Vue from 'vue';
import axios from '@/plugins/axios';

const professionsStore = {
  namespaced: true,
  state: {
    professions: [],
  },
  getters: {
    getProfessions() {},
  },
  mutations: {
    FETCH_PROFESSIONS(state, professions) {
      Vue.set(state, 'professions', [...professions]);
    },
  },
  actions: {
    async fetchProfessions({ commit }) {
      const { professions } = await axios.get();
      commit('FETCH_PROFESSIONS', professions);
    },
  },
};

export default professionsStore;
