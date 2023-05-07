import './Messages.css'
import { useStateContext } from '../../contexts/ContextProvider'
import { ChatLeft } from '../../components/Chat/ChatLeft/ChatLeft';
import { ChatRight } from '../../components/Chat/ChatRight/ChatRight';
import {  useLocation } from 'react-router-dom';
import { NewChat } from '../../components/Chat/NewChat/NewChat'; 

export default function Messages() {
  const { SetTitle,setShowingCard } = useStateContext(); 
  const path = useLocation().pathname == '/messages' || useLocation().pathname == '/messages/';
  SetTitle('Message')
  return (
    <div className="messages">
      <div className={`sideLeftM ${path || 'over_h'}`}>
        <ChatLeft />
      </div>
      <div className={`sideRightM ${path && 'over_h'}`}  >
        {path ?
          <div className="no_user_select">
            <div className="no_user_content">
              <span>Select a message</span>
              <p>Choose from your existing conversations, start a new one, or just keep swimming.</p>
              <button className='tweet__bottom bg-blue'  onClick={()=>setShowingCard(true)}> New message</button>
            </div>
          </div>
          :<ChatRight/>
        }
        
      </div>
      <NewChat/>
    </div>
  )
}
