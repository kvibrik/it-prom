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
    changeUser({ commit, state }, user) {
      const staff = JSON.parse(JSON.stringify(state.staff));
      staff[user.id] = user.user;
      commit('FETCH_STAFF', staff);
    },
    removeUserProfession({ state, commit }, id) {
      const staffArray = Object.values(JSON.parse(JSON.stringify(state.staff)));
      staffArray.forEach((user) => {
        if (user.professionId === id) {
          // eslint-disable-next-line no-param-reassign
          user.professionId = '';
        }
      });
      const staff = staffArray.reduce((acc, current) => {
        acc[current.id] = current;
        return acc;
      }, {});
      commit('FETCH_STAFF', staff);
    },
    removeUserDepartment({ state, commit }, id) {
      const staffArray = Object.values(JSON.parse(JSON.stringify(state.staff)));
      staffArray.forEach((user) => {
        if (user.departmentId === id) {
          // eslint-disable-next-line no-param-reassign
          user.departmentId = '';
        }
      });
      const staff = staffArray.reduce((acc, current) => {
        acc[current.id] = current;
        return acc;
      }, {});
      commit('FETCH_STAFF', staff);
    },
  },
};

export default staffStore;
