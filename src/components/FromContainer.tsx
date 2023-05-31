import React, { FC, ReactNode } from 'react'
import styled from 'styled-components'
import { RegistrationButton, RegistrationButtonProps } from './Buttons/RegistrationButton'
import { Flex } from '../styles/Flex.styled'
import { StyledH1 } from '../styles/Fonts.styled'

export interface StyledFormContainerProps {
  mb?: string
}

const StyledFormContainer = styled('form') <StyledFormContainerProps>`
  & {
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 400px;
    padding: 50px;
    background-color: #fff;
    box-shadow: 0 4px 20px #00000014;
    border-radius: 10px;
    margin-bottom: ${props => props.mb || ''};
  }
`

interface FromPropsContainer extends StyledFormContainerProps, RegistrationButtonProps {
  title: string
  buttonText: string
}

export const FromContainer: FC<FromPropsContainer> = ({
  title,
  children,
  disabled,
  onClick,
  buttonText,
  mb
}): JSX.Element => {
  return (
    <Flex
      justify={'center'}
    >
      <StyledFormContainer
        mb={mb}
      >
        <StyledH1
          textAlign={'center'}
          mb={'30px'}
        >
          {title}
        </StyledH1>
        {children}
        <RegistrationButton
          disabled={disabled}
          onClick={onClick}
        >
          {buttonText}
        </RegistrationButton>
      </StyledFormContainer>
    </Flex>
  )
}
