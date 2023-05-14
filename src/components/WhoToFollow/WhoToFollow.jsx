import React from 'react'
import './WhoToFollow.css'
import SuggestionUser from './SuggestionUser'
import { ShowMore } from '../ShowMore/ShowMore'
import useFetch from '../../hooks/useFetch'
import Loading from '../Loading/Loading'

export default function Suggestions() {
  const {data,loading}=useFetch('usersToFollow/') 
  return (
    <div className="whotofollow bg-0">
      <header className='trends__header'>
        <span className='trends__title'>Who to follow</span>
      </header>
      {loading ? <Loading/>:
      <>
      <div className="suggestions">
        {data?.data?.slice(0,2).map((user,id)=>{
          return <SuggestionUser key={id} name={user?.name} username={user?.pseudo} avatar={user.avatar}/>
        })}
        
      </div>
      <div className="suggestions__more">
        <ShowMore to='/connect'/>
      </div>
      </>
}
    </div>
  )
}
