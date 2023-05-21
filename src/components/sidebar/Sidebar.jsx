import './sidebar.css'
import SidebarItem from './SidebarItem'
import defaultProfile from '../../assets/images/defaultProfile.png'
import * as icons from './IconsImport'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Taawija from '../Icons/Taawija';
import { useState } from 'react'; 
import { useStateContext } from '../../contexts/ContextProvider'
import useFetch from '../../hooks/useFetch'
import { SideBarUser } from './SideBarUser'

export default function Sidebar() {
  const { loggedIn:Auth, user } = useSelector(state => state.Auth)
  const { setshow__createTweet } = useStateContext()
  const [actived, setActive] = useState(false)
  const showIn = () => setActive(true)
  const navigate = useNavigate();
  const { data, loading } = useFetch('/countNotification');
  const showOut = event => {
    event.stopPropagation();
    setActive(false)
  }
  const GoToProfile = e => {
    navigate(`/${user.pseudo.substring(1)}`)
    showOut(e)
  }
  return (
    <>
      <div className="sidebar">
        <div className="sidebar__content">
          <nav className='sidebar__optios'>
            <Link to='/' className="logo">
              <icons.TwitterIcon fill="#e7e9ea" />
            </Link>
            <ul className="sidebar__items">
              <SidebarItem notf={true} to="/" text={Auth ? "Home" : "explore"} 
              icon={Auth ? <icons.HomeIcon /> : <icons.ExploreIcon />}
              bold={Auth ? <icons.HomeBoldIcon /> : <icons.BoldExploreIcon />} />
              {
                Auth && (<>
                    <SidebarItem 
                      notf={false} 
                      to="/explore" 
                      text="Explore" icon={<icons.ExploreIcon />} bold={<icons.BoldExploreIcon />}
                    />
                    <SidebarItem notf={true} to="/notifications" text="Notifications" 
                      icon={<icons.NotificationIcon />}
                      bold={<icons.BoldNOtificationIcon />}
                      count={!loading ? data?.data?.count_notify : null}
                    />
                    
                    <SidebarItem to="/messages" text="Messages"
                      icon={<icons.MessageIcon />}
                      bold={<icons.BoldMessageIcon />}
                    />
                    <SidebarItem to="/bookmarks" text="Bookmarks" 
                      icon={<icons.Save />}
                      bold={<icons.BoldSave />}
                    />
                    <SidebarItem to={`/${user.pseudo.substring(1)}`} text="Profile"
                      icon={<icons.UserIcon />}
                      bold={<icons.BoldUserIcon />}
                    />
                  </>
                )
              }

              <SidebarItem to="/settings/account" text="More">
                <icons.MoreIcon fill="#e7e9ea" />
              </SidebarItem>
              {
                Auth && <button onClick={()=>setshow__createTweet(false)} className='tweet__bottom bg-blue' > <p className='text'>Tweet</p> <icons.NewTweetIcon className="d-none icon" fill="#e7e9ea" /></button>
              }
            </ul>
          </nav>
          {
            Auth && (
              <div className="sidebar__user hover">
                  {actived && <div onClick={showOut} className="overlay__logout"></div>}
                <div className={`popup signOutPopUp ${actived && 'active_logOut'}`}>
                  <div className="t3wija"><Taawija /></div>
                  <ul>
                    <li onClick={GoToProfile} className='hover'>Show {user.pseudo.substring(1)} profile</li>
                    <li onClick={()=> navigate('/logout')} className='hover'>Log out { user?.pseudo.toUpperCase() }</li>
                  </ul>
                </div>
                <div className="user__info" onClick={showIn}>
                 <SideBarUser pseudo={user?.pseudo}/>
                </div>
                <div onClick={showIn} className="user__action">
                  <icons.ThreePoints  />
                </div>
          </div>
            )
          }
        </div >
      </div >
    </>
  )
}
