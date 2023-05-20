import React from 'react'
import ThreePoints from '../Icons/ThreePoints'
import { Link } from 'react-router-dom'

export default function TrendItem({type,title,count,isArabic,index}) { 
  const nameClass=`hashtag__title ${isArabic && 'hashtag__title__end' }`
  return ( 
    <Link to={`/search/${title.substring(1)}`} className="trends__hashtag">
      <div className="trend__option__icon center"><ThreePoints /></div>
      <span className='hashtag__gray'>#{index+1} Trending</span>
      <span className={nameClass}>{title.substring(1)}</span>
      <span className='hashtag__gray'>{count} Tweets</span>
  </Link>
  )
}
