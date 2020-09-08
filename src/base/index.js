const base = {
  professions: [
    {
      id: 1111,
      name: 'Менеджер по продажам',
      note: '',
    },
    {
      id: 1112,
      name: 'Руководитель отдела продаж',
      note: '',
    },
    {
      id: 1113,
      name: 'Директор по продажам',
      note: '',
    },
  ],
  departments: [
    {
      id: 1111,
      name: 'Департамент продаж',
      parentId: null,
      note: '',
    },
    {
      id: 1112,
      name: 'Отдел продаж',
      parentId: 1111,
      note: '',
    },
  ],
  staff: [
    {
      id: 1111,
      name: {
        firstName: 'Иван',
        secondName: 'Иванович',
        lstname: 'Иванов',
      },
      professionId: 1111,
      department: 1112,
      note: '',
    },
    {
      id: 1111,
      name: {
        firstName: 'Петр',
        secondName: 'Петрович',
        lstname: 'Петров',
      },
      professionId: 1112,
      department: 1112,
      note: '',
    },
    {
      id: 1111,
      name: {
        firstName: 'Сидор',
        secondName: 'Сидорович',
        lstname: 'Сидоров',
      },
      professionId: 1113,
      department: 1111,
      note: '',
    },
  ],
};

export default base;
