import { createSlice } from "@reduxjs/toolkit";

export const RegisterSlice = createSlice({
    name: "Register",
    initialState: {
        inputs: {},
        pages: {
            Start: false,
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
        Move: state => {
            state.pages.step++
        },
        MoveBack: state => {
            state.pages.step--
        },
        EndSteps: state => {
            state.pages.Start = false
            state.inputs = {}
            state.pages.step = 0
            state.button.disabled = true
        },
        handleSetValue: (state, actions) => {
            const { name, value } = actions.payload;
            const emailRegex =  /^[^\s@]+@[^\s@]+\.(com|net|ma)$/i;
            // if(name === 'email' && !emailRegex.test(value)) return console.log('not');
            state.inputs = { ...state.inputs, [name] : value, }
            const { name:username , email, year, month, day } = state.inputs;
            state.button.disabled = !username || !email || !year || !month || !day;
        },
        HandleStepsButton: state => {
            state.button.disabled = true
        }
    }
});


export const { StartSteps, Move, MoveBack, EndSteps, handleSetValue, HandleStepsButton } = RegisterSlice.actions;

export default RegisterSlice.reducer;