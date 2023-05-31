import * as yup from "yup";

const PasswordReg = /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}/;

export const RegistrationValidationSchema = yup.object().shape({
    fullName: yup.string()
        .required('Это поле обязательно для заполнения')
        .min(2, 'Укажите имя'),
    email: yup.string()
        .required('Это поле обязательно для заполнения')
        .email('Email указан в неверном формате'),
    password: yup.string()
        .required('Это поле обязательно для заполнения')
        .min(8, 'Пароль должен быть более или равен 8 символам')
        .matches(PasswordReg, {
            message: 'Пароль должен содержать как минимум одну заглавную букву, одну строчную букву и одну цифру'
        }),
    confirmPassword: yup.string()
        .required('Это поле обязательно для заполнения')
        .oneOf([yup.ref('password')], 'Пароли не совпадают'),
})

