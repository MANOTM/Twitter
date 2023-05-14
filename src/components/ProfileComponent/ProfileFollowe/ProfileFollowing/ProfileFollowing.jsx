import React from 'react'
import Main from '../../../../layouts/Main'
import { FollowerHead } from '../FollowerHead/FollowerHead'
import SuggestionUser from '../../../WhoToFollow/SuggestionUser'
import { Link, useParams } from 'react-router-dom'
import useFetch from '../../../../hooks/useFetch'
import Loading from '../../../Loading/Loading'

export const ProfileFollowing = () => {
  const { pseudo } = useParams()
  const { error, data, loading } = useFetch('followings/@' + pseudo)
  return (
    <Main>
      {loading ? <Loading /> :
        <>
          <div className="profile_followers">
            {data?.data?.length ?
            <>
            {data?.data?.map((user,id)=>{
              return  <SuggestionUser key={id} userSu={user} /> 
            })}
            </>
             :
              <div className="bookmarks__empty">
                <div className="bookmarks__info">
                  <span className='bookmarks__empty__title'>Be in the know</span>
                  <p className='bookmarks__blabla'>Following accounts is an easy way to curate your timeline and know what’s happening with the topics and people you’re interested in.</p>
                  <Link to='/connect'>Find people to follow</Link>
                </div>
              </div>
            }


          </div>
        </>
      }
    </Main>

  )
}
