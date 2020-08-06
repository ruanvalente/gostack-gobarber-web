import styled from 'styled-components'
import { shade } from 'polished'

import signInBackgroundImage from '../../assets/sign-in-background.png'

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  place-content: center;

  width: 100%;
  max-width: 700px;

  form {
    margin: 80px;
    width: 340px;
    text-align: center;

    h1 {
      margin-bottom: 24px;
    }

    input {
      width: 100%;
      height: 56px;
      padding: 0 16px;

      border-radius: 10px;
      border: 2px solid #232129;

      background: #232129;
      color: #f4ede8;

      & + input {
        margin-top: 8px;
      }

      &::placeholder {
        color: #666360;
      }
    }

    button {
      margin: 24px 0;
      width: 100%;
      padding: 16px;

      font-weight: 500;
      color: #312e38;
      background: #ff9000;

      border: none;
      border-radius: 10px;

      transition: background 0.2s;

      &:hover {
        background: ${shade(0.2, '#ff9000')};
      }
    }

    a {
      text-decoration: none;
      color: #f4ede8;

      transition: color 0.2s;

      &:hover {
        color: ${shade(0.2, '#f4ede8')};
      }
    }
  }

  > a {
    display: flex;
    align-items: center;

    text-decoration: none;
    color: #ff9000;
    transition: color 0.2s;

    &:hover {
      color: ${shade(0.2, '#ff9000')};
    }

    svg {
      margin-right: 16px;
    }
  }
`
export const Background = styled.div`
  flex: 1;

  background: url(${signInBackgroundImage}) no-repeat center;
  background-size: cover;
`
