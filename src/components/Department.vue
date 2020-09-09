<template>
  <div>
    <BRow class="p-2" hover v-for="(value, name, index) in departments" :key="index">
      <BCol cols=4>{{value.name}}</BCol>
      <BCol cols=4>{{value.note}}</BCol>
      <BCol cols=3>{{departments[value.parentId] ? departments[value.parentId]['name'] : ''}}</BCol>
      <BCol class="h5" cols=1>
        <BIconstack class="pointer" variant="success">
          <BIcon stacked icon="pencil"></BIcon>
          <BIcon stacked icon="square" scale="1.2"></BIcon>
        </BIconstack>
        <BIcon class="ml-3 pointer" icon="x-circle" variant="danger"></BIcon>
      </BCol>
    </BRow>
  </div>
</template>

<script>
// import { mapGetters } from 'vuex';

export default {
  name: 'Department',
  data: () => ({
    parent: {},
  }),
  props: ['departments'],
  computed: {
  },
};
</script>

<style lang="scss" scoped>
.pointer {
  cursor: pointer;
}
</style>
