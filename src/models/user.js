import { validate } from '../controllers/validation'

export const User = {
  redirect: '/utilizador',
  endpoint: {
    delete: 'user/disable',
    update: 'user/update',
    register: 'user/register'
  },
  form: {
    inputs_left:
    [
      {
        label: 'Foto de perfil',
        type: 'file',
        field: 'profile'
      },
      {
        label: 'Permissoes',
        type: 'check',
        field: 'permissions',
        checks:
          [
            {
              label: 'Arquivo',
              val: 'arquivo'
            },
            {
              label: 'Dashboard',
              val: 'dashboard'
            },
            {
              label: 'Utilizadores',
              val: 'utilizadores'
            },
            {
              label: 'Empresas',
              val: 'empresas'
            },
            {
              label: 'Blog',
              val: 'blog'
            },
            {
              label: 'Instituicoes',
              val: 'instituicoes'
            }
          ]
      }
    ],
    inputs_right:
    [
      {
        label: 'Nome do utilizador',
        type: 'text',
        field: 'name',
        rules: [val => validate.isRequired(val)]
      },
      {
        label: 'Email',
        type: 'email',
        field: 'email',
        rules: [val => validate.isRequired(val), val => validate.isEmailValid(val)]
      },
      {
        label: 'Palavra passe',
        type: 'password',
        field: 'password',
        rules: [val => validate.isRequired(val)]
      },
      {
        label: 'Contacto',
        type: 'tel',
        field: 'contacto'
      }
    ]
  },
  table: {
    header: [
      {
        label: 'Nome',
        field: 'name',
        align: 'left',
        sortable: true
      },
      {
        label: 'Email',
        field: 'email'
      }
    ],
    actions: [
      {
        icon: 'info',
        color: 'positive',
        to: '/utilizador/actualizar',
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
