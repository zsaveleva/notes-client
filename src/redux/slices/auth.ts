import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RegisterFormValues } from '../../pages/Registration'
import { LoginFormValues } from '../../pages/Login'

export interface User {
    _id: string
    fillName: string
    email: string
    createdAt: string
    updatedAt: string
}

export interface AdvancedUser {
    token: string
}

interface authSliceState {
    error: {
        login: string
        register: string
        authMe: string
    },
    data: User | AdvancedUser | LoginFormValues | RegisterFormValues | null
}

const initialState: authSliceState = {
    error: {
        login: '',
        register: '',
        authMe: ''
    },
    data: null
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        authFetching(state) {
            state.data = null
        },
        authFetchingSuccess(state, action: PayloadAction<LoginFormValues | AdvancedUser>) {
            state.data = action.payload
            if ('token' in action.payload) {
                window.localStorage.setItem('token', action.payload.token)
            }
            state.error.login = ''
        },
        authFetchingError(state, action: PayloadAction<string>) {
            state.data = null
            state.error.login = action.payload

        },
        registerFetching(state) {
            state.data = null
        },
        registerFetchingSuccess(state, action: PayloadAction<RegisterFormValues>) {
            state.data = action.payload
            state.error.register = ''
        },
        registerFetchingError(state, action: PayloadAction<string>) {
            state.data = null
            state.error.register = action.payload
        },
        authMeFetching(state) {
            state.data = null
        },
        authMeFetchingSuccess(state, action: PayloadAction<User | null>) {
            state.data = action.payload
            state.error.authMe = ''
        },
        authMeFetchingError(state, action: PayloadAction<string>) {
            state.data = null
            state.error.authMe = action.payload
        },
        logout: (state) => {
            state.data = null
        }
    }
})

export const selectIsAuth = (state: any) => Boolean(state.auth.data)
export const authReducer = authSlice.reducer
export const {
    authFetching,
    authFetchingSuccess,
    authFetchingError,
    registerFetching,
    registerFetchingSuccess,
    registerFetchingError,
    authMeFetching,
    authMeFetchingSuccess,
    authMeFetchingError,
    logout
} = authSlice.actions