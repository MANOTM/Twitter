import { useEffect, useState } from 'react'
import Details from '../../Icons/Details'
import avatar from '../../../assets/images/defaultProfile.png'
import { ChatContent } from '../ChatContent/ChatContent'
import { ChatInput } from '../ChatInput/ChatInput'
import './ChatRight.css'
import Back from '../../Icons/Back'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useStateContext } from '../../../contexts/ContextProvider'
import axios from '../../../api/axios'
import Loading from '../../Loading/Loading'
import { Nochat } from '../NoChat/Nochat'
import { useSelector } from 'react-redux'
import { useRef } from 'react'


export const ChatRight = () => {
  const { userChat,handelChat } = useStateContext()
  const { pseudo } = useParams()
  const [notFound, setNotFound] = useState(false)
  
    const [ShowHide, setShowHide] = useState(false)
    const navigate = useNavigate();

  const { status, converstions ,justForHelp} = useSelector((state) => state.Chat); 
  
//scroll
const messagesEndRef = useRef(null);
useEffect(()=>{
 if(messagesEndRef?.current){ 
  setTimeout(() => {
    scrollTobottom()
  }, 100);
 } 
},[justForHelp,pseudo,status])

  useEffect(() => {
    setNotFound(false)
    if (status == 'ok') { 
      const findUser = converstions.find(item => item.receiver_pseudo == pseudo) 
      findUser === undefined ?setNotFound(true):handelChat(findUser)
    }
  }, [status, pseudo, converstions])
  return (
    status == 'loading' ? <Loading /> :
      <>
        {notFound ? <Nochat /> :
          <div className='chat__right'>
            <div className="boite__m__header cursor_auto">
              <div className={`boite__header__info ${ShowHide ? 'op1' : 'op0'}`}>
                <div className="d-none iconH" onClick={() => navigate('/messages')}>
                  <Back />
                </div> 
                <Link to={`/`+userChat?.receiver_pseudo.substring(1)} className="small__avatar">
                  <img src={userChat?.receiver_pp ||  avatar} alt="" />
                </Link>
                <Link to={`/`+userChat?.receiver_pseudo.substring(1)}  className="boite_header__user">
                  <span className='boite__header__title'>{userChat?.receiver_name }</span>
                </Link> 
              </div>
              <div className="boite__header__actions">
                <Link to={'info'} className="iconH">
                  <Details />
                </Link>
              </div>
            </div>
            <div className='boite_messages_scroll' id='ee' ref={messagesEndRef} onScroll={(e) => {
              e.target.scrollTop > 250 ? setShowHide(true) : setShowHide(false)
            }}> 
              <ChatContent userChat={userChat} /> 
            </div>
            <div className="">
              <ChatInput />
            </div>
          </div>
        }
      </>

  )
}
function scrollTobottom (){ 
  document.getElementById('ee').scrollTop=document.getElementById('ee').scrollHeight 
}
