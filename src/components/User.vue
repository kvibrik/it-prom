<template>
  <BRow class="mt-3 mb-3" hover>
    <BCol cols=3>{{getFullName}}</BCol>
    <BCol cols=3>{{getProfession}}</BCol>
    <BCol cols=2>{{getDepartment}}</BCol>
    <BCol cols=3>{{user.note}}</BCol>
    <BCol class="h5" cols=1>
      <BIconstack class="pointer" variant="success" @click="emitOpenModal">
        <BIcon stacked icon="pencil"></BIcon>
        <BIcon stacked icon="square" scale="1.2"></BIcon>
      </BIconstack>
      <BIcon
        class="ml-3 pointer"
        icon="x-circle"
        variant="danger"
        @click="emitRemoveEvent"
      ></BIcon>
    </BCol>
  </BRow>
</template>

<script>

export default {
  name: 'User',
  props: ['user', 'dep', 'prof'],
  methods: {
    emitRemoveEvent() {
      this.$emit('removeUser', { id: this.user.id });
    },
    emitOpenModal() {
      this.$emit('openModal', { id: this.user.id });
    },
  },
  computed: {
    getFullName() {
      return `${this.user.name.lastName} ${this.user.name.firstName} ${this.user.name.secondName}`;
    },
    getProfession() {
      const profession = this.user.professionId;
      return this.prof[profession].name;
    },
    getDepartment() {
      const department = this.user.departmentId;
      return this.dep[department].name;
    },
  },
};
</script>

<style lang="scss" scoped></style>
