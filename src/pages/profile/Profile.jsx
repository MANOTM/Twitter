import './profile.css'
import Main from '../../layouts/Main' 
import { ProfileHead } from '../../components/ProfileComponent/ProfileHead/ProfileHead'
import { NavLink, Route, Routes, useParams } from 'react-router-dom'
import { ProfileInfo } from '../../components/ProfileComponent/ProfileInfo/ProfileInfo'
import { Media } from '../../components/ProfileComponent/Media/Media'
import { Likes } from '../../components/ProfileComponent/Likes/Likes'
import { WhoToFollow100 } from '../../components/ProfileComponent/WhoToFollow100/WhoToFollow100'
import useFetch from '../../hooks/useFetch'
import Loading from '../../components/Loading/Loading'
import PorfileNotFound from '../NotFound/ProfileNotFound/PorfileNotFound'
import { TweetsProfile } from '../../components/ProfileComponent/TweetsProfile/TweetsProfile'
function Profile() {
  const {pseudo}=useParams() 
  const {error , data ,loading} =useFetch('profile/' + pseudo)
  return (
    <>
    {!loading && !data ? <PorfileNotFound/>:
      <Main> 
        {loading  ?<Loading/>:
        <div className="profile scroll">
          <ProfileHead name={data.data.name} tweetCount={'13.2k'}/>
          <ProfileInfo data={data.data}/>
          <div className="profile__links">
              <NavLink to='' > Tweets  </NavLink>
              <NavLink to='replies' > Replies </NavLink>
              <NavLink to='media' > Media  </NavLink>
              <NavLink to='likes' > Likes  </NavLink>
          </div>
          <div className="profile_selecte">
            <Routes>
              <Route path='/'  element={<TweetsProfile user={data.data}/>}/>
              <Route path='/replies' element={<WhoToFollow100/>}/>
              <Route path='/media' element={<Media user={data.data}/>}/>
              <Route path='/likes' element={<Likes user={data.data}/>}/> 
            </Routes> 
          </div>
        </div>
        }
      </Main>
    }
    </>
  )
}

export default Profile
