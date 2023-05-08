import { createSlice } from "@reduxjs/toolkit";

export const RegisterSlice = createSlice({
    name: "Register",
    initialState: {
        inputs: {},
        pages: {
            Start: false,
            Loading: true,
            step: 0
        },
        button: {
            disabled: true
        }
    },
    reducers: {
        StartSteps: state => {
            state.pages.Start = true
            state.pages.step = 1
        },
        handleLoading: state => {
            state.pages.Loading = !state.pages.Loading
            state.button.disabled = true
        },
        Move: state => {
            state.pages.step++
            if(state.pages.step > 3) state.button.disabled = true
        },
        MoveBack: state => {
            state.pages.step--
            state.button.disabled = false
        },
        EndSteps: state => {
            state.pages.Start = false
            state.inputs = {}
            state.pages.step = 0
            state.button.disabled = true
        },
        MoveToStepOne: state => {
            state.pages.step = 1
        },
        handleSetValue: (state, actions) => {
            const { name, value } = actions.payload;
            state.inputs = { ...state.inputs, [name] : value, }
            const { name:username , email, year, month, day, password, verify } = state.inputs;
            const info = state.pages.step <= 3 ? (!username || !email || !year || !month || !day) :
            (state.pages.step === 4 ? !verify?.length : password?.length < 8)
            state.button.disabled = info
        },
        HandleStepsButton: state => {
            state.button.disabled = true
        }
    }
});


export const { StartSteps, Move, MoveBack, EndSteps, handleSetValue, HandleStepsButton, MoveToStepOne, handleLoading } = RegisterSlice.actions;

export default RegisterSlice.reducer;