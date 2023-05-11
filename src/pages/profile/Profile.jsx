import './profile.css'
import Main from '../../layouts/Main' 
import { ProfileHead } from '../../components/ProfileComponent/ProfileHead/ProfileHead'
import { NavLink, Route, Routes, useLocation } from 'react-router-dom'
import { ProfileInfo } from '../../components/ProfileComponent/ProfileInfo/ProfileInfo'
import { Media } from '../../components/ProfileComponent/Media/Media'
import { Likes } from '../../components/ProfileComponent/Likes/Likes'
import { WhoToFollow100 } from '../../components/ProfileComponent/WhoToFollow100/WhoToFollow100'
function Profile() {
  const location = useLocation()
  return (
      <Main> 
        <div className="profile scroll">
          <ProfileHead name={'Otmane Mnasouri'} tweetCount={'13.2k'}/>
          <ProfileInfo/>
          <div className="profile__links">
              <NavLink to='' > Tweets  </NavLink>
              <NavLink to='replies' > Replies </NavLink>
              <NavLink to='media' > Media  </NavLink>
              <NavLink to='likes' > Likes  </NavLink>
          </div>
          <div className="profile_selecte">
            <Routes>
             <Route path='/'  element={<WhoToFollow100/>}/>
             <Route path='/replies' element={<WhoToFollow100/>}/>
             <Route path='/media' element={<Media/>}/>
             <Route path='/likes' element={<Likes/>}/> 
            </Routes> 
          </div>
        </div>
      </Main>
  )
}

export default Profile
