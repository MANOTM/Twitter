import React from 'react'
import Arrow from '../../../Icons/Arrow'
import './TrndsList.css'
import Main from '../../../../layouts/Main'
import { useState } from 'react'
import { useEffect } from 'react'
import useFetch from '../../../../hooks/useFetch'
import TrendItem from '../../TrendItem'
import { useStateContext } from '../../../../contexts/ContextProvider'
import Loading from '../../../Loading/Loading'

export default function TrendsList() {

  const { IsArabic } = useStateContext();
  const { data, loading } = useFetch('/trends');

  return <Main>
    <div className="TrendsList">
      <div className="trend__list__header">
          <div className="trend__list__arrow center">
              <Arrow />
          </div>
          <div className="trend__list__spam">
              <span>Trends</span>
          </div>
      </div>
      <div className="trend__list__hashtags">
          {
            loading ? <Loading /> :  !data?.data?.length ? null :
            data?.data?.map((one, i) => <TrendItem key={i} index={i} title={one.hashtag} count={one.count} isArabic={IsArabic(one.hashtag)} />)
          }
      </div>
  </div>
  </Main>
}
