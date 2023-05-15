import { createSlice } from "@reduxjs/toolkit";

export const ForgotSlice = createSlice({
    name: "Forgot",
    initialState: {
        step: 1,
        inputs: {},
        button: false,
        loading: false,
        checkPassword: false,
    },
    reducers: {
        goStep: state => {
            state.step++
        },
        backStep: state => {
            state.step--
        },
        buttonOff: state => {
            state.button = false
        },
        buttonOn: state => {
            state.button = true
        },
        handleForgotChange: (state,actions) => {
            const { name, value } = actions.payload;
            const RegExEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
            if(name == 'email' && RegExEmail.test(value)) state.button = true
            if(name == 'email' && !RegExEmail.test(value)) state.button = false
            state.inputs = { ...state.inputs, [name] : value, }
        },
        handleLoading: state => {
            state.loading = !state.loading
        },
        StopForgot: state => {
            state.step = 1
            state.button = false
            state.loading = false
            state.inputs = {}
        },
        handlePasswordCheck: state => {
            const { password, passwordConfirmation } = state.inputs;
            state.checkPassword = false
            if(password && passwordConfirmation){
                if(password.length >= 8){
                    if(password == passwordConfirmation){
                        console.log(password, passwordConfirmation);
                        state.checkPassword = true
                    }
                }
            }
        }
    }
});


export const { goStep, backStep, buttonOff, buttonOn, handleForgotChange, StopForgot, handleLoading, handlePasswordCheck } = ForgotSlice.actions;

export default ForgotSlice.reducer;