import React from 'react'
import Main from '../../layouts/Main'
import { useStateContext } from '../../contexts/ContextProvider'

export default function Messages() {
  const { SetTitle } = useStateContext();
  SetTitle('Message')
  return (
        <Main> 
          <div>
            {/* Ur Code here  */}
            <h1 className='text-blue'>Messages</h1>
          </div>
        </Main> 
  )
}
