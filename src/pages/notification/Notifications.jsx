import React from 'react'
import Main from '../../layouts/Main'
import { useStateContext } from '../../contexts/ContextProvider'

export default function Notifications() {

  const { SetTitle } = useStateContext();
  SetTitle()
  return (
        <Main> 
          <div>
            {/* Ur Code here  */}
            <h1 className='text-blue'>Notifications</h1>
          </div>
        </Main>
  ) 
}
