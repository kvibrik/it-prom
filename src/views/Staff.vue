<template>
  <BContainer>
    <BRow class="bg-secondary p-3 mt-5 text-white">
      <BCol cols=4>ФИО</BCol>
      <BCol cols=4>Профессия</BCol>
      <BCol cols=3>Отдел</BCol>
      <BCol cols=3>Примечание</BCol>
      <BCol cols=1></BCol>
    </BRow>
    <Department :departments="getDepartments" />
  </BContainer>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Staff',
};
</script>

<style lang="sass" scoped></style>
