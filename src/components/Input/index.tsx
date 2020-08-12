import React, {
  InputHTMLAttributes,
  useEffect,
  useRef,
  useState,
  useCallback,
} from 'react'
import { useField } from '@unform/core'
import { IconBaseProps } from 'react-icons'

import { Container } from './styles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name?: string
  icon?: React.ComponentType<IconBaseProps>
}

const Input: React.FC<InputProps> = ({ name, icon: Icon, ...rest }) => {
  const [isFocused, setIsFocused] = useState(false)
  const [isField, setIsField] = useState(false)

  const inputRef = useRef<HTMLInputElement>(null)
  const { fieldName, defaultValue, error, registerField } = useField(name || '')

  const handlerInputBlur = useCallback(() => {
    setIsFocused(false)

    setIsField(!!inputRef.current?.value)
  }, [])

  const handlerInputFocused = useCallback(() => {
    setIsFocused(true)
  }, [])

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    })
  }, [registerField, fieldName])

  return (
    <Container isField={isField} isFocused={isFocused}>
      {Icon && <Icon size="20" />}
      <input
        onFocus={handlerInputFocused}
        onBlur={handlerInputBlur}
        defaultValue={defaultValue}
        ref={inputRef}
        {...rest}
      />
    </Container>
  )
}

export default Input
