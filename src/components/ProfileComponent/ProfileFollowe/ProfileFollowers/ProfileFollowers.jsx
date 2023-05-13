import React, { useEffect, useState } from 'react'
import Main from '../../../../layouts/Main'
import { FollowerHead } from '../FollowerHead/FollowerHead'
import SuggestionUser from '../../../WhoToFollow/SuggestionUser'
import yellowbirds from '../../../../assets/images/yellow-birds.png'
import '../ProfileFollow.css'
import { useParams } from 'react-router-dom'
import useFetch from '../../../../hooks/useFetch'
import Loading from '../../../Loading/Loading' 

export const ProfileFollowers = () => {
  const { pseudo } = useParams()
  const { error, data, loading } = useFetch('followers/@' + pseudo)   
  return (
    <Main>  
      {loading ? <Loading/>:
      <>
      <div className="profile_followers">
        {loading ? <Loading /> :
          <>
            {data?.data.length ?
               <>
               {data?.data?.map((user,id)=>{
                 return  <SuggestionUser key={id} name={user.name} username={user.pseudo} avatar={user.avatar} /> 
               })}
               </>
              :
              <div className="bookmarks__empty">
                <img src={yellowbirds} className="ProfileFollow_img" />
                <div className="bookmarks__info">
                  <span className='bookmarks__empty__title'>Looking for followers?</span>
                  <p className='bookmarks__blabla'>When someone follows this account, they’ll show up here. Tweeting and interacting with others helps boost followers.</p>
                </div>
              </div>

            }
          </>}
      </div> 
      </>
      }
    </Main>
  )
}
