import React from 'react'
import Main from '../../layouts/Main'
import { useNavigate } from 'react-router-dom'
import Back from '../../components/Icons/Back'
import SuggestionUser from '../../components/WhoToFollow/SuggestionUser'
import './Connect.css'
import Loading from '../../components/Loading/Loading'
import useFetch from '../../hooks/useFetch'
export const Connect = () => {
  const navigator = useNavigate()
  const {data,loading}=useFetch('usersToFollow/') 
  return (
    <Main>
      <div className='profile__head'>
        <div className="iconH" onClick={() => navigator(-1)}>
          <Back />
        </div>
        <div className="profile__head_text">
          <span className='profile__head_name'>Connect</span> 
        </div>
      </div>
      <div className='connect'>
       <span className='trends__title'>Suggested for you</span>
        {loading?<Loading/>:
          data?.data?.map((user,id)=>{
            return <SuggestionUser key={id} userSu={user}/>
          })
        }
      </div>
    </Main>
  )
}
