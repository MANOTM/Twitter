import './BoiteMessages.css'
import { ChatHead } from '../ChatHead/ChatHead'
import { BoiteElement } from '../BoiteElement/BoiteElement'
import { ChatContent } from '../ChatContent/ChatContent'
import { ChatInput } from '../ChatInput/ChatInput'
import { useStateContext } from '../../../contexts/ContextProvider'
import { NewChat } from '../NewChat/NewChat'
import { useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'
export const BoiteMessages = () => {
  const { ToBottom, userChat } = useStateContext()
  const { converstions, InChat,justForHelp} = useSelector((state) => state.Chat);
  const messagesEndRef = useRef(null);
  useEffect(() => {
    if (messagesEndRef?.current && InChat) {  
      setTimeout(() => {
        scrollTobottom()
      }, 100);
    }
  }, [InChat,justForHelp])

  return (
    <>
      <div className={`boite__messages ${ToBottom && 'toBottom'} `} >
        <ChatHead />
        <div className={`boite_messages_scroll ${InChat || 'forChat'}`} id='ee' ref={messagesEndRef}>
          {InChat ? <ChatContent userChat={userChat} /> : <BoiteElement />}
        </div>
        {InChat && <ChatInput />}
      </div>
      <NewChat />
    </>
  )
}
function scrollTobottom (){ 
  document.getElementById('ee').scrollTop=document.getElementById('ee').scrollHeight 
}
