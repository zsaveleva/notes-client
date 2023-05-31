import React, { FC, ReactNode } from 'react'
import { StyledButton, StyledButtonProps } from '../../styles/Buttons.styled'

interface ButtonProps extends StyledButtonProps {
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void
  children: ReactNode
}

export const Button: FC<ButtonProps> = ({
  onClick,
  margin,
  padding,
  backgroundColor,
  backgroundColorHover,
  color,
  br,
  fontSize,
  children
}): JSX.Element => {
  return (
    <StyledButton
      onClick={onClick}
      margin={margin}
      padding={padding}
      backgroundColor={backgroundColor}
      backgroundColorHover={backgroundColorHover}
      color={color}
      br={br}
      fontSize={fontSize}
    >
      {children}
    </StyledButton>
  )
}
