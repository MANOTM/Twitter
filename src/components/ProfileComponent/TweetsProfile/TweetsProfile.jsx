import React from 'react'
import useFetch from '../../../hooks/useFetch'
import { WhoToFollow100 } from '../WhoToFollow100/WhoToFollow100'
import Post from '../../posts/Post'
import Loading from '../../Loading/Loading'
import { useSelector } from 'react-redux'
import { NoLike } from '../NoLike/NoLike'

export const TweetsProfile = ({user}) => { 
  const {error , data ,loading} =useFetch('tweets/' + user.pseudo) 
  const { loggedIn:Auth} = useSelector(state => state.Auth) 
  return (
    <> 
      {loading && !error ?<Loading/>:
          <> 
          {
            data?.data.lenght==0 &&  !Auth   && <NoLike/>
          }
              {data?.data.map(tweet=>{
                      return<Post key={tweet.id}
                      usename={user.name}
                      tagname={user.pseudo}
                      verify={true}
                      liked={true}
                      retweeted={false}
                      title={tweet.description}
                      tweet={tweet.image}
                  />
              })}
              {Auth && <WhoToFollow100/>}
          </>
      } 
    </>
  )
}
