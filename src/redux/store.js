import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "./Reducers/AuthReducer";
import RegisterReducer from "./Reducers/RegisterReducer";
import ForgotReducer from "./Reducers/ForgotReducer";
import HomeReducer from "./Reducers/HomeReducer";
import Followin from "./Reducers/Following";

export const store = configureStore({
    reducer: {
        Auth: AuthReducer,
        Register: RegisterReducer,
        Forgot: ForgotReducer,
        tweets:HomeReducer,
        followings:Followin
    }
})