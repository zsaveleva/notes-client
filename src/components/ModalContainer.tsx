import React, { FC, ReactNode } from 'react'
import styled from 'styled-components'
import { StyledH2 } from '../styles/Fonts.styled'
import { Flex } from '../styles/Flex.styled'
import { Div } from '../styles/Div.styled'
import { StyledRoundButton } from '../styles/Buttons.styled'

const StyledOverlay = styled('div') <StyledModalContainerProps>`
    & {
        height: 100vh;
        width: 100vw;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 5000;
        background-color: rgba(0,0,0,.5);
        backdrop-filter: blur(8px);
        display: flex;
        align-items: center;
        justify-content: center;
        opacity: ${props => props.active ? '1' : '0'};
        pointer-events: ${props => props.active ? 'all' : 'none'};
        transition: opacity 0.15s;
    }
`

interface StyledModalContainerProps {
    active: boolean
}

interface ModalContainerProps extends StyledModalContainerProps {
    setActive: () => void
    title: string
    children: ReactNode
}

export const ModalConteiner: FC<ModalContainerProps> = ({ active, setActive, title, children }): JSX.Element => {
    return (
        <StyledOverlay active={active} onClick={setActive}>
            <Div
                onClick={e => e.stopPropagation()}
                backgroundColor={'#fff'}
                padding={'40px'}
                br={'10px'}
                position={'relative'}
                width={'400px'}
            >
                <StyledH2
                    textAlign={'center'}
                    fontWeight={700}
                    mb={'16px'}
                >
                    {title}
                </StyledH2>
                <StyledRoundButton onClick={setActive}>
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.8837 4.99999L9.81689 1.06724C10.061 0.823087 10.061 0.427244 9.81689 0.183113C9.57274 -0.0610376 9.17689 -0.0610376 8.93276 0.183113L4.99999 4.11628L1.06724 0.183113C0.823087 -0.0610376 0.427244 -0.0610376 0.183113 0.183113C-0.0610181 0.427263 -0.0610376 0.823107 0.183113 1.06724L4.11628 4.99999L0.183113 8.93276C-0.0610376 9.17691 -0.0610376 9.57276 0.183113 9.81689C0.427263 10.061 0.823107 10.061 1.06724 9.81689L4.99999 5.8837L8.93274 9.81689C9.17689 10.061 9.57274 10.061 9.81687 9.81689C10.061 9.57274 10.061 9.17689 9.81687 8.93276L5.8837 4.99999Z" fill="#0169ED" />
                    </svg>
                </StyledRoundButton>
                {children}
            </Div>
        </StyledOverlay>
    )
}
