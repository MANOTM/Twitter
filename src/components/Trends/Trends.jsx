import React from 'react'
import './Trends.css'
import SearchIcon from '../Icons/SearchIcon'
import TrendItem from './TrendItem' 
import { ShowMore } from '../ShowMore/ShowMore'
import useFetch from '../../hooks/useFetch'
import Loading from '../Loading/Loading'
import { useStateContext } from '../../contexts/ContextProvider'
export default function Trends({FromExplore}) {
  
  const { loading, data } = useFetch('/trends');
  const { IsArabic } = useStateContext();

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
                data?.data?.map(one => <TrendItem title={one.hashtag} count={one.count} isArabic={IsArabic(one.hashtag)} />)
              }
            </div>
            {!loading && <ShowMore to='#'/>}
        </div>  
    </div> 
  )
}
