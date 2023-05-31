import { PayloadAction, createSlice } from '@reduxjs/toolkit'

interface navigationSliceState {
    activeIndex: number
}

const initialState: navigationSliceState = {
    activeIndex: 0
}

const navigationSlice = createSlice({
    name: 'navigation',
    initialState,
    reducers: {
        setActiveIndex(state, action: PayloadAction<number>) {
            state.activeIndex = action.payload
        }
    }
})

export const { setActiveIndex } = navigationSlice.actions
export const navigationReducer = navigationSlice.reducer