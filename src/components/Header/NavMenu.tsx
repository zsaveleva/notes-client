import React, { FC } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../redux/hooks/hooks'
import { setActiveIndex } from '../../redux/slices/navigation'

const StyledNavMenu = styled('ul')`
    & {
        display: flex;
        background-color: rgb(0 0 0 / 8%);
        border-radius: 100px;
    }
`

interface StyledNavMenuElProps {
    active: boolean
}

const StyledNavMenuEl = styled('li') <StyledNavMenuElProps>`
    & {
        list-style-type: none;
        border-radius: 100px;
        padding: 16px 20px;
        cursor: pointer;
        transition: background-color 0.15s;
        background-color: ${props => props.active && 'rgb(0 0 0 / 10%)'}
    }

    &:hover {
        background-color: rgb(0 0 0 / 10%);
    }
`

const menuElements: menuEl[] = [
    {
        text: 'Войти',
        href: '/login'
    },
    {
        text: 'Зарегистрироватся',
        href: '/register'
    }
]

interface menuEl {
    text: string
    href: string
}

export const NavMenu: FC = () => {
    const dispatch = useAppDispatch()
    const activeIndex = useAppSelector(state => state.navigation.activeIndex)
    return (
        <StyledNavMenu>
            {menuElements.map((el, i) => {
                return (
                    <Link
                        key={el.text}
                        to={el.href}
                    >
                        <StyledNavMenuEl
                            key={el.text}
                            onClick={() => dispatch(setActiveIndex(i))}
                            active={i == activeIndex}
                        >
                            {el.text}
                        </StyledNavMenuEl>
                    </Link>
                )
            })}
        </StyledNavMenu>
    )
}
