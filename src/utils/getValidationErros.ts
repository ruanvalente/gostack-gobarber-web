import { ValidationError } from 'yup'

interface Erros {
  [key: string]: string
}
export default function getValidationErros(erros: ValidationError): Erros {
  const validationErrors: Erros = {}

  erros.inner.forEach(erro => {
    validationErrors[erro.path] = erro.message
  })

  return validationErrors
}
