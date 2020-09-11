<template>
  <div class="modal">
    <div class="modal-body">
      <BForm @submit="onSubmit" class="modal-content">
        <BFormGroup label-cols-sm="4" label-cols-lg="3" label="Фамилия" label-for="user-last"
        >
          <BFormInput id="user-last" v-model="userInfo.name.lastName" required></BFormInput>
        </BFormGroup>
        <BFormGroup label-cols-sm="4" label-cols-lg="3" label="Имя" label-for="user-firstname"
        >
          <BFormInput id="user-firstname" v-model="userInfo.name.firstName" required></BFormInput>
        </BFormGroup>
        <BFormGroup label-cols-sm="4" label-cols-lg="3" label="Отчество" label-for="user-secondname"
        >
          <BFormInput id="user-secondname" v-model="userInfo.name.secondName" required></BFormInput>
        </BFormGroup>
        <BFormGroup label-cols-sm="4" label-cols-lg="3" label="Профессия" label-for="user-prof">
          <BFormSelect
            id="user-prof"
            v-model="selectedProf"
            :options="professions"
            @change="onProfessionChange"
          ></BFormSelect>
        </BFormGroup>
        <BFormGroup label-cols-sm="4" label-cols-lg="3" label="Отдел" label-for="user-dep">
          <BFormSelect
            id="user-dep"
            v-model="selectedDep"
            :options="departments"
            @change="onDepartmentChange"
          ></BFormSelect>
        </BFormGroup>
        <BFormGroup label-cols-sm="4" label-cols-lg="3" label="Примечание" label-for="user-note">
          <BFormInput id="user-note" v-model="userInfo.note"></BFormInput>
        </BFormGroup>
        <b-button class="mb-2" type="submit" variant="primary">Сохранить</b-button>
        <b-button variant="secondary" @click="onCancel">Отмена</b-button>
      </BForm>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserModal',
  props: {
    user: {
      type: Object,
      // required: true,
    },
    prof: {},
    dep: {},
  },
  data: () => ({
    userInfo: {},
    selectedProf: null,
    selectedDep: null,
    professions: [],
    departments: [],
  }),
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      this.$emit('changeUser', { id: this.userInfo.id, user: this.userInfo });
    },
    onCancel() {
      this.$emit('cancel');
    },
    onProfessionChange() {
      this.userInfo.professionId = this.selectedProf;
    },
    onDepartmentChange() {
      this.userInfo.departmentId = this.selectedDep;
    },
  },
  computed: {
    getDepartments() {
      return this.dep[this.user.departmentId].name;
    },
  },
  beforeMount() {
    const user = JSON.parse(JSON.stringify(this.user));
    const profession = this.prof[user.professionId] || '';
    const professions = Object.values(this.prof);
    const department = this.dep[user.departmentId] || '';
    const departments = Object.values(this.dep);

    this.userInfo = user;
    this.selectedProf = profession.id;
    this.professions = professions.map((prof) => ({
      value: prof.id,
      text: prof.name,
    }));
    this.selectedDep = department.id;
    this.departments = departments.map((prof) => ({
      value: prof.id,
      text: prof.name,
    }));
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
