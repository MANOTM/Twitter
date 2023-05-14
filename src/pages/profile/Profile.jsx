import './profile.css'
import Main from '../../layouts/Main' 
import { ProfileHead } from '../../components/ProfileComponent/ProfileHead/ProfileHead'
import { NavLink, Route, Routes, useParams, useSearchParams } from 'react-router-dom'
import { ProfileInfo } from '../../components/ProfileComponent/ProfileInfo/ProfileInfo'
import { Media } from '../../components/ProfileComponent/Media/Media'
import { Likes } from '../../components/ProfileComponent/Likes/Likes'
import { WhoToFollow100 } from '../../components/ProfileComponent/WhoToFollow100/WhoToFollow100'
import useFetch from '../../hooks/useFetch'
import Loading from '../../components/Loading/Loading'
import PorfileNotFound from '../NotFound/ProfileNotFound/PorfileNotFound'
import { TweetsProfile } from '../../components/ProfileComponent/TweetsProfile/TweetsProfile'
import NotFound from '../NotFound/NotFound'   
import { useEffect, useState } from 'react'
import axios from '../../api/axios'
function Profile() {
  const {pseudo}=useParams() 
  
  // const { data ,loading} =useFetch('profile/@' + pseudo) 
  
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState(null) 
 
  useEffect(()=>{
    setLoading(true)
    axios.get('profile/@' + pseudo)
      .then(function (response) {
        setData(response.data)
        setLoading(false)
      })
      .catch(function (error) {
        setLoading(false)
        setError(false)
      });  
  },[pseudo])
  return (
    <>
    {loading && !data ? <PorfileNotFound/>:
      <Main> 
        {loading  ?<Loading/>:
        <div className="profile scroll">
          <ProfileHead name={data.data.name}/>
          <ProfileInfo data1={data.data}/>
          <div className="profile__links">
              <NavLink to='' > Tweets  </NavLink>
              <NavLink to='replies' > Replies </NavLink>
              <NavLink to='media' > Media  </NavLink>
              <NavLink to='likes'> Likes  </NavLink>
          </div>
          <div className="profile_selecte">
            <Routes>
             <Route path='/'  element={<TweetsProfile userInfo={data.data}/>}/>
             <Route path='/replies' element={<WhoToFollow100/>}/>
             <Route path='/media' element={<Media user={data.data}/>}/>
             <Route path='/likes' element={<Likes user={data.data}/>}/> 
             <Route path='/*' element={<NotFound />}/> 
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
