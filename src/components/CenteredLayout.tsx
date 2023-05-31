import React, { FC, ReactNode } from 'react'
import styled from 'styled-components'

const StyledCenteredLayout = styled('div')`
    & {
        width: calc(100vw - 100px);
        height: 100%;
        max-width: 1400px;
        margin: auto;
    }
`

export const CenteredLayout: FC<{ children: ReactNode }> = ({ children }) => {
    return (
        <StyledCenteredLayout>
            {children}
        </StyledCenteredLayout>
    )
}
