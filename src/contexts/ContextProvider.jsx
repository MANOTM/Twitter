import React, { useContext, createContext, useState } from "react";
// import { useLocation } from "react-router-dom";

const StateContext = createContext()

export const ContextProvider = ({ children }) => {
    const [Auth, setAuth] = useState(false)
    const [User, setUser] = useState()
    const [AuthModal, setAuthModal] = useState(false)
    const [RegisterModal, setRegisterModal] = useState(false)
    const [CardHover, setCardHover] = useState(false)
    return (
        <StateContext.Provider value={{ Auth ,setAuth ,setUser, User, AuthModal, setAuthModal,RegisterModal,setRegisterModal ,CardHover ,setCardHover }}>
            {
                children
            }
        </StateContext.Provider>
    )
}


export const useStateContext = () => useContext(StateContext);