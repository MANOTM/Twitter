import React from 'react'
import Trends from './Trends'
import WhoToFollow from '../WhoToFollow/WhoToFollow'
import PolicyLinks from '../PolicyLinks/PolicyLinks'
import { useLocation } from 'react-router-dom';

export default function AsideTrends({children}) {
  const connect = useLocation().pathname == '/connect';
  return (
    <div className='AsideTrends scroll'>
        <Trends/>
        {
          !connect && <WhoToFollow/>
        }
        <PolicyLinks />
    </div>
  )
}
