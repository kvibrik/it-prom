<template>
  <div>
    <BRow class="pt-3 pb-3 border">
      <BCol cols=4>{{dep.name}}</BCol>
      <BCol cols=4>{{dep.note}}</BCol>
      <BCol cols=3>{{getParentDep}}</BCol>
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
  </div>
</template>

<script>
export default {
  name: 'Department',
  props: ['dep', 'deps'],
  methods: {
    emitRemoveEvent() {
      this.$emit('removeDep', { id: this.dep.id });
    },
    emitOpenModal() {
      this.$emit('openModal', { id: this.dep.id });
    },
  },
  computed: {
    getParentDep() {
      const parent = this.dep.parentId;
      if (!parent) return '';
      return this.deps[parent].name;
    },
  },
};
</script>

<style lang="scss" scoped>
.pointer {
  cursor: pointer;
}
</style>
