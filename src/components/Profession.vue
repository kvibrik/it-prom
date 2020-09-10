<template>
  <div>
    <BRow class="p-2" hover v-for="item in professions" :key=item.id>
      <BCol cols=6>{{item.name}}</BCol>
      <BCol cols=5>{{item.note}}</BCol>
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
export default {
  name: 'Profession',
  props: ['professions'],
};
</script>

<style lang="scss" scoped>

</style>
