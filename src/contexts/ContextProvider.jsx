import React, { useContext, createContext, useState } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const StateContext = createContext()

export const ContextProvider = ({ children }) => {
    
    const CallToast = (content,time=2222) => {
        setToast({status:true, content})
        let timer = setTimeout(() => {
            setToast({status:false, content:''})
        },time)
    }

    const SetTitle = (title,Dont=false) => {
        if(Dont){
            return document.title = 'Twitter'
        }
        const location = useLocation();
        const { pathname } = location;
        const content = pathname.substring(1)
        useEffect(() => {
            document.title = `${title ? title : content.charAt(0).toUpperCase() + content.slice(1)}
            / Twitter`;
        },[title, content, Dont]);

        return null
    }

    const [Toast, setToast] = useState({ status: false, content: '' })
    const [steps, setSteps] = useState(true)
    const [AuthModal, setAuthModal] = useState(false)
    const [RegisterModal, setRegisterModal] = useState(false)
    const [CardHover, setCardHover] = useState(false)

    return (
        <StateContext.Provider value={{ SetTitle, CallToast, Toast, steps, setSteps, AuthModal, setAuthModal ,CardHover ,setCardHover }}>
            {
                children
            }
        </StateContext.Provider>
    )
}


export const useStateContext = () => useContext(StateContext);