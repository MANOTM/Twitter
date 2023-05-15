import React from 'react'
import Trends from '../../components/Trends/Trends'
import Main from '../../layouts/Main'
import { useStateContext } from '../../contexts/ContextProvider'
import { useSelector } from 'react-redux'
import Tweet from '../../components/posts/Tweets/Tweet'

export default function Explore() {
  const { loggedIn } = useSelector(state => state.Auth);
  const { SetTitle } = useStateContext();
  SetTitle()
  const tweet = {
      comments: 0,
      created_at: "2021-05-12T15:25:32.000000Z",
      description: "hello good man",
      email: "Antigone@antigone.ma",
      id: 1,
      idUser: 3,
      image: "https://pbs.twimg.com/media/Fvx0FtAaEAARGBp?format=jpg&name=small",
      likes: 0,
      name: "Antigone",
      pp: null,
      pseudo: "@Atingone444",
      video: null,
  };
  const video = {
      comments: 0,
      created_at: "2021-05-12T15:25:32.000000Z",
      description: "green day move on to another world",
      email: "Antigone@antigone.ma",
      id: 1,
      idUser: 3,
      image: null,
      video: true,
      likes: 0,
      name: "King",
      pp: null,
      pseudo: "@Atingone444",
  };
  return (
        <Main>
          {
            loggedIn ? 
            <Trends FromExplore={true} />
            :
            <>
              <Tweet tweet={tweet} />
              <Tweet tweet={video} />
            </>
          }
        </Main>
  )
}
