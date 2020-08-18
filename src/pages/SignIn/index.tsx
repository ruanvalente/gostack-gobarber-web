import React, { useCallback, useRef } from 'react'
import { Form } from '@unform/web'
import { FormHandles } from '@unform/core'
import * as Yup from 'yup'

import { FiLogIn, FiMail, FiLock } from 'react-icons/fi'
import { Container, Content, Background } from './styles'
import logoImage from '../../assets/logo.svg'

import Input from '../../components/Input'
import Button from '../../components/Button'

import getValidationErros from '../../utils/getValidationErros'

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null)

  const handleSubmit = useCallback(async (data: object) => {
    try {
      formRef.current?.setErrors({})
      const schema = Yup.object().shape({
        email: Yup.string()
          .required('E-mail é obrigatório')
          .email('Entre com um e-mail válido'),
        password: Yup.string().required('Senha obrigatória'),
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
      <Content>
        <img src={logoImage} alt="GoBarber" />

        <Form ref={formRef} onSubmit={handleSubmit}>
          <h1>Faça seu logon</h1>
          <Input name="email" type="email" icon={FiMail} placeholder="E-mail" />
          <Input
            name="password"
            type="password"
            icon={FiLock}
            placeholder="Senha"
          />

          <Button type="submit">Entrar</Button>

          <a href="#">Esqueci minha senha</a>
        </Form>

        <a href="#">
          <FiLogIn />
          Criar conta
        </a>
      </Content>
      <Background />
    </Container>
  )
}

export default SignIn
