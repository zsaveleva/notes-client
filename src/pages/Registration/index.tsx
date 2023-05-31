import React, { FC } from 'react'
import { ErrorMessageContainer, Input } from '../../components/Input'
import { LoginFormValues } from '../Login'
import { useAppDispatch, useAppSelector } from '../../redux/hooks/hooks'
import { useNavigate } from 'react-router-dom'
import { Formik } from 'formik'
import { RegistrationValidationSchema } from './RegistrationValidationSchema'
import { FromContainer } from '../../components/FromContainer'
import { Flex } from '../../styles/Flex.styled'
import { fetchRegister } from '../../redux/slices/actionsCreators'

export interface RegisterFormValues extends LoginFormValues {
  fullName: string
  confirmPassword: string
}

export const Registration: FC = () => {
  const initialValues: RegisterFormValues = {
    fullName: '',
    email: '',
    password: '',
    confirmPassword: ''
  }

  // Получение ошибки при регистрации
  const error = useAppSelector(state => state.auth.error.register)

  const dispatch = useAppDispatch()

  // Отправка данных формы
  const onSubmit = (values: RegisterFormValues) => {
    dispatch(fetchRegister(values))
  }
  
  return (
    <Formik
      initialValues={initialValues}
      validateOnBlur
      onSubmit={onSubmit}
      validationSchema={RegistrationValidationSchema}
    >
      {({ values, errors, handleChange, isValid, handleSubmit }) => (
        <FromContainer
          title={'Регистрация'}
          buttonText={'Зарегистрироваться'}
          onClick={handleSubmit}
          disabled={!isValid}
          mb={'150px'}
        >
          <Input
            label={'Введите имя:'}
            htmlFor={'fullName'}
            value={values.fullName}
            onChange={handleChange}
            type={'text'}
            errorMessage={errors.fullName}
          />
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
          <Input
            label={'Повторите пароль:'}
            htmlFor={'confirmPassword'}
            value={values.confirmPassword}
            onChange={handleChange}
            type={'password'}
            errorMessage={errors.confirmPassword}
          />
          {
            error !== ''

            && <Flex
              justify={'center'}
              mb={'12px'}
            >
              <ErrorMessageContainer>
                {'Не удалось зарегистрироваться.'}
              </ErrorMessageContainer>
            </Flex>
          }
        </FromContainer>
      )}
    </Formik >
  )
}
