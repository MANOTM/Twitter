import './BoiteMessages.css'
import { ChatHead } from '../ChatHead/ChatHead'
import { BoiteElement } from '../BoiteElement/BoiteElement'
import { ChatContent } from '../ChatContent/ChatContent'
import { ChatInput } from '../ChatInput/ChatInput' 
import { useStateContext } from '../../../contexts/ContextProvider'
import { NewChat } from '../NewChat/NewChat'
import { useRef } from 'react'
import { useEffect } from 'react'

export const BoiteMessages = () => { 
  const {ToBottom,InChat ,userChat}=useStateContext()  

  

  return ( 
    <>
    <div className={`boite__messages ${ToBottom && 'toBottom'} `} >
      <ChatHead />
      <div className={`boite_messages_scroll ${InChat || 'h100'}`} >
        {InChat ? <ChatContent />: <BoiteElement /> }        
      </div>
      {InChat && <ChatInput/> }
    </div>  
    <NewChat/>
    </>
  )
}
