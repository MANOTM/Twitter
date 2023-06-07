import './profile.css'
import Main from '../../layouts/Main' 
import { ProfileHead } from '../../components/ProfileComponent/ProfileHead/ProfileHead'
import { Link, Route, Routes, useLocation, useParams, } from 'react-router-dom'
import { ProfileInfo } from '../../components/ProfileComponent/ProfileInfo/ProfileInfo'
import { Media } from '../../components/ProfileComponent/Media/Media'
import { Likes } from '../../components/ProfileComponent/Likes/Likes'
 
import Loading from '../../components/Loading/Loading'
import PorfileNotFound from '../NotFound/ProfileNotFound/PorfileNotFound'
import { TweetsProfile } from '../../components/ProfileComponent/TweetsProfile/TweetsProfile'
import NotFound from '../NotFound/NotFound'   
import { useEffect, useState } from 'react'
import axios from '../../api/axios'
import { Retweet } from '../../components/ProfileComponent/Retweet/Retweet'
import { EditProfile } from '../../components/ProfileComponent/EditProfile/EditProfile'
import { AuthRoute } from '../../layouts/AuthLayout'
import { useStateContext } from '../../contexts/ContextProvider'
import ConnectionCheck from '../../assets/Helper/CheckConnexion'
function Profile() {
  const {pseudo}=useParams() 
  const path= useLocation().pathname  
  


  // i have a idea to re render this component after edit profile try to 
  //add a state into context and when user click to save change the value 
  //of state wih anythink and add to useEffect

  // you are here you can do it 😉✌

  // what are u doing here ??

  //i forgot how to use useParams so I came to check the professional how he was doing it 😊
  
  //😊😊












  const { render } = useStateContext();
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
  },[pseudo,render])
  return (
    <>
    {!loading && !data ? <PorfileNotFound/>:
      <Main>
        {loading  ?<Loading/>:
        <div className="profile scroll">
          <ProfileHead name={data.data.name}/>
          <ConnectionCheck>
            <ProfileInfo data1={data.data} />
            <div className="profile__links">
                <Link className={path.search('likes')==-1 && path.search('media')==-1 && path.search('retweet')==-1 ? 'active' :''} to='' > Tweets  </Link>
                <Link className={path.includes('retweet') ? 'active':''} to='retweet' > Retweets </Link>
                <Link className={path.includes('media') ? 'active' :''} to='media' > Media  </Link>
                <Link className={path.includes('likes') ? 'active' :''} to='likes'> Likes  </Link>
            </div>
            <div className="profile_selecte">
              <Routes>
                <Route path='/'  element={<TweetsProfile userInfo={data.data}/>}/>
                <Route path='/retweet' element={<Retweet userInfo={data?.data}/>}/>
                <Route path='/media' element={<Media user={data.data}/>}/>
                <Route path='/likes' element={<Likes user={data.data}/>}/>  
                <Route path='/edit' element={<AuthRoute element={EditProfile} />}/>  
                <Route path='/*' element={<NotFound />}/> 
              </Routes> 
            </div>
          </ConnectionCheck>
        </div>
        }
      </Main>
    } 
    </>
  )
}

export default Profile
