import React from 'react'
import { Form } from '@unform/web'

import logoImage from '../../assets/logo.svg'
import { FiArrowLeft, FiUser, FiMail, FiLock } from 'react-icons/fi'
import { Container, Content, Background } from './styles'

import Input from '../../components/Input'
import Button from '../../components/Button'

const SignUp: React.FC = () => {
  function handleSubmit(data: object): void {
    console.log(data)
  }

  return (
    <Container>
      <Background />
      <Content>
        <img src={logoImage} alt="GoBarber" />

        <Form initialData={{ name: 'Ruan Valente' }} onSubmit={handleSubmit}>
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
