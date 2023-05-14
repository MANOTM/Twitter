import React from 'react'
import './Bookmarks.css' 
import Main from '../../layouts/Main'
import bookInCage from '../../assets/images/book-in-bird-cage.png' 
import useFetch from '../../hooks/useFetch'
import Loading from '../../components/Loading/Loading'
import { useSelector } from 'react-redux'
import { useStateContext } from '../../contexts/ContextProvider'
import Tweet from '../../components/posts/Tweets/Tweet'


export default function Bookmarks() {
  const { SetTitle } = useStateContext();
  SetTitle()
  const { user } = useSelector(state => state.Auth)
  const {error , data ,loading} =useFetch('bookmarks/' + user?.pseudo)
  return (
    <Main>
      <div className="bookmarks"> 
        <header className='bookmarks__header'>
          <span className='bookmarks__title'>Bookmarks</span>
          <span className='bookmarks__username'>{ user?.pseudo }</span>
        </header>
      {loading ? <Loading/>  : data?.length ?
        <div className="bookmarks__empty">
          <img src={bookInCage} alt="" />
          <div className="bookmarks__info">
            <span className='bookmarks__empty__title'>Save Tweets for later</span>
            <p className='bookmarks__blabla'>Don’t let the good ones fly away! Bookmark <br />
              Tweets to easily find them again in the future.</p>
          </div>
        </div> : data?.data.map(post=>{
            return <Tweet
                user={user}
                created_at={post.created_at}
                verifyUser={false}
                tweet_image={post.image}
                tweet_title={post.description}
                likes_count={post.likes}
                reply_count={post.comments}
                retweet_count="257M"
                liked={true}
                retweeted={false}
            />
    })
    

  }
        
      </div>
    </Main>

  )
}
