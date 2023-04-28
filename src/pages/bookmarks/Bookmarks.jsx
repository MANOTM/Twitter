import React from 'react'
import './Bookmarks.css' 
import Main from '../../layouts/Main'
import bookInCage from '../../assets/images/book-in-bird-cage.png' 
import useFetch from '../../hooks/useFetch' 
import Loading from '../../components/Loading/Loading'

export default function Bookmarks() {
  const {error , data ,loading} =useFetch('https://jsonplaceholder.typicode.com/users')
  
  return (
    <Main>
      <div className="bookmarks"> 
        <header className='bookmarks__header'>
          <span className='bookmarks__title'>Bookmarks</span>
          <span className='bookmarks__username'>@MANOTM_1</span>
        </header>
      {loading ? <Loading/> :
        <div className="bookmarks__empty">
          <img src={bookInCage} alt="" />
          <div className="bookmarks__info">
            <span className='bookmarks__empty__title'>Save Tweets for later</span>
            <p className='bookmarks__blabla'>Don’t let the good ones fly away! Bookmark <br />
              Tweets to easily find them again in the future.</p>
          </div>
        </div>}
      </div>
    </Main>
  )
}
