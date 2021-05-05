// import { validate } from '../controllers/validation'

export const Blog = {
  redirect: '/blog',
  endpoint: {
    delete: 'blog/disable',
    update: 'blog/update',
    register: 'blog/register'
  },
  form: {
    inputs_left:
    [
      {
        label: 'Imagem',
        type: 'file',
        field: 'image'
      },
      {
        label: 'Categoria',
        type: 'select',
        options: ['Filmes', 'Novelas'],
        field: 'category'
      }
    ],
    inputs_right:
    [
      {
        label: 'Titulo',
        type: 'text',
        field: 'title'
      },
      {
        label: 'Descriçao',
        type: 'textarea',
        field: 'description'
      }
    ]
  },
  table: {
    header: [
      {
        label: 'Categoria',
        field: 'category'
      },
      {
        label: 'Titulo',
        field: 'title'
      },
      {
        label: 'Descriçao',
        field: 'description'
      }
    ],
    actions: [
      {
        icon: 'info',
        color: 'positive',
        to: '/blog/actualizar',
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
