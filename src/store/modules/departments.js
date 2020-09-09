import Vue from 'vue';
import axios from '@/plugins/axios';

const departmentsStore = {
  namespaced: true,
  state: {
    departments: {},
  },
  getters: {
    getDepartments({ departments }) {
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
  },
};

export default departmentsStore;
