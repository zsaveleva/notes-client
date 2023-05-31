import React, { FC } from 'react'
import { NavMenu } from './NavMenu'
import { Flex } from '../../styles/Flex.styled'
import { StyledSpan } from '../../styles/Fonts.styled'
import { Button } from '../Buttons/Button'
import { useAppDispatch, useAppSelector } from '../../redux/hooks/hooks'
import { logout, selectIsAuth } from '../../redux/slices/auth'
import { useNavigate } from 'react-router-dom'

export const Header: FC = () => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate();
    const isAuth = useAppSelector(selectIsAuth)

    //Функция выхода из аккаунта
    const onClickLogout = () => {
        dispatch(logout())
        navigate('/login')
        window.localStorage.removeItem('token')
    }

    return (
        <Flex
            justify={'space-between'}
            align={'center'}
            height={'150px'}
        >
            <StyledSpan
                color={'#0169ed'}
                fontSize={'42px'}
                fontWeight={700}
            >
                NOTES
            </StyledSpan>
            {
                isAuth
                    ? <Button
                        br={'100px'}
                        padding={'16px 20px'}
                        backgroundColor={'rgb(0 0 0 / 8%)'}
                        backgroundColorHover={'rgb(0 0 0 / 10%)'}
                        color={'#000'}
                        fontSize={'16px'}
                        onClick={onClickLogout}
                    >
                        Выйти
                    </Button>
                    : <NavMenu />
            }
        </Flex>
    )
}
