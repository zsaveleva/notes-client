import React, { FC } from 'react'
import { ErrorMessageContainer, Input } from '../../components/Input'
import { Formik } from 'formik'
import { LoginValidationSchema } from './LoginValidationSchema'
import { useAppDispatch, useAppSelector } from '../../redux/hooks/hooks'
import { FromContainer } from '../../components/FromContainer'
import { Flex } from '../../styles/Flex.styled'
import { fetchAuth } from '../../redux/slices/actionsCreators'

export interface LoginFormValues {
  email: string
  password: string
}

export const Login: FC = () => {
  const initialValues: LoginFormValues = {
    email: '',
    password: ''
  }

  //Получение ошибки авторизации
  const error = useAppSelector(state => state.auth.error.login)
  const dispatch = useAppDispatch()

  //Отправка данных из формы
  const onSubmit = (values: LoginFormValues) => {
    dispatch(fetchAuth(values))
  }

  return (
    <Formik
      initialValues={initialValues}
      validateOnBlur
      onSubmit={onSubmit}
      validationSchema={LoginValidationSchema}
    >
      {({ values, errors, handleChange, isValid, handleSubmit }) => (
        <FromContainer
          title={'Войдите в аккаунт'}
          buttonText={'Войти'}
          onClick={handleSubmit}
          disabled={!isValid}
        >
          <Input
            label={'Введите email:'}
            htmlFor={'email'}
            value={values.email}
            onChange={handleChange}
            type={'text'}
            errorMessage={errors.email}
          />
          <Input
            label={'Введите пароль:'}
            htmlFor={'password'}
            value={values.password}
            onChange={handleChange}
            type={'password'}
            errorMessage={errors.password}
          />
          {
            error !== ''
            && <Flex
              justify={'center'}
              mb={'12px'}
            >
              <ErrorMessageContainer>
                {'Неверный логин или пароль. Попробуйте снова.'}
              </ErrorMessageContainer>
            </Flex>
          }
        </FromContainer>
      )
      }
    </Formik >
  )
}
