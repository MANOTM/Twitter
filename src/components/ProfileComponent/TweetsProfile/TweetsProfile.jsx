import React from 'react'
import useFetch from '../../../hooks/useFetch'
import { WhoToFollow100 } from '../WhoToFollow100/WhoToFollow100'
import Post from '../../posts/Post'
import Loading from '../../Loading/Loading'
import { useSelector } from 'react-redux'
import { NoLike } from '../NoLike/NoLike'
import { useStateContext } from '../../../contexts/ContextProvider'
import { useEffect } from 'react'

export const TweetsProfile = ({userInfo}) => { 
  const {error , data ,loading} =useFetch('tweets/' + userInfo.pseudo) 
  const { loggedIn:Auth , user} = useSelector(state => state.Auth) 
  const {setHeadingCount}=useStateContext()
  useEffect(()=>{
    setHeadingCount(data?.data ? data?.data.length+' tweets':'')
  },[data])
  const LogicShow=(arr)=>{  
    if(arr.length){
      return arr?.map(tweet=>{
        return<Post key={tweet.id}
        usename={userInfo.name}
        tagname={userInfo.pseudo}
        verify={true}
        liked={true}
        retweeted={false}
        title={tweet.description}
        tweet={tweet.image}
    />
      })
    }else if(!arr.length  || user?.id != userInfo?.id){
      return <NoLike action='tweet'/>
    }
  }
  return (
    <> 
      {loading  ?<Loading/>:
          <> 
          { 
            data?.data.length ?data?.data.map(tweet=>{
              return<Post key={tweet.id}
              usename={userInfo.name}
              tagname={userInfo.pseudo}
              verify={true}
              liked={true}
              retweeted={false}
              title={tweet.description}
              tweet={tweet.image}
          />
            }):''  
          } 
          {!data?.data.length && user?.id != userInfo?.id && <NoLike action='Tweeted'/>}
          {Auth && user?.id == userInfo?.id  && <WhoToFollow100/>}
          </>
      } 
    </>
  )
}
