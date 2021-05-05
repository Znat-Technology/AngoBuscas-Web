import { validate } from '../controllers/validation'

export const Advert = {
  inputs:
    [
      {
        label: 'Anuncio',
        type:  'file',
        field: 'advert',
        rules: [val => validate.isRequired(val)]
      },
      {
        label: 'Comentarios',
        type: 'text',
        field: 'comments'
      }
    ]
}
