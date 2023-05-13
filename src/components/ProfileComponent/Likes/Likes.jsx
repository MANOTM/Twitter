import React from 'react'
import { NoLike } from '../NoLike/NoLike'
import { NotAuthCard } from '../../NotAuthCard/NotAuthCard'
import { useSelector } from 'react-redux'
import Loading from '../../Loading/Loading'
import Post from '../../posts/Post'
import useFetch from '../../../hooks/useFetch'
import { useStateContext } from '../../../contexts/ContextProvider'
import { useEffect } from 'react'

export const Likes = ({user}) => {
  const { loggedIn:Auth } = useSelector(state => state.Auth) 
  const {error , data ,loading} =useFetch('tweets/' + user.pseudo) 

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
            {data?.data.map(tweet=>  
                        <Post key={tweet.id}
                        usename={user.name}
                        tagname={user.pseudo}
                        verify={true}
                        liked={true}
                        retweeted={false}
                        title={tweet.description}
                        tweet={tweet.image}
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
