<template>
  <BContainer>
    <BRow class="bg-secondary p-3 mt-5 text-white">
      <BCol cols=6>Наименование</BCol>
      <BCol cols=5>Примечание</BCol>
      <BCol cols=1></BCol>
    </BRow>
    <div v-for="(prof, name, index) in professions" :key="index">
      <Profession :prof="prof" @removeProf="onRemoveProf" @openModal="onOpenModal" />
    </div>
    <ProfModal
      :prof="profession"
      v-if="openModal"
      @changeUser="onChangeProfession"
      @cancel="closeModal"
      />
    <BButton class="mt-4" variant="success" @click="onOpenModal">Добавить сотрудника</BButton>
  </BContainer>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import Profession from '@/components/Profession.vue';
import ProfModal from '@/components/ProfModal.vue';

export default {
  name: 'Professions',
  components: {
    Profession,
    ProfModal,
  },
  data: () => ({
    openModal: false,
    profession: {
      id: Math.random(),
      note: '',
    },
  }),
  computed: {
    ...mapGetters('professions', ['professions']),
  },
  methods: {
    ...mapActions('professions', ['removeProfession', 'changeProfession']),
    ...mapActions('staff', ['removeUserProfession']),
    async onRemoveProf({ id }) {
      const isConfirmed = await this.$bvModal.msgBoxConfirm('Действительно удалить профессию?');
      if (isConfirmed) {
        this.removeProfession(id);
        this.removeUserProfession(id);
      }
    },
    onOpenModal({ id }) {
      if (id) {
        const profession = this.professions[id];
        this.profession = profession;
      }
      this.openModal = true;
    },
    onChangeProfession(prof) {
      this.changeProfession(prof);
      this.openModal = false;
    },

    closeModal() {
      this.openModal = false;
      this.profession = {
        id: Math.random(),
        note: '',
      };
    },
  },
};
</script>

<style lang="sass" scoped></style>
