import React from 'react'
import Trends from '../../components/Trends/Trends'
import Main from '../../layouts/Main'
import { useStateContext } from '../../contexts/ContextProvider'
import { useSelector } from 'react-redux'
import Tweet from '../../components/posts/Tweets/Tweet'
import useFetch from '../../hooks/useFetch'
import Loading from '../../components/Loading/Loading'
import { WhoToFollow100 } from '../../components/ProfileComponent/WhoToFollow100/WhoToFollow100'

export default function Explore() {
  const { loggedIn } = useSelector(state => state.Auth);
  const { SetTitle } = useStateContext();
  SetTitle()
  const { data, loading } = loggedIn ? useFetch('/') : { data:null, loading:false };
  console.log(loggedIn);
  return (
        <Main>
          {
            !loggedIn ? 
            <Trends FromExplore={true} />
            :
            loading ? <Loading /> : !data?.data?.length ? <WhoToFollow100 /> : <Trends FromExplore={true}/>
            // data?.data?.map(tweet => <Tweet tweet={tweet} />)
          }
        </Main>
  )
}
