import { validate } from '../controllers/validation'

export const Place = {
  redirect: '/instituicao',
  endpoint: {
    delete: 'place/disable',
    update: 'place/update',
    register: 'place/register'
  },
  form: {
    inputs_left: [
      {
        label: 'Provincia',
        type: 'select',
        options: ['Luanda', 'Malanje'],
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
        label: 'Endereço',
        type: 'text',
        field: 'street',
        rules: [val => validate.isRequired(val)]
      }
    ],
    inputs_right:
    [
      {
        label: 'Imagem',
        type: 'file',
        field: 'image'
      },
      {
        label: 'Tipo',
        type: 'select',
        options: ['igreja', 'esquadra'],
        field: 'typePlace',
        rules: [val => validate.isRequired(val)]
      },
      {
        label: 'Instituto',
        type: 'text',
        field: 'institute',
        rules: [val => validate.isRequired(val)]
      }
    ]
  },
  table: {
    header: [
      {
        label: 'Tipo',
        field: 'typePlace',
        sortable: true
      },
      {
        label: 'Instituiçao',
        field: 'institute'
      },
      {
        label: 'Endereco',
        field: 'street'
      }
    ],
    actions: [
      {
        icon: 'info',
        color: 'positive',
        to: '/instituicao/actualizar',
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
