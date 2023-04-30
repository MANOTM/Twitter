import React from 'react'
import './Trends.css'
import SearchIcon from '../Icons/SearchIcon'
import TrendItem from './TrendItem' 
export default function Trends({FromExplore}) {
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
        <div className={FromExplore ? 'trends__content':'trends__content  bg-0'  }>
            <header className='trends__header'>
              <span className='trends__title'>Trends for you</span>
            </header>
            <div className="trends__hashtags">
              <TrendItem type='Sport Tranding' title='برشلونة' count='13.7k' isArabic={true} />
              <TrendItem type='Sport Tranding' title='اشرف_حكيمي' count='13.7k' isArabic={true} />
              <TrendItem type='Sport Tranding' title='Barça' count='1.7k' isArabic={false} />
              <TrendItem type='Sport Tranding' title='مدريد' count='13.7k' isArabic={true} />
              <TrendItem type='Sport Tranding' title='Xavi' count='13.7k' isArabic={false} /> 
            </div>
        </div>  
    </div> 
  )
}
