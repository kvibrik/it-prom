import Vue from 'vue';
import axios from '@/plugins/axios';

const staffStore = {
  namespaced: true,
  state: {
    staff: {},
  },
  getters: {
    getStaff({ staff }) {
      return staff;
    },
  },
  mutations: {
    FETCH_STAFF(state, staff) {
      Vue.set(state, 'staff', staff);
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
  },
};

export default staffStore;
