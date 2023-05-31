import styled from "styled-components"
import { Div } from "./Div.styled"

interface FlexProps {
    direction?: string
    wrap?: string
    justify?: string
    align?: string
    gap?: string
}

export const Flex = styled(Div) <FlexProps>`
& {
    display: flex;
    flex-direction: ${props => props.direction || ''};
    flex-wrap: ${props => props.wrap || ''};
    justify-content: ${props => props.justify || ''};
    align-items: ${props => props.align || ''};
    gap: ${props => props.gap || ''};
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