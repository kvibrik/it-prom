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
        @removeDep="onRemoveDep"
        @openModal="onOpenModal"
      />
    </div>
    <DepartmentModal
      v-if="openModal"
      @changeDepartment="onChangeDepartment"
      @cancel="closeModal"
      :dep="department"
      :deps="departments"
    />
    <BButton class="mt-4" variant="success" @click="onOpenModal">Добавить отдел</BButton>
  </BContainer>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import Department from '@/components/Department.vue';
import DepartmentModal from '@/components/DepartmentModal.vue';

export default {
  name: 'Departments',
  components: {
    Department,
    DepartmentModal,
  },
  data: () => ({
    openModal: false,
    department: {
      id: Math.random(),
      note: '',
      parentId: '',
    },
  }),
  computed: {
    ...mapGetters('departments', ['departments']),
  },
  methods: {
    ...mapActions('staff', ['removeUserProfession', 'removeUserDepartment']),
    ...mapActions('departments', ['removeDepartment', 'changeDepartment']),
    onOpenModal({ id }) {
      if (id) {
        const department = this.departments[id];
        this.department = department;
      }
      this.openModal = true;
    },
    async onRemoveDep({ id }) {
      const isConfirmed = await this.$bvModal.msgBoxConfirm('Действительно удалить профессию?');
      if (isConfirmed) {
        this.removeDepartment(id);
        this.removeUserDepartment(id);
      }
    },
    async onChangeDepartment(prof) {
      await this.changeDepartment(prof);
      this.closeModal();
    },
    closeModal() {
      this.openModal = false;
      this.department = {
        id: Math.random(),
        note: '',
        parentId: '',
      };
    },
  },
};
</script>

<style lang="sass" scoped></style>
