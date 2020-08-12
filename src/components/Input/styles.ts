import styled, { css } from 'styled-components'

interface ContainerProps {
  isFocused: boolean
  isField: boolean
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  align-items: center;

  width: 100%;
  height: 56px;
  padding: 0 16px;

  border-radius: 10px;
  border: 2px solid #232129;

  color: #666360;
  background: #232129;

  ${props =>
    props.isFocused &&
    css`
      color: #ff9000;
      border-color: #ff9000;
    `}
  ${props =>
    props.isField &&
    css`
      color: #ff9000;
    `}

  & + div {
    margin-top: 8px;
  }
  input {
    flex: 1;

    color: #f4ede8;
    background: transparent;

    border: none;

    &::placeholder {
      color: #666360;
    }
  }

  svg {
    margin-right: 16px;
  }
`
