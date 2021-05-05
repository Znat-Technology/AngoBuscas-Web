import { validate } from '../controllers/validation'

export const People = {
  form: {
    inputs_left:
    [
      {
        label: 'Categoria',
        type: 'text',
        field: 'Category'
      },
      {
        label: 'Idade',
        type: 'number',
        field: 'age',
        rules: [val => validate.isRequired(val)]
          
      },
      {
        label: 'Data de desaparecimento',
        type: 'date',
        field: 'date',
        rules: [val => validate.isRequired(val)]
          
      }
    ],
    inputs_right:
    [
      {
        label:'Contactos',
        type:'text',
        multiple:'true',
        field:'contactos',
        rules: [val => validate.isRequired(val)]
      },
      {
         label:'Descriçao',
         type:'text',
         field:'description'
      }
    ]
  }
  
}
