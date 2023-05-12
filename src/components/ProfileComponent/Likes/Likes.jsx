import React from 'react'
import { NoLike } from '../NoLike/NoLike'
import { NotAuthCard } from '../../NotAuthCard/NotAuthCard'
import { useSelector } from 'react-redux'

export const Likes = () => {
  const { loggedIn:Auth } = useSelector(state => state.Auth) 
  return (
    <>
      {Auth ? 
      
      <NoLike/>
      
      
      :<NotAuthCard />}
    </>
    
  )
}
