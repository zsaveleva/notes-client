import React, { ChangeEvent, FC, ReactNode } from 'react'
import { StyledSpan } from '../styles/Fonts.styled'
import { StyledInput, StyledInputContainer } from '../styles/Inputs.styled'

interface InputProps {
  label: string
  value: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  type: string
  htmlFor: string
  errorMessage?: string
}

export const ErrorMessageContainer: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <StyledSpan
      fontSize={'12px'}
      color={'red'}
    >
      {children}
    </StyledSpan>
  )
}

export const Input: FC<InputProps> = ({ label, value, onChange, type, htmlFor, errorMessage }): JSX.Element => {
  return (
    <StyledInputContainer
      error={!!errorMessage}
    >
      <label htmlFor={htmlFor}>
        {label}
      </label>
      <StyledInput
        error={!!errorMessage}
        value={value}
        onChange={onChange}
        type={type}
        name={htmlFor}
      />
      <ErrorMessageContainer>
        {errorMessage}
      </ErrorMessageContainer>
    </StyledInputContainer>
  )
}
