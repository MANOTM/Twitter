import './Messages.css' 
import { useStateContext } from '../../contexts/ContextProvider'

export default function Messages() {
  const { SetTitle } = useStateContext();
  SetTitle('Message')
  return (
       <div className="messages">
          <div className="sideLeftM">
              <h1>users</h1>
          </div>
          <div className="sideRightM">
            <h1>Chat</h1>
          </div>
       </div>
  )
}
