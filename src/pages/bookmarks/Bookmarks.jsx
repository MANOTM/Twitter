import React from 'react'
import './Bookmarks.css'
import Main from '../../layouts/Main'
import bookInCage from '../../assets/images/book-in-bird-cage.png'
import useFetch from '../../hooks/useFetch'
import Loading from '../../components/Loading/Loading'
import { useSelector } from 'react-redux'
import { useStateContext } from '../../contexts/ContextProvider'
import Tweet from '../../components/posts/Tweets/Tweet'
import { useNavigate } from 'react-router-dom'
import { SettingIcon } from '../notification/Icons/notificationIcons'
import ConnectionCheck from '../../assets/Helper/CheckConnexion'


export default function Bookmarks() {
  const { SetTitle } = useStateContext();
  SetTitle()
  const { user } = useSelector(state => state.Auth)
  const { error, data, loading } = useFetch('bookmarks/' + user?.pseudo)
  const navigate = useNavigate()
  return (
    <Main>
      <div className="bookmarks">
        <header className='bookmarks__header'>
          <div>
            <span className='bookmarks__title'>Bookmarks</span>
            <span className='bookmarks__username'>{user?.pseudo}</span>
          </div>
          <span onClick={() => navigate('/settings/Clear')} className="notification__setting center bokIcon">
            <SettingIcon />
          </span>
        </header>
        <ConnectionCheck>
          {loading ? <Loading /> : !data?.data.length ?
            <div className="bookmarks__empty">
              <img src={bookInCage} alt="" />
              <div className="bookmarks__info">
                <span className='bookmarks__empty__title'>Save Tweets for later</span>
                <p className='bookmarks__blabla'>Don’t let the good ones fly away! Bookmark <br />
                  Tweets to easily find them again in the future.</p>
              </div>
            </div> :
            data?.data.map((post, id) => {
              return <Tweet
                key={id}
                tweet={post}
              />
            })
          }
        </ConnectionCheck>

      </div>
    </Main>

  )
}
