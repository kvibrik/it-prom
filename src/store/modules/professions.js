import Vue from 'vue';
import axios from '@/plugins/axios';

const professionsStore = {
  namespaced: true,
  state: {
    professions: {},
  },
  getters: {
    professions({ professions }) {
      return professions;
    },
  },
  mutations: {
    FETCH_PROFESSIONS(state, professions) {
      Vue.set(state, 'professions', professions);
    },
  },
  actions: {
    async fetchProfessions({ commit }) {
      const { professions } = await axios.get();
      const reducedProfessions = professions.reduce((acc, current) => {
        acc[current.id] = current;
        return acc;
      }, {});
      commit('FETCH_PROFESSIONS', reducedProfessions);
    },
  },
};

export default professionsStore;
