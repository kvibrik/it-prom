<template>
  <BContainer>
    <BRow class="bg-secondary p-3 mt-5 text-white">
      <BCol cols=3>ФИО</BCol>
      <BCol cols=3>Профессия</BCol>
      <BCol cols=2>Отдел</BCol>
      <BCol cols=3>Примечание</BCol>
      <BCol cols=1></BCol>
    </BRow>
    <div v-for="(user, name, index) in staff" :key="index">
      <User
        :user="user"
        :dep="departments"
        :prof="professions"
        @removeUser="onRemoveUser"
        @openModal="onOpenModal"
      />
    </div>
    <UserModal
      :user="user"
      :prof="professions"
      :dep="departments"
      v-if="openModal"
      @changeUser="onChangeUser"
      @cancel="closeModal"
    />
    <BButton class="mt-4" variant="success" @click="onOpenModal">Добавить сотрудника</BButton>
  </BContainer>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import User from '@/components/User.vue';
import UserModal from '@/components/UserModal.vue';

export default {
  name: 'Staff',
  components: {
    User,
    UserModal,
  },
  data: () => ({
    user: {
      id: Math.random(),
      name: {
        firstName: '',
        secondName: '',
        lastName: '',
      },
      professionId: '',
      departmentId: '',
      note: '',
    },
    openModal: false,
  }),
  computed: {
    ...mapGetters('staff', ['staff']),
    ...mapGetters('departments', ['departments']),
    ...mapGetters('professions', ['professions']),
  },
  methods: {
    ...mapActions('staff', ['removeUser', 'changeUser']),
    async onRemoveUser({ id }) {
      const isConfirmed = await this.$bvModal.msgBoxConfirm('Действительно удалить сотрудника?');
      if (isConfirmed) {
        this.removeUser(id);
      }
    },
    onOpenModal({ id }) {
      if (id) {
        const user = this.staff[id];
        this.user = user;
      }
      this.openModal = true;
    },
    onChangeUser(user) {
      this.changeUser(user);
      this.closeModal();
    },
    closeModal() {
      this.openModal = false;
      this.user = {
        id: Math.random(),
        name: {
          firstName: '',
          secondName: '',
          lastName: '',
        },
        professionId: '',
        departmentId: '',
        note: '',
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  position: relative;
}
</style>
