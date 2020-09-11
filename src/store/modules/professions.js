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
    removeProfession({ state, commit }, id) {
      const professions = JSON.parse(JSON.stringify(state.professions));
      delete professions[id];
      commit('FETCH_PROFESSIONS', professions);
    },
    changeProfession({ commit, state }, prof) {
      const professions = JSON.parse(JSON.stringify(state.professions));
      professions[prof.id] = prof.prof;
      commit('FETCH_PROFESSIONS', professions);
    },
  },
};

export default professionsStore;
