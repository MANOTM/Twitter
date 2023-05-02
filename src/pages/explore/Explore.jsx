import React from 'react'
import Trends from '../../components/Trends/Trends'
import Main from '../../layouts/Main'
import { useStateContext } from '../../contexts/ContextProvider'

export default function Explore() {
  const { SetTitle } = useStateContext();
  SetTitle()
  return (
        <Main>
          <Trends FromExplore={true} />
        </Main>
  )
}
