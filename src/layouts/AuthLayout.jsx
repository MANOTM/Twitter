import { Navigate } from "react-router-dom";
import { useStateContext } from "../contexts/ContextProvider";
import { useSelector } from "react-redux";

export function AuthRoute({ element: Element }) {
    const { loggedIn:Auth } = useSelector(state => state.Auth)
    const { CallToast } = useStateContext()
    if(!Auth) {
        CallToast('you shoud login first, to access this page')
        return <Navigate to="/login" />
    }
    return <Element />
}


export function GuestRoute({ element: Element }) {
    const { loggedIn:Auth } = useSelector(state => state.Auth)
    if(Auth) {
        return <Navigate to="/" />
    }
    return <Element />
}