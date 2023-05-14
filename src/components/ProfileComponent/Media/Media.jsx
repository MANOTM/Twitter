import React from 'react'
import { NoMedia } from '../NoMedia/NoMedia'
import Loading from '../../Loading/Loading'
import useFetch from '../../../hooks/useFetch'
import { useState } from 'react'
import { useEffect } from 'react'
import { NotAuthCard } from '../../NotAuthCard/NotAuthCard'
import { useSelector } from 'react-redux'

export const Media = ({user}) => {
  
  const { loggedIn:Auth } = useSelector(state => state.Auth) 
  const {error , data ,loading} =useFetch('tweets/' + user.pseudo) 


  const [dataFilter,setDataFilter]=useState([])
  useEffect(()=>{
    if(data){
      const dataFilter=data.data.filter(tweet=>tweet.image)
      setDataFilter(dataFilter)
    }  
  },[data])
  return (
    <>
    {Auth ? 
    <>
      {!loading && !data ? <NoMedia/>:
        <>
          {loading  ?<Loading/>:
            <>
              {dataFilter.length==0?<NoMedia/>:
                <>
                  {dataFilter.map(tweet=>  
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
      }
      </>
      :<NotAuthCard/>}
    </>
  )
}
