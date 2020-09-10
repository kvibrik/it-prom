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
        :dep="getDepartments"
        :prof="getProfessions"
        @removeUser="onRemoveUser"
        @openModal="onOpenModal"
      />
    </div>
  </BContainer>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import User from '@/components/User.vue';

export default {
  name: 'Staff',
  components: {
    User,
  },
  computed: {
    ...mapGetters('staff', ['staff']),
    ...mapGetters('departments', ['getDepartments']),
    ...mapGetters('professions', ['getProfessions']),
  },
  methods: {
    ...mapActions('staff', ['removeUser']),
    async onRemoveUser({ id }) {
      const isConfirmed = await this.$bvModal.msgBoxConfirm('Действительно удалить сотрудника?');
      if (isConfirmed) {
        this.removeUser(id);
      }
    },
    onOpenModal({ id }) {
      const user = this.staff[id];
      console.log(user);
    },
  },
  watch: {
    changeStaff() {
      return this.staff;
    },
  },
};
</script>

<style lang="sass" scoped></style>
