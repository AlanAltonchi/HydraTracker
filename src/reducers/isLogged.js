import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    logged: false,
    userData: {}
}

const loggedSlice = createSlice({
    name: 'isLogged',
    initialState,
    reducers: {
        login: (state, userData) => {
            state.logged = true
            state.userData = userData.payload
        }
    }
})

export const { login } = loggedSlice.actions

export default loggedSlice.reducer