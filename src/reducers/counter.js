import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    count: 0
}

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.count += 1
        },
        decrement: (state) => {
          if (state.count > 0)
            state.count -= 1
        },
        setCount: (state, action) => {
          state.count = action.payload
        }
    }
})

export const { increment, decrement, setCount } = counterSlice.actions

export default counterSlice.reducer