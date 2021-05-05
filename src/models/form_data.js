import { validate } from '../controllers/validation'

export const user = {
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
              label: 'Perfil',
              val: 'perfil'
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
              label: 'Anuncios',
              val: 'anuncios'
            },
            {
              label: 'Categorias',
              val: 'categorias'
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
      }
    ]
}
