import { createSlice } from '@reduxjs/toolkit'

const initialState = false

const loggedSlice = createSlice({
    name: 'isLogged',
    initialState,
    reducers: {
        login: (state) => {
            return true
        }
    }
})

export const { login } = loggedSlice.actions

export default loggedSlice.reducer