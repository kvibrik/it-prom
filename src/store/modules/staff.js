import Vue from 'vue';
import axios from '@/plugins/axios';

const staffStore = {
  namespaced: true,
  state: {
    staff: {},
  },
  getters: {
    staff({ staff }) {
      return staff;
    },
  },
  mutations: {
    FETCH_STAFF(state, staff) {
      Vue.set(state, 'staff', staff);
    },
    DELETE_USER(state, user) {
      delete state.staff[user];
    },
  },
  actions: {
    async fetchStaff({ commit }) {
      const { staff } = await axios.get();
      const reducedStaff = staff.reduce((acc, current) => {
        acc[current.id] = current;
        return acc;
      }, {});
      commit('FETCH_STAFF', reducedStaff);
    },
    setStaff({ state, commit }) {
      const { staff } = state;
      commit('FETCH_STAFF', staff);
    },
    removeUser({ state, commit }, id) {
      const staff = JSON.parse(JSON.stringify(state.staff));
      delete staff[id];
      commit('FETCH_STAFF', staff);
    },
  },
};

export default staffStore;
