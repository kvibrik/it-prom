import Vue from 'vue';
import axios from '@/plugins/axios';

const departmentsStore = {
  namespaced: true,
  state: {
    departments: {},
  },
  getters: {
    departments({ departments }) {
      return departments;
    },
  },
  mutations: {
    FETCH_DEPARTMENTS(state, departnments) {
      Vue.set(state, 'departments', departnments);
    },
  },
  actions: {
    async fetchDepartments({ commit }) {
      const { departments } = await axios.get();
      const reducedDepartments = departments.reduce((acc, current) => {
        acc[current.id] = current;
        return acc;
      }, {});
      commit('FETCH_DEPARTMENTS', reducedDepartments);
    },
    removeDepartment({ state, commit }, id) {
      const depArray = Object.values(JSON.parse(JSON.stringify(state.departments)));
      delete depArray[id];
      depArray.forEach((dep) => {
        if (dep.parentId === id) {
          // eslint-disable-next-line no-param-reassign
          dep.parentId = '';
        }
      });
      const departments = depArray.reduce((acc, current) => {
        acc[current.id] = current;
        return acc;
      }, {});
      delete departments[id];
      commit('FETCH_DEPARTMENTS', departments);
    },
    changeDepartment({ commit, state }, prof) {
      const departments = JSON.parse(JSON.stringify(state.departments));
      departments[prof.id] = prof.prof;
      commit('FETCH_DEPARTMENTS', departments);
    },
  },
};

export default departmentsStore;
