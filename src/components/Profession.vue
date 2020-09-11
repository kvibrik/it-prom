<template>
  <div>
    <BRow class="pt-3 pb-3 border">
      <BCol cols=6>{{prof.name}}</BCol>
      <BCol cols=5>{{prof.note}}</BCol>
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
  name: 'Profession',
  props: ['prof'],
  methods: {
    emitRemoveEvent() {
      this.$emit('removeProf', { id: this.prof.id });
    },
    emitOpenModal() {
      this.$emit('openModal', { id: this.prof.id });
    },
  },
};
</script>

<style lang="scss" scoped>

</style>
