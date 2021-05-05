
export const validate = {
  isRequired: (val) => !!val || 'Este campo eh obrigatorio',
  isEmailValid: (val) => String(val).includes('@') || 'Email invalido'
}
