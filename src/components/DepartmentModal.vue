<template>
  <div class="modal">
    <div class="modal-body">
      <BForm @submit="onSubmit" class="modal-content">
        <BFormGroup label-cols-sm="4" label-cols-lg="3" label="Профессия" label-for="user-last"
        >
          <BFormInput id="user-last" v-model="depInfo.name" required></BFormInput>
        </BFormGroup>
        <BFormGroup label-cols-sm="4" label-cols-lg="3" label="Примечание" label-for="user-note">
          <BFormInput id="user-note" v-model="depInfo.note"></BFormInput>
        </BFormGroup>
        <BFormGroup
          label-cols-sm="4"
          label-cols-lg="3"
          label="Родительский отдел"
          label-for="user-dep"
        >
          <BFormSelect
            id="user-dep"
            v-model="selectedDep"
            :options="departments"
            @change="onDepartmentChange"
          ></BFormSelect>
        </BFormGroup>
        <b-button class="mb-2" type="submit" variant="primary">Сохранить</b-button>
        <b-button variant="secondary" @click="onCancel">Отмена</b-button>
      </BForm>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DepartmentModal',
  props: {
    dep: {
      type: Object,
    },
    deps: {
      type: Object,
    },
  },
  data: () => ({
    depInfo: {},
    departments: [
      { value: '', text: '' },
    ],
    selectedDep: null,
  }),
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      this.$emit('changeDepartment', { id: this.depInfo.id, prof: this.depInfo });
    },
    onCancel() {
      this.$emit('cancel');
    },
    onDepartmentChange() {
      this.depInfo.parentId = this.selectedDep;
    },
  },
  beforeMount() {
    const dep = JSON.parse(JSON.stringify(this.dep));
    const departments = Object.values(this.deps);
    const newDeps = departments.map((item) => ({
      value: item.id,
      text: item.name,
    }));
    const filteredDeps = newDeps.filter((item) => item.value !== dep.id);

    this.depInfo = dep;
    this.selectedDep = dep.parentId;
    filteredDeps.forEach((item) => {
      this.departments.push(item);
    });
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
