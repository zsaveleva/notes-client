import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { notesReducer } from './slices/notes';
import { navigationReducer } from './slices/navigation';
import { authReducer } from './slices/auth';
import { modalReducer } from './slices/modal';

const rootReducer = combineReducers({
    notes: notesReducer,
    navigation: navigationReducer,
    modal: modalReducer,
    auth: authReducer
})

export const store = configureStore({
    reducer: rootReducer
})

export type RootState = ReturnType<typeof rootReducer>
export type RootDispatch = typeof store.dispatch