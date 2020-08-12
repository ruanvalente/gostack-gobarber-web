import React, { useCallback } from 'react'
import { Form } from '@unform/web'
import * as Yup from 'yup'

import logoImage from '../../assets/logo.svg'
import { FiArrowLeft, FiUser, FiMail, FiLock } from 'react-icons/fi'
import { Container, Content, Background } from './styles'

import Input from '../../components/Input'
import Button from '../../components/Button'

const SignUp: React.FC = () => {
  const handleSubmit = useCallback(async (data: object) => {
    try {
      const schema = Yup.object().shape({
        name: Yup.string().required('O campo nome é obrigatório'),
        email: Yup.string()
          .required('O campo e-mail é obrigatório')
          .email('Entre com um e-mail válido'),
        password: Yup.string().min(
          6,
          'A senha precisa ter no mínimo 6 caracteres',
        ),
      })

      await schema.validate(data)
    } catch (error) {
      console.log(error)
    }
  }, [])

  return (
    <Container>
      <Background />
      <Content>
        <img src={logoImage} alt="GoBarber" />

        <Form onSubmit={handleSubmit}>
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
