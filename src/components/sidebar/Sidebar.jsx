import './sidebar.css'
import SidebarItem from './SidebarItem'
import * as icons from './IconsImport'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Taawija from '../Icons/Taawija'
import { useState } from 'react'

export default function Sidebar() {
  const { loggedIn:Auth, user } = useSelector(state => state.Auth)
  const [actived, setActive] = useState(false)
  const showIn = () => setActive(true)
  const navigate = useNavigate();
  const showOut = event => {
    event.stopPropagation();
    setActive(false)
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
              <SidebarItem notf={true} to="/" text={Auth ? "Home" : "explore"}>
                {Auth ? <icons.HomeIcon fill="#e7e9ea"  /> : <icons.ExploreIcon fill="#e7e9ea" />}
              </SidebarItem>
              {
                Auth && (<>
                    <SidebarItem notf={false} to="/explore" text="Explore">
                      <icons.ExploreIcon fill="#e7e9ea" />
                    </SidebarItem>
                    <SidebarItem notf={true} to="/notifications" text="Notifications">
                      <icons.NotificationIcon fill="#e7e9ea" />
                    </SidebarItem>
                    <SidebarItem notf={false} to="/messages" text="Messages">
                      <icons.MessageIcon fill="#e7e9ea" />
                    </SidebarItem>
                    <SidebarItem notf={false} to="/bookmarks" text="Bookmarks">
                      <icons.Save fill="#e7e9ea" />
                    </SidebarItem>
                    <SidebarItem notf={false} to="/profile" text="Profile">
                      <icons.UserIcon fill="#e7e9ea" />
                    </SidebarItem>
                  </>
                )
              }

              <SidebarItem notf={false} to="/more" text="More">
                <icons.MoreIcon fill="#e7e9ea" />
              </SidebarItem>
              {
                Auth && <button className='tweet__bottom bg-blue' > <p className='text'>Tweet</p> <icons.NewTweetIcon className="d-none icon" fill="#e7e9ea" /></button>
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
                    <li className='hover'>Add an existing account</li>
                    <li onClick={()=> navigate('/logout')} className='hover'>Log out @{ user?.pseudo.toUpperCase() }</li>
                  </ul>
                </div>
                <div className="user__info" onClick={showIn}>
                  <div className="avatar">
                    <img src="https://pbs.twimg.com/profile_images/1613293977985318932/uR3GlJQf_normal.jpg" alt="" />
                  </div>
                  <div className="info">
                    <span className='name ellipsis'>{ user?.name }</span>
                    <span className='username ellipsis'>@{ user?.pseudo.toUpperCase() }</span>
                  </div>
                </div>
                <div className="user__action">
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
