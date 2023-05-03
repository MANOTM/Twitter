import React, { useContext, createContext, useState } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const StateContext = createContext()

export const ContextProvider = ({ children }) => {
    
    const [timeoutId, setTimeOutId] = useState(null)
    const CallToast = (content,time=2222) => {
        if(timeoutId) clearTimeout(timeoutId)
        setToast({status:true, content})
        
        let timer = setTimeout(() => {
            setToast({status:false, content:''})
        },time)
        setTimeOutId(timer)
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
    const Mounths = [
        { month: 'January', days: 31 },
        { month: 'February', days: 28 },
        { month: 'March', days: 31 },
        { month: 'April', days: 30 },
        { month: 'May', days: 31 },
        { month: 'June', days: 30 },
        { month: 'July', days: 31 },
        { month: 'August', days: 31 },
        { month: 'September', days: 30 },
        { month: 'October', days: 31 },
        { month: 'November', days: 30 },
        { month: 'December', days: 31 }
    ]

    const [Toast, setToast] = useState({ status: false, content: '' })
    const [steps, setSteps] = useState(true)
    const [AuthModal, setAuthModal] = useState(false)
    const [RegisterModal, setRegisterModal] = useState(false)
    const [CardHover, setCardHover] = useState(false)

    return (
        <StateContext.Provider value={{ Mounths, SetTitle, CallToast, Toast, steps, setSteps, AuthModal, setAuthModal ,CardHover ,setCardHover }}>
            {
                children
            }
        </StateContext.Provider>
    )
}


export const useStateContext = () => useContext(StateContext);