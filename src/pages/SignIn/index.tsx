import React from 'react'

import logoImage from '../../assets/logo.svg'
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi'
import { Container, Content, Background } from './styles'

import Input from '../../components/Input'
import Button from '../../components/Button'

const SignIn: React.FC = () => (
  <Container>
    <Content>
      <img src={logoImage} alt="GoBarber" />

      <form>
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
      </form>

      <a href="#">
        <FiLogIn />
        Criar conta
      </a>
    </Content>
    <Background />
  </Container>
)

export default SignIn
