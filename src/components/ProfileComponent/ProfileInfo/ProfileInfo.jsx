import React from 'react'
import ThreePoints from '../../Icons/ThreePoints'
import Born from '../../Icons/Born'
import Calendrier from '../../Icons/calendrier'
import { Link } from 'react-router-dom'

export const ProfileInfo = () => {
  return (
    <>
    <div className="profile_images">
    <div className="profile_banner">
      <img src="https://pbs.twimg.com/profile_banners/330262748/1635957145/600x200" alt="" className="img__banner" />
    </div>  
    <div className="profile__img">
      <div className="img__profile">
        <img src="https://pbs.twimg.com/profile_images/1613293977985318932/uR3GlJQf_200x200.jpg" alt="" />
      </div>
      <div className="profile__actions">
         {/* <div className="iconH">
          <ThreePoints/>
         </div> */}
         <button className='profile_btn btn-def'>Edit profile</button>
         {/* <button className='btn-def btn_follow'>Follow</button>
         <button className='btn-def btn_unfollow'>Following</button> */}
      </div>
    </div>
  </div>  

  <div className="profile__user_content">
    <div className='profile_column'>
      <span className="profile__user_name">Otmane Mansouri</span>
      <span className="profile__user_username">@MANOTM_1</span>
    </div>

    <div className="profile__bio">
      Here we go! ©
    </div>

    <div className="profile_user_info">
      <div className='profile_row'>
        <div className="profile_icon">
          <Born/>
        </div><span>Born February 14</span>
      </div>
      <div className='profile_row'>
        <div className="profile_icon">
          <Calendrier/> 
        </div><span>Joined July 2011</span>
      </div>
    </div>
    <div className="card__followers">
        <Link  className="c_followers underline">
            <span>236</span>
            <span className='username '>Following</span>
        </Link>
        <Link className="c_followers underline">
            <span>135.7M</span>
            <span className='username '>Followers</span>
        </Link>
    </div>
  </div>
  
  </>
  )
}
