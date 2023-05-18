import React from 'react'
import './main.css'
import { useStateContext } from '../contexts/ContextProvider'
export default function Main({children}) {
  const { show__createTweet } = useStateContext()
  return (
    <div className={`main scroll ${!show__createTweet && 'z-index'}`}>
        {children}
    </div>
  )
}
