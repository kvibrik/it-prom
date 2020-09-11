<template>
  <div class="modal">
    <div class="modal-body">
      <BForm @submit="onSubmit" class="modal-content">
        <BFormGroup label-cols-sm="4" label-cols-lg="3" label="Профессия" label-for="user-last"
        >
          <BFormInput id="user-last" v-model="profInfo.name" required></BFormInput>
        </BFormGroup>
        <BFormGroup label-cols-sm="4" label-cols-lg="3" label="Примечание" label-for="user-note">
          <BFormInput id="user-note" v-model="profInfo.note"></BFormInput>
        </BFormGroup>
        <b-button class="mb-2" type="submit" variant="primary">Сохранить</b-button>
        <b-button variant="secondary" @click="onCancel">Отмена</b-button>
      </BForm>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProfModal',
  props: {
    prof: {
      type: Object,
    },
  },
  data: () => ({
    profInfo: {},
  }),
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      this.$emit('changeUser', { id: this.profInfo.id, prof: this.profInfo });
    },
    onCancel() {
      this.$emit('cancel');
    },
  },
  beforeMount() {
    const prof = JSON.parse(JSON.stringify(this.prof));
    this.profInfo = prof;
  },
};
</script>

<style lang="scss" scoped>
.modal {
  display: block;
  right: 0;
  bottom: 0;
  overflow-x: hidden;
  overflow-y: auto;
  background-color: rgba(51, 51, 51, 0.6);
  z-index: 1000;

  &-body {
    min-height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
  }

  &-content {
    position: relative;
    width: 100%;
    max-width: 700px;
    padding: 35px;
    border-radius: 8px;
  }
}
</style>
