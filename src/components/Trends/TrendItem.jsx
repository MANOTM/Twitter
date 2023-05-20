import React from 'react'
import ThreePoints from '../Icons/ThreePoints'

export default function TrendItem({type,title,count,isArabic}) { 
  const nameClass=`hashtag__title ${isArabic && 'hashtag__title__end' }`
  return ( 
    <div className="trends__hashtag hover" title='More'>
      <div className="trend__option__icon center"><ThreePoints /></div>
      <span className='hashtag__gray'>{'type'}</span>
      <span className={nameClass}>{title}</span>
      <span className='hashtag__gray'>{count} Tweets</span>
  </div>
  )
}
