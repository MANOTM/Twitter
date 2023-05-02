import './Messages.css' 
import { useStateContext } from '../../contexts/ContextProvider' 
import { ChatLeft } from '../../components/Chat/ChatLeft/ChatLeft';
import { ChatRight } from '../../components/Chat/ChatRight/ChatRight';

export default function Messages() {
  const { SetTitle } = useStateContext();
  SetTitle('Message')
  return (
       <div className="messages">
          <div className="sideLeftM">
             <ChatLeft/>
          </div>
          <div className="sideRightM">
            <ChatRight/>
          </div>
       </div>
  )
}
