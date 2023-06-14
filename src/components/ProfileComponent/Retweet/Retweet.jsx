import { useEffect } from "react"
import { useStateContext } from "../../../contexts/ContextProvider"
import useFetch from "../../../hooks/useFetch"
import { NoLike } from "../NoLike/NoLike"
import { useState } from "react"
import Loading from "../../Loading/Loading"
import Tweet from "../../posts/Tweets/Tweet"
import Retweet from "../../posts/Retweet/Retweet"
import axios from "../../../api/axios"
import { useSelector } from "react-redux"


export const RetweetProfile = ({userInfo}) => { 
  const {setHeadingCount}=useStateContext()
  const [dataFilter,setDataFilter]=useState([])
  const { loggedIn:Auth , user} = useSelector(state => state.Auth) 



  const [loading, setLoading] = useState(true)
  const [data, setData] = useState(null) 
  useEffect(()=>{  
      axios.get( Auth ? 'tweetsProtected/'+ userInfo?.pseudo: 'tweets/' + userInfo?.pseudo ) 
      .then(function (response) {
        setData(response.data)
        setLoading(false) 
      })
      .catch(function (error) {
        setLoading(false) 
        console.log(error);
      });  
  },[]) 

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
