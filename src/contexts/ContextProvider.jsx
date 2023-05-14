import React, { useContext, createContext, useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import useFetch from "../hooks/useFetch";

const StateContext = createContext()

export const ContextProvider = ({ children }) => {
    const { loggedIn:Auth ,user} = useSelector(state => state.Auth) 
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
    // Don't touch it it's 4 chat || xkon daha fik ana jit ghaa nzid wa7d const dyali saaaaafi
    // a mook sir golha liha dsarti
    const [ToBottom, setToBottom] = useState(true)
    const [InChat, setInChat] = useState(false)
    const [userChat, setUserChat] = useState(null)
    const [ShowingCard,setShowingCard]=useState(false)
    const handelChat=(user)=>{
        setInChat(user ? true : false)
        setUserChat(user)  
    }
    const handelChange = () => {
        setToBottom(!ToBottom) 
    } 
    //--- Profile----//

    const [HeadingCount,setHeadingCount]=useState('')

    //------------//
 
 
    // ---------------------------------
    const [SettingLayouts, setSettingLayouts] = useState(false);
    // ---------------------------------
    return (
        <StateContext.Provider value={{ HeadingCount,setHeadingCount,SettingLayouts, setSettingLayouts, Mounths, ShowingCard,setShowingCard, ToBottom,InChat,userChat,handelChange,handelChat,SetTitle, CallToast, Toast, steps, setSteps, AuthModal, setAuthModal ,CardHover ,setCardHover }}>
            {
                children
            }
        </StateContext.Provider>
    )
}


export const useStateContext = () => useContext(StateContext);