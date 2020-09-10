<template>
  <BContainer>
    <BRow class="bg-secondary p-3 mt-5 text-white">
      <BCol cols=6>Наименование</BCol>
      <BCol cols=5>Примечание</BCol>
      <BCol cols=1></BCol>
    </BRow>
    <Profession :professions="professions" />
  </BContainer>
</template>

<script>
import { mapGetters } from 'vuex';
import Profession from '@/components/Profession.vue';

export default {
  name: 'Professions',
  components: {
    Profession,
  },
  computed: {
    ...mapGetters('professions', ['professions']),
  },
};
</script>

<style lang="sass" scoped></style>
