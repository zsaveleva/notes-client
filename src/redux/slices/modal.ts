import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface modalSliceState {
    modalEditing: boolean
    modalDelete: boolean
}

const initialState: modalSliceState = {
    modalEditing: false,
    modalDelete: false
}

const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        //Изменение состояния окна редактирования
        setModalEditing(state, action: PayloadAction<boolean>) {
            state.modalEditing = action.payload
        },
        //Изменение состояния окна удаления
        setModalDelete(state, action: PayloadAction<boolean>) {
            state.modalDelete = action.payload
        }
    }
})

export const { setModalEditing, setModalDelete } = modalSlice.actions
export const modalReducer = modalSlice.reducer