import React from 'react'

import logoImage from '../../assets/logo.svg'
import { FiArrowLeft, FiUser, FiMail, FiLock } from 'react-icons/fi'
import { Container, Content, Background } from './styles'

import Input from '../../components/Input'
import Button from '../../components/Button'

const SignUp: React.FC = () => (
  <Container>
    <Background />
    <Content>
      <img src={logoImage} alt="GoBarber" />

      <form>
        <Input name="text" type="text" icon={FiUser} placeholder="Nome" />
        <Input name="email" type="email" icon={FiMail} placeholder="E-mail" />
        <Input
          name="password"
          type="password"
          icon={FiLock}
          placeholder="Senha"
        />

        <Button type="submit">Entrar</Button>
      </form>

      <a href="#">
        <FiArrowLeft />
        Voltar para o login
      </a>
    </Content>
  </Container>
)

export default SignUp
