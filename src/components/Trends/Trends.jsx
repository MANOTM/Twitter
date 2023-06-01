import React, { useState } from 'react'
import './Trends.css'
import SearchIcon from '../Icons/SearchIcon'
import TrendItem from './TrendItem' 
import { ShowMore } from '../ShowMore/ShowMore'
import useFetch from '../../hooks/useFetch'
import Loading from '../Loading/Loading'
import { useStateContext } from '../../contexts/ContextProvider'
import { useLocation, useParams } from 'react-router-dom'
import SearchComponent from './Components/Search/SearchComponent'
import TrendResult from './Components/TrendResult/TrendResult'
import { useSelector } from 'react-redux'

export default function Trends({FromExplore}) {
  
  const location = useLocation();
  const explore = location.pathname.includes('explore')
  const trend = explore ? 5 : 9;
  const search = location.pathname.includes('search');
  const { loggedIn } = useSelector(state => state.Auth);
  const { loading, data } = loggedIn ? useFetch('/trends') : useFetch('/')
  const { hashtag } = useParams();
  const { IsArabic, SetTitle } = useStateContext();
  hashtag && SetTitle(`${hashtag} - Wazoo Search`)
  return ( 
    <div className='trends'>  
        <SearchComponent hashtag={hashtag?hashtag:null} />
        {
          search ? <TrendResult hashtag={hashtag} /> : (
            <div className={ FromExplore ? 'trends__content':'trends__content  bg-0' }>
                <header className='trends__header'>
                  <span className='trends__title'>Trends for you</span>
                </header>
                  <div className="trends__hashtags">
                    {
                      loading ? <Loading /> : data?.data?.length && 
                      data?.data?.slice(0, trend).map((one,i) => <TrendItem key={i} index={i} title={one.hashtag} count={one.count} isArabic={IsArabic(one.hashtag)} />)
                    }
                  </div>
                  {!loading && <ShowMore to={explore ? '/i/trends' : '/explore'}/>}
            </div>  
            )
        }
    </div> 
  )
}
