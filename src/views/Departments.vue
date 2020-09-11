<template>
  <BContainer>
    <BRow class="bg-secondary p-3 mt-5 text-white">
      <BCol cols=4>Наименование</BCol>
      <BCol cols=4>Примечание</BCol>
      <BCol cols=3>Родительский отдел</BCol>
      <BCol cols=1></BCol>
    </BRow>
    <div v-for="(dep, name, index) in departments" :key="index">
      <Department
        :dep="dep"
        :deps="departments"
        @removeProf="onRemoveDep"
        @openModal="onOpenModal"
      />
    </div>
    <BButton class="mt-4" variant="success" @click="onOpenModal">Добавить сотрудника</BButton>
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
  data: () => ({
    openModal: false,
    department: {
      id: Math.random(),
      note: '',
    },
  }),
  computed: {
    ...mapGetters('departments', ['departments']),
  },
  methods: {
    onOpenModal() {},
    onRemoveDep() {},
  },
};
</script>

<style lang="sass" scoped></style>
