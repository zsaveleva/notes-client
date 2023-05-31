import { LoginFormValues } from "../../pages/Login"
import { RootDispatch } from "../store"
import axios from '../../axios'
import {
    User,
    authFetching,
    authFetchingError,
    authFetchingSuccess,
    authMeFetching,
    authMeFetchingError,
    authMeFetchingSuccess,
    registerFetching,
    registerFetchingError,
    registerFetchingSuccess
} from "./auth"
import { RegisterFormValues } from "../../pages/Registration"
import {
    Notes,
    notesFetching,
    notesFetchingError,
    notesFetchingSuccess
} from "./notes"
import { toast } from "react-toastify"

//Отправка данных формы авторизации
export const fetchAuth = (params: LoginFormValues) => async (dispatch: RootDispatch) => {
    const fetchAuthNotify = () => toast('Выполнен вход в аккаунт')
    try {
        dispatch(authFetching())
        const response = await axios.post<LoginFormValues>('/auth/login', params)
        dispatch(authFetchingSuccess(response.data))
        fetchAuthNotify()
    } catch (error) {
        if (error instanceof Error)
            dispatch(authFetchingError(error.message))
    }
}

//Отправка данных формы регистрации
export const fetchRegister = (params: RegisterFormValues) => async (dispatch: RootDispatch) => {
    const fetchRegisterNotify = () => toast('Вы успешно зарегистрировались')
    try {
        dispatch(registerFetching())
        const response = await axios.post<RegisterFormValues>('/auth/register', params)
        dispatch(registerFetchingSuccess(response.data))
        fetchRegisterNotify()
    } catch (error) {
        if (error instanceof Error)
            dispatch(registerFetchingError(error.message))
    }
}

//Проверка авторизации пользователя 
export const fetchAuthMe = () => async (dispatch: RootDispatch) => {
    try {
        dispatch(authMeFetching())
        const response = await axios.get<User>('/auth/me')
        dispatch(authMeFetchingSuccess(response.data))
    } catch (error) {
        if (error instanceof Error)
            dispatch(authMeFetchingError(error.message))
    }
}

//Получение данных с сервера
export const fetchNotes = (page: number) => async (dispatch: RootDispatch) => {
    const fetchNotesNotify = () => toast('Данные получены')
    try {
        dispatch(notesFetching())
        const response = await axios.get<Notes>(`/notes?page=${page}&limit=5`)
        dispatch(notesFetchingSuccess(response.data))
        fetchNotesNotify()
    } catch (error) {
        if (error instanceof Error)
            dispatch(notesFetchingError(error.message))
    }
}