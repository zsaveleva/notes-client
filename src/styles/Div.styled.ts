import styled from "styled-components"
import { StyledFormContainerProps } from "../components/FromContainer"

export interface BaseProps extends StyledFormContainerProps {
    padding?: string
    pt?: string
    pl?: string
    pr?: string
    pb?: string
    margin?: string
    mt?: string
    ml?: string
    mr?: string
}

export interface DivProps extends BaseProps {
    width?: string
    maxWidth?: string
    height?: string
    maxHeight?: string
    minHeight?: string
    backgroundColor?: string
    boxShadow?: string
    border?: string
    br?: string
    position?: string
    top?: string
    bottom?: string
    left?: string
    right?: string
    zIndex?: number
    visibility?: string
    opacity?: string
    overflowX?: string
    overflowY?: string
    overflow?: string
}

export const Div = styled('div') <DivProps> `
    & {
        width: ${props => props.width || ''};
        max-width: ${props => props.maxWidth || ''};
        height: ${props => props.height || ''};
        max-height: ${props => props.maxHeight || ''};
        min-height: ${props => props.minHeight || ''};
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
        color: ${props => props.color || ''};
        background-color: ${props => props.backgroundColor || ''};
        box-shadow: ${props => props.boxShadow || ''};
        border: ${props => props.border || ''};
        border-radius: ${props => props.br || ''};
        position: ${props => props.position || ''};
        top: ${props => props.top || ''};
        bottom: ${props => props.bottom || ''};
        left: ${props => props.left || ''};
        right: ${props => props.right || ''};
        z-index: ${props => props.zIndex || ''};
        visibility: ${props => props.visibility || ''};
        overflow-x: ${props => props.overflowX || ''};
        overflow-y: ${props => props.overflowY || ''};
        overflow: ${props => props.overflow || ''};
    }
`