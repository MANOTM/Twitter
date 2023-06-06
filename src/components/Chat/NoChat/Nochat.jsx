import React from 'react'
import { useStateContext } from '../../../contexts/ContextProvider';

export const Nochat = () => {
    const { setShowingCard } = useStateContext(); 
  return (
    <div className="no_user_select">
            <div className="no_user_content">
              <span>Select a message</span>
              <p>Choose from your existing conversations, start a new one, or just keep swimming.</p>
              <button className='tweet__bottom bg-blue'  onClick={()=>setShowingCard(true)}> New message</button>
            </div>
          </div>
  )
}
