<template>
  <div id="app">
    <Header />
    <router-view />
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import { mapActions } from 'vuex';

export default {
  name: 'App',
  components: {
    Header,
  },
  mounted() {
    this.fetchProfessions();
    this.fetchDepartments();
    this.fetchStaff();
  },
  methods: {
    ...mapActions('professions', ['fetchProfessions']),
    ...mapActions('departments', ['fetchDepartments']),
    ...mapActions('staff', ['fetchStaff']),
  },

};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.pointer {
  cursor: pointer;
}
</style>
