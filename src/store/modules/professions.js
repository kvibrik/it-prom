import axios from '@/plugins/axios';

const professionsStore = {
  namespaced: true,
  state: {},
  getters: {
    getProfessions() {},
  },
  mutations: {},
  actions: {
    async fetchProfessions() {
      const response = await axios.get();
      console.log(response.professions);
    },
  },
};

export default professionsStore;
