import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import axios from '../../axios'

export interface Note extends Fields {
    _id: string
}

export interface Notes {
    previos: {
        page: number
        limit: number
    },
    results: Note[]
}

export interface Fields {
    title: string
    text: string
}

//Запрос удаления
export const fetchRemoveNote = createAsyncThunk('notes/fetchRemoveNote', async (id: string) => {
    await axios.delete<Note>(`/notes/${id}`)
})

//Запрос добавления объекта
export const fetchAddNote = createAsyncThunk('notes/fetchAddNote', async (fields: Fields) => {
    const { data } = await axios.post<Note>('notes', fields)
    return data
})

interface notesSliceState {
    items: Note[]
    isLoading: boolean
    error: string
}

const initialState: notesSliceState = {
    items: [],
    isLoading: false,
    error: ''
}

interface updatedData {
    updatedTitle: string
    updatedText: string
    id: string
}

const notesSlice = createSlice({
    name: 'notes',
    initialState,
    reducers: {
        // Получение объектов
        notesFetching(state) {
            state.items = []
            state.isLoading = true
        },
        notesFetchingSuccess(state, action: PayloadAction<Notes>) {
            state.items = action.payload.results
            state.isLoading = false
            state.error = ''
        },
        notesFetchingError(state, action: PayloadAction<string>) {
            state.items = []
            state.isLoading = false
            state.error = action.payload

        },
        // Обновление данных после редактирования объекта
        update: (state, action: PayloadAction<updatedData>) => {
            state.items.map((note) => {
                if (note._id === action.payload.id) {
                    note.title = action.payload.updatedTitle
                    note.text = action.payload.updatedText
                } else {
                    return note
                }
            })
        }
    },
    extraReducers(builder) {
        //Удаление объекта
        builder.addCase(fetchRemoveNote.pending, (state, action) => {
            state.items = state.items.filter(obj => obj._id !== action.meta.arg)
        })
        // Добавление объекта
        builder.addCase(fetchAddNote.fulfilled, (state, action: PayloadAction<Note>) => {
            state.items.push(action.payload)
        })
    },
})

export const { notesFetching, notesFetchingSuccess, notesFetchingError, update } = notesSlice.actions
export const notesReducer = notesSlice.reducer