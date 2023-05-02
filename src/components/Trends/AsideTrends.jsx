import React from 'react'
import Trends from './Trends'
import WhoToFollow from '../WhoToFollow/WhoToFollow'
import PolicyLinks from '../PolicyLinks/PolicyLinks'

export default function AsideTrends({children}) {
  return (
    <div className='AsideTrends'>
        <Trends/>
        <WhoToFollow/>
        <PolicyLinks />
    </div>
  )
}
