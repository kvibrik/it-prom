<template>
  <BContainer>
    <BRow class="bg-secondary p-3 mt-5 text-white">
      <BCol cols=4>Наименование</BCol>
      <BCol cols=4>Примечание</BCol>
      <BCol cols=3>Родительский отдел</BCol>
      <BCol cols=1></BCol>
    </BRow>
    <Department :departments="departments" />
  </BContainer>
</template>

<script>
import { mapGetters } from 'vuex';
import Department from '@/components/Department.vue';

export default {
  name: 'Departments',
  components: {
    Department,
  },
  computed: {
    ...mapGetters('departments', ['departments']),
  },
};
</script>

<style lang="sass" scoped></style>
