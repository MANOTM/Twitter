import React from 'react'
import Trends from './Trends'
import WhoToFollow from '../WhoToFollow/WhoToFollow'
import PolicyLinks from '../PolicyLinks/PolicyLinks'
import { useLocation } from 'react-router-dom';

export default function AsideTrends({children}) {
  const location = useLocation();
  const connect = location.pathname == '/connect';
  const search = location.pathname.includes('search')
  return (
    <div className='AsideTrends scroll'>
        {
          !search && <Trends/>
        }
        {
          !connect && <WhoToFollow/>
        }
        <PolicyLinks />
    </div>
  )
}
