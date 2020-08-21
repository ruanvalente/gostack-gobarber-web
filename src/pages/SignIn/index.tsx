import React, { useCallback, useRef } from 'react'
import { Form } from '@unform/web'
import { FormHandles } from '@unform/core'
import * as Yup from 'yup'

import { useAuth } from '../../context/AuthContext'

import getValidationErros from '../../utils/getValidationErros'

import { FiLogIn, FiMail, FiLock } from 'react-icons/fi'
import { Container, Content, Background } from './styles'
import logoImage from '../../assets/logo.svg'

import Input from '../../components/Input'
import Button from '../../components/Button'

interface SignInFormData {
  email: string
  password: string
}

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null)
  const { signIn } = useAuth()

  const handleSubmit = useCallback(
    async (data: SignInFormData) => {
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
        signIn({
          email: data.email,
          password: data.password,
        })
      } catch (error) {
        const erros = getValidationErros(error)
        formRef.current?.setErrors(erros)
      }
    },
    [signIn],
  )

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

          <a href="/forgot">Esqueci minha senha</a>
        </Form>

        <a href="/create">
          <FiLogIn />
          Criar conta
        </a>
      </Content>
      <Background />
    </Container>
  )
}

export default SignIn
