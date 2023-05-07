import { useState } from 'react'
import Details from '../../Icons/Details'
import { ChatContent } from '../ChatContent/ChatContent'
import { ChatInput } from '../ChatInput/ChatInput'
import './ChatRight.css'
import { useRef } from 'react'
import { useEffect } from 'react'

export const ChatRight = () => {
  const userA = { first_name: 'Otmane', last_name: "Mansouri", avatar: 'https://pbs.twimg.com/media/FvCzfM4WIAIKRRP?format=jpg&name=small' }
  const [ShowHide, setShowHide] = useState(false)
 
  return (
    <div className='chat__right'>
      <div className="boite__m__header cursor_auto">
        <div className={`boite__header__info ${ShowHide?'op1':'op0'}`}>
          <div className="small__avatar">
            <img src="https://pbs.twimg.com/profile_images/1266101241555439617/fYekPwW4_normal.jpg" alt="" />
          </div>
          <div className="boite_header__user">
            <span className='boite__header__title'>Otmane Mansouri</span>
          </div>
        </div>
        <div className="boite__header__actions">
          <div className="iconH">
            <Details />
          </div>
        </div>
      </div>
      <div className='boite_messages_scroll'onScroll={(e)=>{
      e.target.scrollTop>250?setShowHide(true):setShowHide(false)
    }}>
        <ChatContent/>
      </div>
      <div className="">
      <ChatInput />
      </div>
    </div>  
  )
}
