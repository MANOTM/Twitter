import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "./Reducers/AuthReducer";
import RegisterReducer from "./Reducers/RegisterReducer";
import ForgotReducer from "./Reducers/ForgotReducer";

export const store = configureStore({
    reducer: {
        Auth: AuthReducer,
        Register: RegisterReducer,
        Forgot: ForgotReducer,
    }
})