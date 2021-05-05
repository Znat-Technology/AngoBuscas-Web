import { validate } from '../controllers/validation'

export const Category = {
  redirect: '/categoria',
  endpoint: {
    delete: 'category/disable',
    update: 'category/update',
    register: 'category/register'
  },
  form: {
    inputs_right:
    [
      {
        label: 'Descricao',
        type: 'text',
        field: 'description',
        rules: [val => validate.isRequired(val)]
      }
    ],
    inputs_left:
    [
      {
        label: 'Categoria de',
        type: 'select',
        options: ['Pessoa', 'Blog', 'Documento', 'lugar'],
        field: 'typeFor',
        rules: [val => validate.isRequired(val)]
      }
    ]
  },
  table: {
    header: [
      {
        label: 'Descricao',
        field: 'description'
      }
    ],
    actions: [
      {
        icon: 'info',
        color: 'positive',
        to: '/categoria/actualizar',
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
