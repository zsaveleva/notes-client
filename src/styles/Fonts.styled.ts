import styled from "styled-components";
import { BaseProps } from "./Div.styled";

interface FontBaseProps extends BaseProps {
    fontSize?: string
    fontWeight?: number
    textAlign?: string
    color?: string
}

export const StyledH1 = styled('h1')<FontBaseProps>`
    & {
        font-size: ${props => props.fontSize || '28px'};
        font-weight: ${props => props.fontWeight || '700'};
        text-align: ${props => props.textAlign || ''};
        color: ${props => props.color || ''};
        padding: ${props => props.padding || ''};
        padding-top: ${props => props.pt || ''};
        padding-left: ${props => props.pl || ''};
        padding-right: ${props => props.pr || ''};
        padding-bottom: ${props => props.pb || ''};
        margin: ${props => props.margin || ''};
        margin-top: ${props => props.mt || ''};
        margin-left: ${props => props.ml || ''};
        margin-right: ${props => props.mr || ''};
        margin-bottom: ${props => props.mb || ''};
    }
`

export const StyledH2 = styled('h2')<FontBaseProps>`
& {
    font-size: ${props => props.fontSize || '18px'};
    font-weight: ${props => props.fontWeight || ''};
    text-align: ${props => props.textAlign || ''};
    color: ${props => props.color || ''};
    padding: ${props => props.padding || ''};
    padding-top: ${props => props.pt || ''};
    padding-left: ${props => props.pl || ''};
    padding-right: ${props => props.pr || ''};
    padding-bottom: ${props => props.pb || ''};
    margin: ${props => props.margin || ''};
    margin-top: ${props => props.mt || ''};
    margin-left: ${props => props.ml || ''};
    margin-right: ${props => props.mr || ''};
    margin-bottom: ${props => props.mb || ''};
}
`

export const StyledSpan = styled('span')<FontBaseProps>`
& {
    font-size: ${props => props.fontSize || ''};
    font-weight: ${props => props.fontWeight || ''};
    text-align: ${props => props.textAlign || ''};
    color: ${props => props.color || ''};
    padding: ${props => props.padding || ''};
    padding-top: ${props => props.pt || ''};
    padding-left: ${props => props.pl || ''};
    padding-right: ${props => props.pr || ''};
    padding-bottom: ${props => props.pb || ''};
    margin: ${props => props.margin || ''};
    margin-top: ${props => props.mt || ''};
    margin-left: ${props => props.ml || ''};
    margin-right: ${props => props.mr || ''};
    margin-bottom: ${props => props.mb || ''};
}
`

export const StyledP = styled('p')<FontBaseProps>`
& {
    font-size: ${props => props.fontSize || ''};
    font-weight: ${props => props.fontWeight || ''};
    text-align: ${props => props.textAlign || ''};
    color: ${props => props.color || ''};
    padding: ${props => props.padding || ''};
    padding-top: ${props => props.pt || ''};
    padding-left: ${props => props.pl || ''};
    padding-right: ${props => props.pr || ''};
    padding-bottom: ${props => props.pb || ''};
    margin: ${props => props.margin || ''};
    margin-top: ${props => props.mt || ''};
    margin-left: ${props => props.ml || ''};
    margin-right: ${props => props.mr || ''};
    margin-bottom: ${props => props.mb || ''};
}
`