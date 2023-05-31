import styled from 'styled-components'

export const StyledInputContainer = styled('div') <{ error?: boolean }>`
  & {
    margin-bottom: 20px;

    label {
      color: ${props => props.error ? 'red' : ''};
      font-size: 14px;
    }
  }
`
export const StyledInput = styled('input') <{ error?: boolean }>`
  & {
    width: 100%;
    margin-top: 8px;
    padding: 14px 16px;
    border-radius: 10px;
    border: ${props => props.error ? '1px solid red' : '1px solid rgb(0 0 0 / 8%)'};
    outline: none;
    transition: all 0.3s;
    color: ${props => props.error ? 'red' : ''};
    font-size: 14px;
  }

  &:focus {
    background-color: rgb(0 0 0 / 8%);
  }
`