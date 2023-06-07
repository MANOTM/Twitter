import './Messages.css'
import { useStateContext } from '../../contexts/ContextProvider'
import { ChatLeft } from '../../components/Chat/ChatLeft/ChatLeft';
import { ChatRight } from '../../components/Chat/ChatRight/ChatRight';
import {  Route, Routes, useLocation } from 'react-router-dom';
import { NewChat } from '../../components/Chat/NewChat/NewChat'; 
import { Nochat } from '../../components/Chat/NoChat/Nochat';
import { Warning } from '../../components/Modals/Warning/Warning';
import { ChatInfo } from '../../components/Chat/ChatInfo/ChatInfo';

export default function Messages() {
  const { SetTitle } = useStateContext(); 
  const path = useLocation().pathname == '/messages' || useLocation().pathname == '/messages/';
  SetTitle('Message')
  return (
    <div className="messages"> 
      <div className={`sideLeftM ${path || 'over_h'}`}>
        <ChatLeft />
      </div>
      <div className={`sideRightM ${path && 'over_h'}`}  >
        <Routes>
          <Route path='/' element={<Nochat/>}/>
          <Route path='/:pseudo' element={<ChatRight/>}/>
          <Route path='/:pseudo/info' element={<ChatInfo/>}/>
        </Routes>
        {/* {path ?<Nochat/>:<ChatRight/>} */}
      </div>
      <NewChat/>
    </div>
  )
}
