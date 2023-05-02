import { createSlice } from "@reduxjs/toolkit";

export const RegisterSlice = createSlice({
    name: "Register",
    initialState: {
        pages: {
            Start: false,
            step: 0
        }
    },
    reducers: {
        StartSteps: state => {
            state.pages.Start = true
            state.pages.step = 1
        },
        Move: state => {
            state.pages.step++
        },
        MoveBack: state => {
            state.pages.step--
        },
        EndSteps: state => {
            state.pages.Start = false
            state.pages.step = 0
        }
    }
});


export const { StartSteps, Move, MoveBack, EndSteps } = RegisterSlice.actions;

export default RegisterSlice.reducer;