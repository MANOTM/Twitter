import React from 'react'
import './Bookmarks.css' 
import Main from '../../layouts/Main'
import bookInCage from '../../assets/images/book-in-bird-cage.png' 
import useFetch from '../../hooks/useFetch'
import Loading from '../../components/Loading/Loading'
import Post from '../../components/posts/Post' 
import { useSelector } from 'react-redux'
import { useStateContext } from '../../contexts/ContextProvider'


export default function Bookmarks() {
  const { SetTitle } = useStateContext();
  SetTitle()
  const { user } = useSelector(state => state.Auth)
  const {error , data ,loading} =useFetch('bookmarks/' + user.pseudo)
  return (
    <Main>
      <div className="bookmarks"> 
        <header className='bookmarks__header'>
          <span className='bookmarks__title'>Bookmarks</span>
          <span className='bookmarks__username'>{ user.pseudo }</span>
        </header>
      {loading ? <Loading/>  : data !== undefined ?
        <div className="bookmarks__empty">
          <img src={bookInCage} alt="" />
          <div className="bookmarks__info">
            <span className='bookmarks__empty__title'>Save Tweets for later</span>
            <p className='bookmarks__blabla'>Don’t let the good ones fly away! Bookmark <br />
              Tweets to easily find them again in the future.</p>
          </div>
        </div> : data?.data.map(post=>{
        return <Post
              usename={post.name}
              tagname={post.pseudo}
              tweet={post.image}
              verify={true}
              liked={false}
              retweeted={true}
              title={post.description}
              numberLikes={post.likes}
              numberComments={post.comments}
              // data:image/jpeg;base64,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
      />
    })
    

  }
        
      </div>
       
     
    </Main>

  )
}
