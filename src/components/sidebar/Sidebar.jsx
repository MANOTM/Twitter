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
              <SidebarItem notf={true} to="/" text={Auth ? "Home" : "explore"} 
              icon={Auth ? <icons.HomeIcon /> : <icons.ExploreIcon />}
              bold={Auth ? <icons.HomeBoldIcon /> : <icons.BoldExploreIcon />} />
              {
                Auth && (<>
                    <SidebarItem 
                      notf={false} 
                      to="/explore" 
                      text="Explore" icon={<icons.ExploreIcon />} bold={<icons.BoldExploreIcon />} />
                    <SidebarItem notf={true} to="/notifications" text="Notifications" 
                      icon={<icons.NotificationIcon />}
                      bold={<icons.BoldNOtificationIcon />}
                    />
                    
                    <SidebarItem notf={false} to="/messages" text="Messages"
                      icon={<icons.MessageIcon />}
                      bold={<icons.BoldMessageIcon />}
                    />
                    <SidebarItem notf={false} to="/bookmarks" text="Bookmarks" 
                      icon={<icons.Save />}
                      bold={<icons.BoldSave />}
                    />
                    <SidebarItem notf={false} to="/profile" text="Profile"
                      icon={<icons.UserIcon />}
                      bold={<icons.BoldUserIcon />}
                    />
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
