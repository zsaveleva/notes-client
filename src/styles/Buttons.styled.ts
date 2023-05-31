import styled from "styled-components"

export interface StyledButtonProps {
    margin?: string
    padding?: string
    backgroundColor?: string
    backgroundColorHover?: string
    color?: string
    br?: string
    fontSize?: string
}

export const StyledButton = styled('button') <StyledButtonProps>`
      & {
          cursor: pointer;
          font-size: ${props => props.fontSize || '13px'};
          color: ${props => props.color || '#fff'};
          margin: ${props => props.margin || ''};
          padding: ${props => props.padding || '16px 20px'};
          border: none;
          background-color: ${props => props.backgroundColor || '#0169ed'};
          transition: background-color 0.15s;
          border-radius: ${props => props.br || '10px'};
      }
  
      &:hover {
        background-color: ${props => props.backgroundColorHover || '#015fd5'};
      }
  `

export const StyledRegistrationButton = styled(StyledButton)`
    & {
        font-size: 16px;
        font-weight: 700;
    }

    &:disabled {
        color: #000;
        background-color: rgb(0 0 0 / 8%);
        cursor: default;
    }
`

export const StyledRoundButton = styled('button')` // много повторов
    & {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: rgb(0 0 0 / 8%);
        border-radius: 50%;
        width: 20px;
        height: 20px;
        border: none;
        cursor: pointer;
        transition: background-color 0.15s;
        position: absolute;
        right: 16px;
        top: 16px;
    }

    &:hover {
        background-color: rgb(0 0 0 / 10%);
    }
`
