import React, { useContext, createContext, useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

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

    const IsArabic = (content,pattern = /[\u0600-\u06FF\u0750-\u077F]/) => {
        return pattern.test(content);
    }

    const SetTitle = (title,Dont=false) => {
        if(Dont){
            return document.title = 'Wazoo'
        }
        const location = useLocation();
        const { pathname } = location;
        const content = pathname.substring(1)
        useEffect(() => {
            document.title = `${title ? title : content.charAt(0).toUpperCase() + content.slice(1)}
            / Wazoo`;
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
    // 9ad toast li 5serti wla nfr3ek
    // makhasrt ta la3ba ana ra hadchi dyalk 3la seba
    // 5lenak t5dem m3ana f context o nta dsaar
    // had context kon kan kaydwi kon galk barak
    const [ToBottom, setToBottom] = useState(true)
    const [InChat, setInChat] = useState(false)
    const [userChat, setUserChat] = useState(null)
    const [ShowingCard,setShowingCard]=useState(false)
    const [render,setRender]=useState(false)

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
 
 
// ---------------Setting------------------
const [SettingLayouts, setSettingLayouts] = useState(false);
// ---------------Create Tweet popup------------------
const [show__createTweet, setshow__createTweet] = useState(true);
// ---------------z-index main 0------------------
const [zIndex, setZIndex] = useState(false)
// ----------------Notification Count----------
const [countNotifi, setCountNotifi] = useState(null)

    return (
        <StateContext.Provider value={{ countNotifi, setCountNotifi, setZIndex, zIndex, IsArabic, setRender, render, setshow__createTweet, show__createTweet, HeadingCount, setHeadingCount, SettingLayouts, setSettingLayouts, Mounths, ShowingCard,setShowingCard, ToBottom,InChat,userChat,handelChange,handelChat,SetTitle, CallToast, Toast, steps, setSteps, AuthModal, setAuthModal ,CardHover ,setCardHover }}>
            {
                children
            }
        </StateContext.Provider>
    )
}


export const useStateContext = () => useContext(StateContext);