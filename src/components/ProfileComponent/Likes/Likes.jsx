import React from 'react'
import { NoLike } from '../NoLike/NoLike'
import { NotAuthCard } from '../../NotAuthCard/NotAuthCard'
import { useSelector } from 'react-redux'
import Loading from '../../Loading/Loading'
import useFetch from '../../../hooks/useFetch'
import { useStateContext } from '../../../contexts/ContextProvider'
import { useEffect } from 'react'
import Tweet from '../../posts/Tweets/Tweet'

export const Likes = ({user}) => {
  const { loggedIn:Auth } = useSelector(state => state.Auth) 
  const {error , data ,loading} =useFetch('likedTweets/' + user.pseudo) 
  console.log(data);
  const {setHeadingCount}=useStateContext()
  useEffect(()=>{ 
    setHeadingCount(data?.data && Auth ? data?.data.length+' likes':'')
  },[data])

  return (
    <>
      {Auth ? 
      <>
        {!loading && !data?.data?.length ? <NoLike/>:
        <>
        {loading  ?<Loading/>:
        <>
          {data?.data.map((tweet,id)=>  
                        <Tweet key={id}
                          tweet={tweet}
                        />
                )}
        </>
        }
        </>
        }
      </>
      
      :<NotAuthCard />}
    </>
    
  )
}
