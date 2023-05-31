import React, { FC, ReactNode } from 'react'
import { StyledRegistrationButton } from '../../styles/Buttons.styled'

export interface RegistrationButtonProps {
    disabled: boolean
    onClick: (e:any) => void
    children: ReactNode
}

export const RegistrationButton: FC<RegistrationButtonProps> = ({ disabled, onClick, children }) => {
    return (
        <StyledRegistrationButton
            disabled={disabled}
            onClick={onClick}
        >
            {children}
        </StyledRegistrationButton>
    )
}
