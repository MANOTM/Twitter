import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "./Reducers/AuthReducer";
import RegisterReducer from "./Reducers/RegisterReducer";
import ForgotReducer from "./Reducers/ForgotReducer";
import HomeReducer from "./Reducers/HomeReducer";
import Chat from "./Reducers/Chat";
import CommentReducer from "./Reducers/CommentReducer";
import ReplyReducer from "./Reducers/ReplyReducer";

export const store = configureStore({
    reducer: {
        Auth: AuthReducer,
        Register: RegisterReducer,
        Forgot: ForgotReducer,
        tweets:HomeReducer,
        Chat:Chat,
        comment: CommentReducer,
        reply: ReplyReducer,
    }
})