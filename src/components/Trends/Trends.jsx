import React from 'react'
import './Trends.css'
import SearchIcon from '../Icons/SearchIcon'
import TrendItem from './TrendItem' 
import { ShowMore } from '../ShowMore/ShowMore'
import useFetch from '../../hooks/useFetch'
import Loading from '../Loading/Loading'
import { useStateContext } from '../../contexts/ContextProvider'
import { useLocation } from 'react-router-dom'
export default function Trends({FromExplore}) {
  
  const { loading, data } = useFetch('/trends');
  const { IsArabic } = useStateContext();
  const trend = useLocation().pathname.includes('explore') ? 5 : 9

  return ( 
    <div className='trends'>  
        <div className="trends__search">
          <div className="trends__search__content">
            <div className="trends__search__form">
              <label className='trends_search_label' htmlFor="search">
                <SearchIcon fill="#71767b" />
              </label>
              <input type="text" placeholder='Search Twitter' id='search' />
            </div>
          </div>
        </div>  
        <div className={ FromExplore ? 'trends__content':'trends__content  bg-0' }>
            <header className='trends__header'>
              <span className='trends__title'>Trends for you</span>
            </header>
            <div className="trends__hashtags">
              {
                loading ? <Loading /> : data?.data?.length && 
                data?.data?.slice(0, trend).map((one,i) => <TrendItem key={i} title={one.hashtag} count={one.count} isArabic={IsArabic(one.hashtag)} />)
              }
            </div>
            {!loading && trend === 9 && <ShowMore to='/explore'/>}
        </div>  
    </div> 
  )
}
