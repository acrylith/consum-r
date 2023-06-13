import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    value: 0
}

export const counter = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        reset: () => initialState,
        increment: (state) => {
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        }
    }
})

export const { reset, increment, decrement } = counter.actions
export default counter.reducer