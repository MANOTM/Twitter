import React from 'react'
import './WhoToFollow.css'
import SuggestionUser from './SuggestionUser'
import { ShowMore } from '../ShowMore/ShowMore'
import useFetch from '../../hooks/useFetch'
import Loading from '../Loading/Loading'
import { useSelector } from 'react-redux'

export default function Suggestions() {
  
  const { user:{pseudo} } = useSelector(state => state.Auth)   
  const {data,loading}=useFetch('usersToFollow/') 
  const following= useFetch('followings/'+pseudo ).data
  const loading2= useFetch('followings/'+pseudo ).loading ;

  return (
    <div className="whotofollow bg-0">
      <header className='trends__header'>
        <span className='trends__title'>Who to follow</span>
      </header>
      {loading || loading2 ? <Loading/>:
      <>
      <div className="suggestions">
        {data?.data?.slice(0,2).map((user,id)=>{ 
          return <SuggestionUser key={id} isFollowed={following?.data?.some(follow=> follow?.pseudo == user?.pseudo)} userSu={user}/>
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
