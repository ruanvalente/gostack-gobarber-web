import styled from 'styled-components'
import { shade } from 'polished'

export const Container = styled.div`
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
`
