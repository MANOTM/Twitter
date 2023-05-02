import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "./Reducers/AuthReducer";
import RegisterReducer from "./Reducers/RegisterReducer";

export const store = configureStore({
    reducer: {
        Auth: AuthReducer,
        Register: RegisterReducer,
    }
})