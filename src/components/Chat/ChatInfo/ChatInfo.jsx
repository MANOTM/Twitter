import { useNavigate, useParams } from "react-router-dom"
import Back from "../../Icons/Back"
import './ChatInfo.css'
import SuggestionUser from "../../WhoToFollow/SuggestionUser"
import { useState } from "react"
import { useSelector } from "react-redux"
import { useStateContext } from "../../../contexts/ContextProvider"
import { useEffect } from "react"
import Loading from "../../Loading/Loading"
import { Nochat } from "../NoChat/Nochat"
import { Warning } from "../../Modals/Warning/Warning"


export const ChatInfo = () => {
    const navigate = useNavigate()
    const { pseudo } = useParams()
    const { userChat, handelChat, CallToast } = useStateContext()
    const { status, converstions } = useSelector((state) => state.Chat);
    const [notFound, setNotFound] = useState(false)
    const [warning, setWarning] = useState(false)
    useEffect(() => {
        setNotFound(false)
        if (status == 'ok') {
            const findUser = converstions.find(item => item.receiver_pseudo == pseudo)
            findUser === undefined ? setNotFound(true) : handelChat(findUser)
        }
    }, [status, pseudo, converstions])  
    return (
        status == 'loading' ? <Loading /> :
            <>
                {notFound ? <Nochat /> :
                    <div className='chat__right'>
                        <div className="boite__m__header cursor_auto">
                            <div className='boite__header__info'>
                                <div className=" iconH" onClick={() => navigate(-1)}>
                                    <Back />
                                </div>
                                <div className="boite_header__user">
                                    <span className='boite__header__title'>Conversation info</span>
                                </div>
                            </div>
                        </div>
                        <SuggestionUser userSu={{ name: userChat?.receiver_name, pseudo: userChat?.receiver_pseudo, image: userChat?.receiver_pp }} />
                        <hr />
                        <div className="chat_info_action" onClick={() => { CallToast("Sorry We don't have this option yet😢", 3000); }}>
                            Block {userChat?.receiver_pseudo}
                        </div>
                        <div className="chat_info_action" onClick={() => { CallToast("Sorry We don't have this option yet😢", 3000); }}>
                            Report {userChat?.receiver_pseudo}
                        </div>
                        <div className="chat_info_action red" onClick={()=>setWarning(true)}>
                            Leave conversation
                        </div>

                        {warning && <Warning userId={userChat?.idReceiver} close={()=>setWarning(false)} />}
                    </div>

                }
            </>

    )
} 