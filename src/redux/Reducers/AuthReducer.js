import { createSlice } from "@reduxjs/toolkit";

export const AuthSlice = createSlice({
    name: "Auth",
    initialState: {
        loggedIn: false,
        user: null
    },
    reducers: {
        LogIn: ( state, actions )=> {
            state.loggedIn = true
            state.user = actions.payload
        },
        logOut: state => {
            state.loggedIn = false
        }
    }
});


export const { LogIn, logOut } = AuthSlice.actions;

export default AuthSlice.reducer;