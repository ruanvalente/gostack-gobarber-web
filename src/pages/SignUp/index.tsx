import React, { useCallback, useRef } from 'react'
import { Form } from '@unform/web'
import { FormHandles } from '@unform/core'
import * as Yup from 'yup'

import logoImage from '../../assets/logo.svg'
import { FiArrowLeft, FiUser, FiMail, FiLock } from 'react-icons/fi'
import { Container, Content, Background } from './styles'

import Input from '../../components/Input'
import Button from '../../components/Button'

import getValidationErros from '../../utils/getValidationErros'

const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null)

  const handleSubmit = useCallback(async (data: object) => {
    try {
      formRef.current?.setErrors({})
      const schema = Yup.object().shape({
        name: Yup.string().required('nome é obrigatório'),
        email: Yup.string()
          .required('e-mail é obrigatório')
          .email('Entre com um e-mail válido'),
        password: Yup.string().min(6, 'mínimo 6 caracteres'),
      })

      await schema.validate(data, {
        abortEarly: false,
      })
    } catch (error) {
      const erros = getValidationErros(error)
      formRef.current?.setErrors(erros)
    }
  }, [])

  return (
    <Container>
      <Background />
      <Content>
        <img src={logoImage} alt="GoBarber" />

        <Form ref={formRef} onSubmit={handleSubmit}>
          <Input name="name" type="text" icon={FiUser} placeholder="Nome" />

          <Input name="email" type="email" icon={FiMail} placeholder="E-mail" />

          <Input
            name="password"
            type="password"
            icon={FiLock}
            placeholder="Senha"
          />

          <Button type="submit">Entrar</Button>
        </Form>

        <a href="#">
          <FiArrowLeft />
          Voltar para o login
        </a>
      </Content>
    </Container>
  )
}

export default SignUp
