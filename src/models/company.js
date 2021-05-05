import { validate } from '../controllers/validation'

export const Company = {
  redirect: '/empresa',
  endpoint: {
    delete: 'company/disable',
    update: 'company/update',
    register: 'company/register'
  },
  form: {
    inputs_left: [
      {
        label: 'Empresa',
        type: 'text',
        field: 'name',
        rules: [val => validate.isRequired(val)]
      },
      {
        label: 'Provincia',
        type: 'text',
        field: 'province',
        rules: [val => validate.isRequired(val)]
      },
      {
        label: 'Municipio',
        type: 'text',
        field: 'county',
        rules: [val => validate.isRequired(val)]
      },
      {
        label: 'Bairro',
        type: 'text',
        field: 'street',
        rules: [val => validate.isRequired(val)]
      }
    ],
    inputs_right:
    [
      {
        label: 'Logotipo',
        type: 'file',
        field: 'logo'
      },
      {
        label: 'Nif',
        type: 'text',
        field: 'nif',
        rules: [val => validate.isRequired(val)]
      },
      {
        label: 'Pais',
        type: 'text',
        field: 'country',
        rules: [val => validate.isRequired(val)]
      },
      {
        label: 'Descricao',
        type: 'text',
        field: 'description',
        rules: [val => validate.isRequired(val)]
      },
      {
        label: 'Email',
        type: 'email',
        field: 'email',
        rules: [val => validate.isRequired(val), val => validate.isEmailValid(val)]
      }
    ]
  },
  table: {
    header: [
      {
        label: 'NIF',
        field: 'nif'
      },
      {
        label: 'Empresa',
        field: 'name',
        align: 'left',
        sortable: true
      },
      {
        label: 'Descricao',
        field: 'description',
        align: 'left',
        sortable: true
      }
    ],
    actions: [
      {
        icon: 'info',
        color: 'positive',
        to: '/empresa/actualizar',
        action: 'EDIT'
      },
      {
        icon: 'delete',
        color: 'negative',
        action: 'DELETE',
        to: ''
      }
    ]
  }
}
