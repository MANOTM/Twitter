import { useEffect } from "react"
import { useStateContext } from "../../../contexts/ContextProvider"
import useFetch from "../../../hooks/useFetch"
import { NoLike } from "../NoLike/NoLike"
import { useState } from "react"
import Loading from "../../Loading/Loading"
import Tweet from "../../posts/Tweets/Tweet"
import Retweet from "../../posts/Retweet/Retweet"


export const RetweetProfile = ({userInfo}) => {
  const {error , data ,loading} =useFetch('tweets/' + userInfo?.pseudo)  
  const {setHeadingCount}=useStateContext()
  const [dataFilter,setDataFilter]=useState([])

  useEffect(()=>{
    setHeadingCount(dataFilter?.length+' Retweets')
  },[dataFilter])

  useEffect(()=>{
    if(data){
      const dataFilter=data.data.filter(retweet=>retweet.orginaUserId)
      setDataFilter(dataFilter)
    }  
  },[data]) 
  return (
    <>
    {loading ? <Loading/> : !dataFilter.length?<NoLike action='retweeted'/>:
      <>
        {dataFilter?.map((retweet,index)=><Retweet key={index} tweet={retweet}/>)}
      </>
    } 
    
    </>
  )
}
