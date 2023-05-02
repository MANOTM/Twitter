import './BoiteMessages.css'
import { ChatHead } from '../ChatHead/ChatHead'
import { BoiteElement } from '../BoiteElement/BoiteElement'
import { ChatContent } from '../ChatContent/ChatContent'
import { ChatInput } from '../ChatInput/ChatInput' 
import { useStateContext } from '../../../contexts/ContextProvider'

export const BoiteMessages = () => { 
  const {ToBottom,InChat }=useStateContext() 

  return ( 
    <div className={`boite__messages ${ToBottom && 'toBottom'} `}>
      <ChatHead />
      <div className={`boite_messages_scroll ${InChat || 'h100'}`}>
        {InChat ? <ChatContent />: <BoiteElement /> }        
      </div>
      {InChat && <ChatInput/> }
    </div> 
  )
}
