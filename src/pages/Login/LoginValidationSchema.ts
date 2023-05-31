import * as yup from "yup";

export const LoginValidationSchema = yup.object().shape({
    email: yup.string()
        .email('Email указан в неверном формате'),
    password: yup.string()
        .min(8, 'Пароль должен быть более или равен 8 символам')
})

